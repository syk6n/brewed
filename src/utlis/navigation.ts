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
        }, 100);
      }
    }
  };
  
  export const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  export const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const isHomePage = window.location.pathname === '/';
    
    if (isHomePage) {
      scrollToContact();
    } else {
      setScrollTarget('contact');
      window.location.href = '/';
    }
  };