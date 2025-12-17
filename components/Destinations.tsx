import { motion } from 'framer-motion';
import Image from 'next/image';

interface Destination {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Santorini, Greece',
    description: 'Azure waters meet white-washed elegance in this Mediterranean paradise',
    price: 'From $2,899',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    name: 'Tokyo, Japan',
    description: 'Where ancient traditions harmonize with futuristic innovation',
    price: 'From $3,299',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    name: 'Maldives',
    description: 'Ultimate tropical luxury in overwater bungalows and crystal waters',
    price: 'From $4,799',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }
];

const Destinations: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
    <section id="destinations" className="destinations">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Destinations</h2>
          <p className="section-subtitle">Handpicked locations for the discerning traveler</p>
        </div>
        <div className="destinations-grid">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              className="destination-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card-image">
                <Image 
                  src={destination.image} 
                  alt={destination.name}
                  width={400}
                  height={250}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div className="card-content">
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
                <div className="card-price">{destination.price}</div>
                <button className="btn btn-outline" onClick={scrollToContact}>
                  Discover More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .destinations {
          background: var(--accent-color);
          padding: 100px 0;
        }

        .destinations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .destination-card {
          background: var(--white);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          position: relative;
        }

        .destination-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
        }

        .card-image {
          height: 250px;
          overflow: hidden;
          position: relative;
        }

        .card-content {
          padding: 2rem;
        }

        .card-content h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .card-content p {
          color: var(--text-light);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .card-price {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--primary-color);
          margin-bottom: 1.5rem;
        }

        @media (max-width: 768px) {
          .destinations-grid {
            grid-template-columns: 1fr;
          }

          .destinations {
            padding: 60px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Destinations;
