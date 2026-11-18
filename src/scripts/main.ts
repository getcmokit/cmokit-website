const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// sticky nav background
const nav = document.getElementById('nav');
const onScroll = () => nav?.classList.toggle('scrolled', scrollY > 10);
addEventListener('scroll', onScroll, { passive: true });
onScroll();

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
