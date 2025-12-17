import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Discover Extraordinary Destinations
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Experience the world through our curated collection of luxury travel experiences
        </motion.p>
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
            Start Your Journey
          </button>
          <button className="btn btn-secondary" onClick={() => scrollToSection('destinations')}>
            Explore Destinations
          </button>
        </motion.div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>

      <style jsx>{`
        .hero {
          height: 100vh;
          background: linear-gradient(rgba(26, 35, 126, 0.4), rgba(26, 35, 126, 0.4)),
                      url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80') center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--white);
          position: relative;
        }

        .hero-content {
          max-width: 800px;
          padding: 0 20px;
          z-index: 2;
        }

        .hero-title {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .hero-subtitle {
          font-size: 1.3rem;
          margin-bottom: 2.5rem;
          font-weight: 300;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
        }

        .scroll-arrow {
          width: 20px;
          height: 20px;
          border-right: 2px solid var(--white);
          border-bottom: 2px solid var(--white);
          transform: rotate(45deg);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
