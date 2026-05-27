import { useState } from 'react';
import ServicesHero from '../components/servoces/ServicesHero';
import PrimaryServicesGrid from '../components/servoces/PrimaryServicesGrid';
import ManufacturingGrid from '../components/servoces/ManufacturingGrid';
import MachineryRentalsHub from '../components/servoces/MachineryRentalsHub';
import SafetyBanner from '../components/servoces/SafetyBanner';

const ServicesPage = () => {
    // 'all' | 'construction' | 'drilling' | 'rentals'
  const [activeFilter, setActiveFilter] = useState('all');
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Services Hero Accent & Sub-Nav */}
      <ServicesHero activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">

        {/* 2. Primary Structural Services Section */}
        {(activeFilter === 'all' || activeFilter === 'construction' || activeFilter === 'drilling') && (
          <PrimaryServicesGrid currentFilter={activeFilter} />
        )}

        {/* 3. Manufacturing & Systems Block */}
        {(activeFilter === 'all' || activeFilter === 'construction') && (
          <ManufacturingGrid />
        )}

        {/* 4. Heavy Duty Machinery Rentals Hub */}
        {(activeFilter === 'all' || activeFilter === 'rentals') && (
          <MachineryRentalsHub />
        )}
      </div>

      {/* 5. Safety & Compliance Banner */}
      <SafetyBanner />
    </div>
  );
};

export default ServicesPage;

