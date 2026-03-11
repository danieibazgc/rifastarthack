// src/App.jsx
// Composición principal de la landing page RifaStartHack

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProgressBar from '@/components/ProgressBar';
import TeamSection from '@/components/TeamSection';
import EventSection from '@/components/EventSection';
import RaffleSection from '@/components/RaffleSection';
import ServicesSection from '@/components/ServicesSection';
import PaymentSection from '@/components/PaymentSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProgressBar />
      <TeamSection />
      <EventSection />
      <RaffleSection />
      <ServicesSection />
      <PaymentSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
