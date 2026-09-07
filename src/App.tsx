/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesSection } from './components/FeaturesSection';
import { ServicesSection } from './components/ServicesSection';
import { ReviewSection } from './components/ReviewSection';
import { LocationAndHours } from './components/LocationAndHours';
import { Footer } from './components/Footer';
import { FloatingActionBar } from './components/FloatingActionBar';
import { AppointmentModal } from './components/AppointmentModal';

export default function App() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenAppointment = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setAppointmentModalOpen(true);
  };

  const handleCloseAppointment = () => {
    setAppointmentModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] selection:bg-[#C4A062] selection:text-black font-sans">
      {/* Header & Navigation */}
      <Navbar onOpenAppointment={() => handleOpenAppointment()} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onOpenAppointment={() => handleOpenAppointment()} />

        {/* Brand Values & Salon Features */}
        <FeaturesSection />

        {/* Services & Price Menu */}
        <ServicesSection onSelectService={(serviceId) => handleOpenAppointment(serviceId)} />

        {/* Customer Reviews & Google Rating (4.8 / 25 Reviews) */}
        <ReviewSection />

        {/* Location, Directions & Working Hours */}
        <LocationAndHours />
      </main>

      {/* Footer */}
      <Footer onOpenAppointment={() => handleOpenAppointment()} />

      {/* Floating Action Bar for Mobile & Quick Contact */}
      <FloatingActionBar onOpenAppointment={() => handleOpenAppointment()} />

      {/* Interactive WhatsApp & Web Appointment Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={handleCloseAppointment}
        selectedServiceId={selectedServiceId}
      />
    </div>
  );
}
