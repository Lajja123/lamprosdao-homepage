let gsapPromise: Promise<any> | null = null;
let scrollTriggerPromise: Promise<any> | null = null;

export async function loadGsap() {
  if (!gsapPromise) {
    gsapPromise = import("gsap");
  }

  const module = await gsapPromise;
  return module.gsap ?? module.default ?? module;
}

export async function loadGsapWithScrollTrigger() {
  const [gsap, scrollTriggerModule] = await Promise.all([
    loadGsap(),
    scrollTriggerPromise ?? (scrollTriggerPromise = import("gsap/ScrollTrigger")),
  ]);

  const ScrollTrigger =
    scrollTriggerModule.ScrollTrigger ??
    scrollTriggerModule.default ??
    scrollTriggerModule;

  if (!gsap.core.globals().ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  return { gsap, ScrollTrigger };
}

