import ContactHero from '../components/contact/ContactHero';
import ContactHeroGrid from '../components/contact/ContactHeroGrid';
import OperationalMap from '../components/contact/OperationalMap';

const ContactPage = () => {
  return (
    <div className=" min-h-screen">
         {/* 1. High-Impact Contact Hero Section */}
      <ContactHero />

      {/* 1. Main Split Hero Interface Grid */}
      <ContactHeroGrid />

      {/* 2. Full-Width Operational Footprint Map Integration */}
      <OperationalMap />
    </div>
  );
};

export default ContactPage;
