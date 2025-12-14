import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    dates: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowNotification(true);
      setFormData({
        name: '',
        email: '',
        destination: '',
        dates: '',
        message: ''
      });
      
      // Hide notification after 5 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Begin Your Luxury Journey</h2>
          <p>Let our travel experts craft a personalized itinerary just for you</p>
          
          {showNotification && (
            <motion.div 
              className="notification success"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
            >
              Thank you for your inquiry! We will contact you within 24 hours.
              <button onClick={() => setShowNotification(false)}>×</button>
            </motion.div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <select 
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                required
              >
                <option value="">Preferred Destination</option>
                <option value="europe">Europe</option>
                <option value="asia">Asia</option>
                <option value="americas">Americas</option>
                <option value="africa">Africa</option>
                <option value="oceania">Oceania</option>
              </select>
              <input 
                type="text" 
                name="dates"
                placeholder="Travel Dates" 
                value={formData.dates}
                onChange={handleInputChange}
              />
            </div>
            <textarea 
              name="message"
              placeholder="Tell us about your dream vacation..." 
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
            />
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Plan My Trip'}
            </button>
          </form>
        </motion.div>
      </div>

      <style jsx>{`
        .contact {
          background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
          color: var(--white);
          padding: 100px 0;
        }

        .contact-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--white);
        }

        .contact-content p {
          font-size: 1.2rem;
          margin-bottom: 3rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .notification {
          background: linear-gradient(135deg, #4caf50 0%, #81c784 100%);
          color: white;
          padding: 1rem 1.5rem;
          border-radius: 10px;
          margin-bottom: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .notification button {
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0;
          line-height: 1;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .contact-form input,
        .contact-form select,
        .contact-form textarea {
          padding: 15px;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          background: rgba(255, 255, 255, 0.1);
          color: var(--white);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          font-family: inherit;
        }

        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        .contact-form select option {
          background: var(--secondary-color);
          color: var(--white);
        }

        .contact-form textarea {
          resize: vertical;
          min-height: 120px;
        }

        .contact-form input:disabled,
        .contact-form button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .form-group {
            grid-template-columns: 1fr;
          }

          .contact {
            padding: 60px 0;
          }

          .contact-content h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
