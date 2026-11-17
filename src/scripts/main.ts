const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// sticky nav background
const nav = document.getElementById('nav');
const onScroll = () => nav?.classList.toggle('scrolled', scrollY > 10);
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// animated bar waves
type Shape = (x: number, t: number) => number;
function wave(id: string, n: number, shape: Shape, every: number, startDelay = 0) {
  const el = document.getElementById(id);
  if (!el) return;
  const bars = Array.from({ length: n }, () => el.appendChild(document.createElement('i')));
  const set = (t: number) =>
    bars.forEach((b, i) => (b.style.height = Math.max(6, Math.min(100, shape(i / n, t))) + '%'));
  setTimeout(() => set(0), startDelay);
  if (!reduce) {
    let t = 0;
    setInterval(() => set((t += 0.6)), every);
  }
}
const narrow = innerWidth < 600;
wave('heroWave', narrow ? 34 : 52, (x, t) => 10 + 70 * Math.pow(x, 1.6) + 9 * Math.sin(x * 22 + t) + 6 * Math.sin(x * 7 - t * 0.7), 1400, 900);
wave('finalWave', narrow ? 40 : 90, (x, t) => 30 + 35 * Math.sin(x * Math.PI) * (0.6 + 0.4 * Math.sin(x * 30 + t)), 1200);

// hero: type the prompt, then stream the agent feed
const cmd = '/launch-plan we launch on Product Hunt next Tuesday';
const typed = document.getElementById('typed');
const feed = Array.from(document.querySelectorAll<HTMLLIElement>('#feed li'));
let timers: number[] = [];
function runHero() {
  if (!typed) return;
  timers.forEach(clearTimeout);
  timers = [];
  feed.forEach((li) => li.classList.remove('on'));
  if (reduce) {
    typed.textContent = cmd;
    feed.forEach((li) => li.classList.add('on'));
    return;
  }
  typed.textContent = '';
  cmd.split('').forEach((_, i) => timers.push(window.setTimeout(() => (typed.textContent = cmd.slice(0, i + 1)), i * 38)));
  const done = cmd.length * 38;
  feed.forEach((li, k) => timers.push(window.setTimeout(() => li.classList.add('on'), done + 500 + k * 900)));
}
setTimeout(runHero, 1100);
if (!reduce) setInterval(runHero, 14000);

// KPI counters
setTimeout(() => {
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const to = Number(el.dataset.count);
    if (reduce) return;
    let v = 0;
    const step = Math.max(1, Math.round(to / 40));
    el.textContent = '0';
    const iv = setInterval(() => {
      v = Math.min(to, v + step);
      el.textContent = String(v);
      if (v >= to) clearInterval(iv);
    }, 30);
  });
}, 1500);

// department tabs (keyboard accessible)
const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
function select(i: number, focus = false) {
  tabs.forEach((tab, j) => {
    const on = i === j;
    tab.setAttribute('aria-selected', String(on));
    tab.tabIndex = on ? 0 : -1;
    const panel = document.getElementById(tab.getAttribute('aria-controls')!);
    if (panel) panel.hidden = !on;
  });
  if (focus) tabs[i].focus();
}
tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => select(i));
  tab.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') select((i + 1) % tabs.length, true);
    if (e.key === 'ArrowLeft') select((i - 1 + tabs.length) % tabs.length, true);
  });
});

// install terminal
const lines: [string, number][] = [
  ['<span class="p">$</span> npx github:getcmokit/cmokit init', 600],
  ['', 200],
  ['<span class="g">  ◆ CMOkit</span><span class="d">  ·  your AI CMO + marketing team</span>', 300],
  ['<span class="d">›</span> Installing into ~/your-startup', 400],
  ['<span class="g">✔ cmo kit → 56 agents, 505 skills, 32 commands</span>', 700],
  ['<span class="d">›   installed helper scripts → .claude/runtime/</span>', 300],
  ['<span class="d">›   wrote CLAUDE.md — fill it in so agents learn your project</span>', 300],
  ['<span class="g">✔ Done. Your AI team is ready.</span>', 0],
];
let termDone = false;
function runTerm() {
  const pre = document.getElementById('term');
  if (termDone || !pre) return;
  termDone = true;
  let out = '';
  let d = 0;
  lines.forEach(([l, w]) => {
    setTimeout(() => {
      out += l + '\n';
      pre.innerHTML = out;
    }, reduce ? 0 : d);
    d += w + 250;
  });
}

// reveal on scroll
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target as HTMLElement;
      el.classList.add('in');
      el.querySelectorAll<HTMLElement>('.meter i').forEach((m) => (m.style.width = m.dataset.w + '%'));
      if (el.classList.contains('term')) runTerm();
      io.unobserve(el);
    }),
  { threshold: 0.15 },
);
document.querySelectorAll<HTMLElement>('.rv').forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 70 + 'ms';
  io.observe(el);
});

// review slider
const slides = Array.from(document.querySelectorAll<HTMLElement>('[data-slide]'));
const dots = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-dot]'));
if (slides.length > 1) {
  let cur = 0;
  const go = (i: number) => {
    cur = i;
    slides.forEach((s, j) => (s.hidden = j !== i));
    dots.forEach((d, j) => d.setAttribute('aria-selected', String(j === i)));
  };
  dots.forEach((d, i) => d.addEventListener('click', () => { go(i); restart(); }));
  let iv = 0;
  const restart = () => {
    clearInterval(iv);
    if (!reduce) iv = window.setInterval(() => go((cur + 1) % slides.length), 7000);
  };
  restart();
}
