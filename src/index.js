import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

// Simple and direct approach for the "Know more" button
document.addEventListener('DOMContentLoaded', function() {
  // Get the "Know more" button
  const knowMoreBtn = document.querySelector('a[href="#about"]');
  
  if (knowMoreBtn) {
    // Force make it visible and clickable
    knowMoreBtn.style.visibility = 'visible';
    knowMoreBtn.style.pointerEvents = 'auto';
    knowMoreBtn.style.cursor = 'pointer';
    knowMoreBtn.style.display = 'inline-block';
    
    // Add click event listener directly to the button
    knowMoreBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Know more button clicked!');
      
      // Find the about section
      const aboutSection = document.querySelector('#about');
      if (aboutSection) {
        console.log('Scrolling to about section...');
        aboutSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      } else {
        console.log('About section not found');
      }
    });
  }
});

// Immediate execution to ensure button works
(function() {
  const knowMoreBtn = document.querySelector('a[href="#about"]');
  if (knowMoreBtn) {
    knowMoreBtn.style.cssText = 'visibility: visible !important; opacity: 1 !important; transform: none !important; display: inline-block !important; pointer-events: auto !important; cursor: pointer !important;';
    console.log('Button made clickable immediately');
  }
})();

// Backup smooth scroll handler for any other anchor links
document.addEventListener('click', function(e) {
  const target = e.target;
  
  // Check if it's an anchor link
  if (target.tagName === 'A' && target.getAttribute('href') && target.getAttribute('href').startsWith('#')) {
    const href = target.getAttribute('href');
    const targetElement = document.querySelector(href);
    
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }
});
