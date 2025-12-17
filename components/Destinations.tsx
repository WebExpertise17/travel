// Add at the beginning of the Destinations component function
useEffect(() => {
  console.log('Destinations component mounted');
  console.log('Total destinations loaded:', destinations.length);
}, []);

// Add in destination card click/interaction
const handleDestinationClick = (destination: string) => {
  console.log('Destination viewed:', destination);
};