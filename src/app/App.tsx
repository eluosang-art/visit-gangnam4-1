import { GNB } from './components/GNB';
import { Hero } from './components/Hero';
import { ThemedDestinations } from './components/ThemedDestinations';
import { StoryBookScroll } from './components/StoryBookScroll';
import { TreasureMap } from './components/TreasureMap';
import { HallyuTourismCourses } from './components/HallyuTourismCourses';
import { EditorialStories } from './components/EditorialStories';
import { PeopleOfGangnam } from './components/PeopleOfGangnam';
import { VideoShowcase } from './components/VideoShowcase';
import { CTAFooter } from './components/CTAFooter';
import { FAQ } from './components/FAQ';

export default function App() {
  return (
    <div className="min-h-screen" style={{
      fontFamily: 'Pretendard, -apple-system, sans-serif',
      backgroundColor: '#fffaf7',
      color: '#2d2926'
    }}>
      <GNB />
      <Hero />
      <ThemedDestinations />
      <StoryBookScroll />
      <EditorialStories />
      <HallyuTourismCourses />
      <PeopleOfGangnam />
      <VideoShowcase />
      <TreasureMap />
      <FAQ />
      <CTAFooter />
    </div>
  );
}