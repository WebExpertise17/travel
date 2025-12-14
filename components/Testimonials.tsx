import { motion } from 'framer-motion';
import Image from 'next/image';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  location: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Every detail was perfectly orchestrated. LuxVoyage turned our honeymoon into an unforgettable journey of luxury and romance.",
    author: "Sarah Johnson",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    content: "The level of service and attention to detail is unmatched. LuxVoyage has redefined what luxury travel means.",
    author: "James Mitchell",
    location: "London, UK", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Travelers Say</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
              <div className="testimonial-author">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  width={60}
                  height={60}
                  style={{ objectFit: 'cover', borderRadius: '50%' }}
                />
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <span>{testimonial.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials {
          background: var(--white);
          padding: 100px 0;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        .testimonial-card {
          background: var(--white);
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
        }

        .testimonial-content {
          margin-bottom: 2rem;
        }

        .testimonial-content p {
          font-size: 1.1rem;
          font-style: italic;
          color: var(--text-light);
          line-height: 1.8;
          position: relative;
        }

        .testimonial-content p::before {
          content: '"';
          font-size: 4rem;
          color: var(--primary-color);
          position: absolute;
          left: -20px;
          top: -20px;
          font-family: 'Playfair Display', serif;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .author-info h4 {
          font-size: 1.1rem;
          color: var(--text-dark);
          margin-bottom: 0.2rem;
        }

        .author-info span {
          color: var(--text-light);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .testimonials {
            padding: 60px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
