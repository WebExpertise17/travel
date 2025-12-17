// Add at the beginning of the Home component function
useEffect(() => {
  console.log('Home page mounted');
  console.log('Environment:', process.env.NODE_ENV);
}, []);