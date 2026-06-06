import HeroSection from './components/HeroSection';
import SummarySection from './components/SummarySection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import AchievementsSection from './components/AchievementsSection';
import CredentialsSection from './components/CredentialsSection';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <main
      className="relative w-full"
      style={{ overflowX: 'clip', background: '#0C0C0C' }}
    >
      <HeroSection />
      <SummarySection />
      <ExperienceSection />
      <SkillsSection />
      <AchievementsSection />
      <CredentialsSection />
      <ContactSection />
    </main>
  );
};

export default App;
