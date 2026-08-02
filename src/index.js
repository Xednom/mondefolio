import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

// Smooth scroll handler for in-page anchor links
document.addEventListener('click', function (e) {
  const target = e.target.closest('a[href^="#"]');
  if (!target) return;

  const href = target.getAttribute('href');
  const targetElement = document.querySelector(href);
  if (!targetElement) return;

  e.preventDefault();
  targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
