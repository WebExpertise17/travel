import type { NextPage } from 'next';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import Experiences from '../components/Experiences';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>LuxVoyage - Premium Travel Experiences</title>
        <meta name="description" content="Discover extraordinary destinations through our curated collection of luxury travel experiences" />
        <meta name="keywords" content="luxury travel, premium vacations, exclusive destinations, travel experiences" />
        <meta property="og:title" content="LuxVoyage - Premium Travel Experiences" />
        <meta property="og:description" content="Discover extraordinary destinations through our curated collection of luxury travel experiences" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <main>
        <Hero />
        <Destinations />
        <Experiences />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
