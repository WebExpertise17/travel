// Add at the beginning of the Navigation component function
useEffect(() => {
  console.log('Navigation component mounted');
}, []);

// Add in handleNavClick function
const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  console.log('Navigation clicked:', id);
  e.preventDefault();
  // existing scroll logic
};

// Add in mobile menu toggle
const toggleMobileMenu = () => {
  console.log('Mobile menu toggled:', !isMobileMenuOpen);
  setIsMobileMenuOpen(!isMobileMenuOpen);
};