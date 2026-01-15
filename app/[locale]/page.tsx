import Navigation from '../components/layout/Navigation';
import HeroSection from '../components/layout/HeroSection';
import ProfileSection from '../components/layout/ProfileSection';
import SkillSection from '../components/layout/SkillSection';
import PositionSection from '../components/layout/PositionSection';
import CertificationSection from '../components/layout/CertificationSection';
import ProjectSection from '../components/layout/ProjectSection';
import LinkSection from '../components/layout/LinkSection';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('footer');

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
      <footer className="py-6 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 animate-fade-in-delay-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 font-montserrat">
            {t('designedBy')}{' '}
            <span className="text-[#4A6670] dark:text-gray-300">yokomachi</span>
            <span className="mx-2">•</span>
            {t('lastUpdated')}
          </p>
        </div>
      </footer>
    </div>
  );
}
