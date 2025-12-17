// Add at the beginning of the Experiences component function
useEffect(() => {
  console.log('Experiences component mounted');
  console.log('Total experiences loaded:', experiences.length);
}, []);

// Add in experience card interaction
const handleExperienceClick = (experience: string) => {
  console.log('Experience viewed:', experience);
};