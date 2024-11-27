import { useEffect } from 'react';

// Store the scroll target in sessionStorage to persist across page loads
export const setScrollTarget = (target: string) => {
  sessionStorage.setItem('scrollTarget', target);
};

// Check and execute any pending scroll actions
export const checkAndScrollToTarget = () => {
  const scrollTarget = sessionStorage.getItem('scrollTarget');
  if (scrollTarget) {
    sessionStorage.removeItem('scrollTarget');
    const element = document.getElementById(scrollTarget);
    if (element) {
      // Small delay to ensure the page is fully loaded
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 500); // Increased delay for more reliable loading
    }
  }
};

// Custom hook to handle scroll on mount
export const useScrollOnMount = () => {
  useEffect(() => {
    // Check URL hash on mount
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    } else {
      checkAndScrollToTarget();
    }
  }, []);
};

export const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export const handleContactClick = (e: React.MouseEvent) => {
  e.preventDefault();
  const currentPath = window.location.pathname;
  const baseUrl = window.location.origin;
  
  if (currentPath === '/') {
    scrollToContact();
  } else {
    setScrollTarget('contact');
    window.location.href = `${baseUrl}/#contact`;
  }
};