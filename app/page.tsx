import Navigation from './components/layout/Navigation';
import HeroSection from './components/layout/HeroSection';
import ProfileSection from './components/layout/ProfileSection';
import SkillSection from './components/layout/SkillSection';
import PositionSection from './components/layout/PositionSection';
import CertificationSection from './components/layout/CertificationSection';
import ProjectSection from './components/layout/ProjectSection';
import LinkSection from './components/layout/LinkSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        <Navigation />
        <HeroSection />
        <ProfileSection />
        <SkillSection />
        <PositionSection />
        <CertificationSection />
        <ProjectSection />
        <LinkSection />
      </main>

      {/* Footer */}
      <footer className="py-6 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 font-montserrat">
            Designed & Built by{' '}
            <span className="text-[#4A6670] dark:text-gray-300">yokomachi</span>
            <span className="mx-2">•</span>
            Last updated: January 2025
          </p>
        </div>
      </footer>
    </div>
  );
}
