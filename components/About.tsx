import { motion } from 'framer-motion';
import Image from 'next/image';

const About: React.FC = () => {
  const stats = [
    { number: '50+', label: 'Countries' },
    { number: '10,000+', label: 'Happy Travelers' },
    { number: '15', label: 'Years Experience' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Redefining Luxury Travel</h2>
            <p>
              For over a decade, LuxVoyage has been crafting extraordinary travel experiences 
              for the world's most discerning travelers. We believe that travel is not just 
              about destinations, but about creating lasting memories through exceptional 
              service, attention to detail, and access to the extraordinary.
            </p>
            <div className="stats">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image 
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Luxury travel"
              width={500}
              height={400}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .about {
          background: var(--accent-color);
          padding: 100px 0;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-text h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: var(--text-dark);
        }

        .about-text p {
          font-size: 1.1rem;
          color: var(--text-light);
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .stats {
          display: flex;
          gap: 2rem;
        }

        .stat {
          text-align: center;
        }

        .stat h3 {
          font-size: 2.5rem;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .stat p {
          color: var(--text-light);
          font-weight: 500;
        }

        .about-image {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .stats {
            justify-content: center;
          }

          .about {
            padding: 60px 0;
          }
        }

        @media (max-width: 480px) {
          .stats {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
