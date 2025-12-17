import { motion } from 'framer-motion';

interface Experience {
  icon: string;
  title: string;
  description: string;
}

const experiences: Experience[] = [
  {
    icon: '🚢',
    title: 'Private Yacht Charters',
    description: 'Cruise the world\'s most exclusive waters aboard your private luxury vessel with dedicated crew and personalized service.'
  },
  {
    icon: '🚁',
    title: 'Helicopter Tours',
    description: 'Soar above breathtaking landscapes with private helicopter tours offering unparalleled aerial views of iconic destinations.'
  },
  {
    icon: '🧘',
    title: 'Wellness Retreats',
    description: 'Rejuvenate your mind, body, and soul at world-class spa resorts with personalized wellness programs.'
  },
  {
    icon: '🍽️',
    title: 'Michelin Dining',
    description: 'Savor exceptional cuisine at Michelin-starred restaurants with private chef experiences and exclusive reservations.'
  }
];

const Experiences: React.FC = () => {
  return (
    <section id="experiences" className="experiences">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Curated Experiences</h2>
          <p className="section-subtitle">Exclusive access to extraordinary moments</p>
        </div>
        <div className="experiences-content">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="experience-icon">
                {experience.icon}
              </div>
              <h3>{experience.title}</h3>
              <p>{experience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .experiences {
          background: var(--white);
          padding: 100px 0;
        }

        .experiences-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
        }

        .experience-item {
          text-align: center;
          padding: 2rem;
          border-radius: 20px;
          background: var(--white);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .experience-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
        }

        .experience-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #d4af37 0%, #f4e4a1 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 2rem;
          color: var(--white);
        }

        .experience-item h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .experience-item p {
          color: var(--text-light);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .experiences-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .experiences {
            padding: 60px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Experiences;
