import Navigation from './components/layout/Navigation';
import HeroSection from './components/layout/HeroSection';
import ProfileSection from './components/layout/ProfileSection';
import SkillSection from './components/layout/SkillSection';
import PositionSection from './components/layout/PositionSection';
import CertificationSection from './components/layout/CertificationSection';
import ProjectSection from './components/layout/ProjectSection';
import LinkSection from './components/layout/LinkSection';
import Footer from './components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        <Navigation />
        <div className="animate-fade-in">
          <HeroSection />
        </div>
        <div className="animate-fade-in-delay-200 border-b border-gray-200 dark:border-gray-800">
          <ProfileSection />
        </div>
        <div className="animate-fade-in-delay-200 border-b border-gray-200 dark:border-gray-800">
          <SkillSection />
        </div>
        <div className="animate-fade-in-delay-200 border-b border-gray-200 dark:border-gray-800">
          <PositionSection />
        </div>
        <div className="animate-fade-in-delay-200 border-b border-gray-200 dark:border-gray-800">
          <CertificationSection />
        </div>
        <div className="animate-fade-in-delay-200 border-b border-gray-200 dark:border-gray-800">
          <ProjectSection />
        </div>
        <div className="animate-fade-in-delay-200">
          <LinkSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
