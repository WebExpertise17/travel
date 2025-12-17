// Add at the beginning of the Contact component function
useEffect(() => {
  console.log('Contact component mounted');
}, []);

// Add in form submission handler
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log('Contact form submitted with data:', formData);
  // existing form validation and submission logic
};

// Add in input change handler
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  console.log('Form field changed:', name, 'Value:', value);
  setFormData(prev => ({ ...prev, [name]: value }));
};

// Add after successful submission
setShowNotification(true);
console.log('Form submitted successfully, notification displayed');