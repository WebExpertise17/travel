// Add in scroll event listener
useEffect(() => {
  const handleScroll = () => {
    const scrolled = window.scrollY > 300;
    if (scrolled !== showButton) {
      console.log('Scroll to top button visibility changed:', scrolled);
      setShowButton(scrolled);
    }
  };
  // existing event listener logic
}, [showButton]);

// Add in scroll to top handler
const scrollToTop = () => {
  console.log('Scroll to top button clicked');
  window.scrollTo({ top: 0, behavior: 'smooth' });
};