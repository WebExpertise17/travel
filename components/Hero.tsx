// Add at the beginning of the Hero component function
useEffect(() => {
  console.log('Hero component mounted');
}, []);

// Add in CTA button click handlers
const handleExploreClick = () => {
  console.log('Explore Destinations button clicked');
  // existing navigation logic
};

const handleContactClick = () => {
  console.log('Contact Us button clicked');
  // existing navigation logic
};