import React from 'react';
import { Hero } from '../components/Hero';
import { HomeServices } from '../components/HomeServices';
import { Projects } from '../components/Projects';
import { Features } from '../components/Features';
import { Comparison } from '../components/Comparison';
import { Pricing } from '../components/Pricing';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { LogoWall } from '../components/LogoWall';
import { ToolMarquee } from '../components/ToolMarquee';
import { Stats } from '../components/Stats';
import { Process } from '../components/Process';
import { TrustedCompanies } from '../components/TrustedCompanies';
import { ExpertiseSection } from '../components/ExpertiseSection';

interface HomeProps {
  onNavigate?: (page: 'home' | 'about' | 'services' | 'casestudies' | 'service', slug?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <ExpertiseSection />
      <Process />
      <HomeServices onNavigate={onNavigate} />
      <Testimonials />
      <Stats />
      <FAQ />
      <Contact />
    </>
  );
};
