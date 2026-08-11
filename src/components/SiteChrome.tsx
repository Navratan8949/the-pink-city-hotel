import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent, type ReactNode } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '@/data/content';

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const curtain = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((value) => {
        if (value >= 100) {
          window.clearInterval(interval);
          window.setTimeout(() => {
            if (curtain.current) {
              gsap.to(curtain.current, { yPercent: -100, duration: 1.2, ease: 'power4.inOut', onComplete: () => setVisible(false) });
            }
          }, 350);
          return 100;
        }
        return value + Math.round(Math.random() * 14 + 4);
      });
    }, 90);
    return () => window.clearInterval(interval);
  }, []);

  if (!visible) return null;
  return (
    <div ref={curtain} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal text-ivory">
      <div className="text-center">
        <p className="font-serif text-5xl tracking-[0.25em] md:text-7xl">AURELIA</p>
        <p className="mt-4 text-[11px] font-medium tracking-[0.45em] text-gold">PALACE HOTEL & RESORT</p>
      </div>
      <div className="absolute bottom-10 flex w-48 items-center gap-4 text-xs tracking-[0.25em] text-beige/70">
        <span className="h-px flex-1 bg-beige/30"><span className="block h-px bg-gold transition-all" style={{ width: `${progress}%` }} /></span>
        <span>{Math.min(progress, 100)}%</span>
      </div>
    </div>
  );
}

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (event: globalThis.MouseEvent) => {
      gsap.to(dot.current, { x: event.clientX, y: event.clientY, duration: 0.1 });
      gsap.to(ring.current, { x: event.clientX, y: event.clientY, duration: 0.35, ease: 'power2.out' });
    };
    const over = (event: globalThis.MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest('[data-cursor="view"]')) ring.current?.classList.add('is-view');
      else if (target.closest('a, button')) ring.current?.classList.add('is-hover');
    };
    const out = () => ring.current?.classList.remove('is-view', 'is-hover');
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mouseout', out);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over); window.removeEventListener('mouseout', out); };
  }, []);
  return <><div ref={dot} className="cursor-dot" /><div ref={ring} className="cursor-ring" /></>;
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (open) gsap.fromTo('.mobile-link', { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: 'power4.out', delay: 0.2 });
  }, [open]);

  const toggle = () => {
    setOpen((value) => !value);
    if (!open) gsap.set(menu.current, { display: 'flex' });
    else gsap.to(menu.current, { opacity: 0, duration: 0.35, onComplete: () => gsap.set(menu.current, { display: 'none', clearProps: 'opacity' }) });
  };

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${scrolled ? 'bg-charcoal/90 py-4 backdrop-blur-md' : 'py-6 md:py-8'} ${open ? 'text-charcoal' : 'text-ivory'}`}>
        <div className="container-luxury flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="font-serif text-2xl tracking-[0.2em] md:text-3xl">AURELIA</span>
            <span className="hidden h-5 w-px bg-gold/70 sm:block" />
            <span className="hidden text-[8px] leading-tight tracking-[0.25em] sm:block">PALACE<br />HOTEL</span>
          </Link>
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((item) => <Link key={item.path} to={item.path} className="relative text-xs uppercase tracking-[0.2em] transition-colors hover:text-gold after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full">{item.label}</Link>)}
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/booking" className="hidden border border-gold px-5 py-3 text-[11px] font-medium tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-charcoal md:block">BOOK YOUR STAY</Link>
            <button aria-label="Open menu" onClick={toggle} className="flex h-10 w-10 items-center justify-center border border-current/40 lg:hidden">{open ? <X size={18} /> : <Menu size={18} />}</button>
          </div>
        </div>
      </header>
      <div ref={menu} className="fixed inset-0 z-40 hidden flex-col justify-center bg-ivory px-8 text-charcoal lg:hidden">
        <div className="mb-10 text-[11px] uppercase tracking-[0.3em] text-gold">Explore Aurelia</div>
        <nav className="flex flex-col gap-2">
          {navLinks.map((item) => <Link key={item.path} to={item.path} onClick={toggle} className="mobile-link overflow-hidden font-serif text-5xl leading-[1.05] md:text-7xl">{item.label}</Link>)}
        </nav>
        <div className="mt-12 flex items-center gap-4 text-xs tracking-[0.2em]"><Link to="/booking" onClick={toggle} className="border border-charcoal px-5 py-3">BOOK YOUR STAY</Link><span className="text-gold">JAIPUR · INDIA</span></div>
      </div>
      {location.pathname !== '/' && <div className="pointer-events-none fixed left-1/2 top-24 z-30 hidden -translate-x-1/2 text-[11px] uppercase tracking-[0.3em] text-gold/70 md:block">{location.pathname.replace('/', '').replace(/-/g, ' ')}</div>}
    </>
  );
}

export function MagneticButton({ children, to, light = false }: { children: ReactNode; to?: string; light?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const content = <><span>{children}</span><ArrowUpRight size={15} strokeWidth={1.2} /></>;
  const className = `group inline-flex items-center gap-5 border px-6 py-4 text-xs font-medium tracking-[0.2em] transition-all duration-500 ${light ? 'border-ivory/50 text-ivory hover:border-gold hover:bg-gold hover:text-charcoal' : 'border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-ivory'}`;
  const handleMove = (event: ReactMouseEvent<HTMLAnchorElement>) => { const bounds = ref.current?.getBoundingClientRect(); if (!bounds || window.matchMedia('(hover: none)').matches) return; const x = (event.clientX - bounds.left - bounds.width / 2) * 0.15; const y = (event.clientY - bounds.top - bounds.height / 2) * 0.15; gsap.to(ref.current, { x, y, duration: 0.4, ease: 'power2.out' }); };
  const handleLeave = () => gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
  return <Link ref={ref} to={to || '#'} onMouseMove={handleMove} onMouseLeave={handleLeave} className={className}>{content}</Link>;
}

export function ScrollDown() {
  return <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[11px] tracking-[0.3em] text-ivory/70"><span>SCROLL TO DISCOVER</span><span className="h-12 w-px bg-gradient-to-b from-gold to-transparent" /></div>;
}

export function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <div className={`mb-8 flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] ${light ? 'text-gold' : 'text-gold-dark'}`}><span className="h-px w-8 bg-current" />{children}</div>;
}

export function Footer() {
  return <footer className="bg-charcoal px-6 pb-8 pt-20 text-ivory md:px-12 md:pt-28"><div className="container-luxury !px-0"><div className="grid gap-16 md:grid-cols-[1.5fr_1fr_1fr] md:gap-8"><div><p className="font-serif text-6xl tracking-[0.12em] md:text-8xl">AURELIA</p><p className="mt-4 text-[11px] tracking-[0.35em] text-gold">PALACE HOTEL & RESORT</p><p className="mt-12 max-w-xs font-serif text-2xl leading-tight text-beige">Where timeless luxury meets the soul of Rajasthan.</p></div><div><p className="mb-6 text-[11px] tracking-[0.3em] text-gold">EXPLORE</p><div className="flex flex-col items-start gap-4">{navLinks.map((item) => <Link key={item.path} to={item.path} className="text-sm text-beige transition-colors hover:text-gold">{item.label}</Link>)}<Link to="/contact" className="text-sm text-beige transition-colors hover:text-gold">Contact</Link></div></div><div><p className="mb-6 text-[11px] tracking-[0.3em] text-gold">FIND US</p><p className="max-w-[220px] text-sm leading-7 text-beige">Jaipur, Rajasthan<br />India 302001</p><p className="mt-6 text-sm text-beige">+91 XXX XXX XXXX</p><a href="mailto:stay@aureliahotel.com" className="mt-2 block text-sm text-beige hover:text-gold">stay@aureliahotel.com</a><div className="mt-8 flex gap-5 text-xs uppercase tracking-[0.2em] text-beige"><a href="#instagram">Instagram</a><a href="#facebook">Facebook</a></div></div></div><div className="mt-20 flex flex-col justify-between gap-4 border-t border-ivory/15 pt-6 text-[11px] tracking-[0.2em] text-beige/60 md:flex-row"><span>© 2026 AURELIA PALACE HOTEL & RESORT</span><div className="flex gap-6"><a href="#privacy">Privacy</a><a href="#terms">Terms</a><a href="#accessibility">Accessibility</a></div></div></div></footer>;
}

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { if (!ref.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; gsap.fromTo(ref.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, delay, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 85%' } }); }, [delay]);
  return <div ref={ref} className={className}>{children}</div>;
}
