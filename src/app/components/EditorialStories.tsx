import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

const stories = [
  {
    id: 1,
    featured: true,
    title: 'K-라이프스타일 따라잡기',
    categoryLabel: '원데이 코스',
    categoryBg: '#fef0ec',
    categoryText: '#e8628c',
    image: '/images/story-lifestyle.png',
  },
  {
    id: 2,
    featured: false,
    title: 'K-체험 데이',
    categoryLabel: '한류 관광',
    categoryBg: '#fef4ec',
    categoryText: '#c07840',
    image: '/images/story-kexperience.png',
  },
  {
    id: 3,
    featured: false,
    title: 'Dessert 달콤한 강남 디저트 로드',
    categoryLabel: '로컬 추천',
    categoryBg: '#f0faf5',
    categoryText: '#4a9a6a',
    image: '/images/story-dessert.png',
  },
];

const SparkleStars = () => (
  <>
    <motion.div
      className="absolute"
      style={{ top: '0px', right: '100px' }}
      animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0L6.732 5.268L12 6L6.732 6.732L6 12L5.268 6.732L0 6L5.268 5.268L6 0Z" fill="#e8628c" opacity="0.25" />
      </svg>
    </motion.div>
    <motion.div
      className="absolute"
      style={{ top: '16px', right: '60px' }}
      animate={{ scale: [1, 1.4, 1], rotate: [0, -180, -360] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 0L7.854 6.146L14 7L7.854 7.854L7 14L6.146 7.854L0 7L6.146 6.146L7 0Z" fill="#e8628c" opacity="0.25" />
      </svg>
    </motion.div>
    <motion.div
      className="absolute"
      style={{ top: '8px', left: '200px' }}
      animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 0L5.61 4.39L10 5L5.61 5.61L5 10L4.39 5.61L0 5L4.39 4.39L5 0Z" fill="#e8628c" opacity="0.25" />
      </svg>
    </motion.div>
  </>
);

export function EditorialStories() {
  const featuredStory = stories[0];
  const regularStories = stories.slice(1);

  return (
    <section
      className="relative py-20"
      style={{ backgroundColor: '#fffaf7' }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        {/* Section Heading */}
        <div className="mb-12 relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'Pretendard, -apple-system, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              color: '#b8a99a',
              textTransform: 'lowercase',
              marginBottom: '8px',
            }}
          >
            Stories that make you want to pack
          </motion.p>

          <div className="flex items-center gap-3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: 'Pretendard, -apple-system, sans-serif',
                fontSize: 'clamp(32px, 4vw, 44px)',
                fontWeight: 800,
                color: '#2d2926',
                textShadow: '0 0 20px rgba(232, 98, 140, 0.08)',
              }}
            >
              Gangnam Stories
            </motion.h2>

            <motion.div
              animate={{ y: [0, -4, 0], rotate: [0, -5, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Briefcase className="w-10 h-10" style={{ color: '#e8628c' }} />
            </motion.div>
          </div>

          <div className="hidden md:block">
            <SparkleStars />
          </div>
        </div>

        {/* Featured Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 rounded-2xl overflow-hidden relative group cursor-pointer"
          style={{ boxShadow: '0 4px 20px rgba(180, 140, 120, 0.12)' }}
        >
          <div className="relative h-[300px] md:h-[380px] overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${featuredStory.image})`,
                filter: 'brightness(0.85)',
              }}
            />
            {/* Overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 p-8 md:p-10"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
              }}
            >
              <div
                className="inline-block px-3 py-1 rounded-full mb-4"
                style={{
                  backgroundColor: featuredStory.categoryBg,
                  color: featuredStory.categoryText,
                  fontFamily: 'Pretendard, -apple-system, sans-serif',
                  fontSize: '12px',
                  fontWeight: 600,
                }}
              >
                {featuredStory.categoryLabel}
              </div>
              <h3
                style={{
                  fontFamily: 'Pretendard, -apple-system, sans-serif',
                  fontSize: 'clamp(24px, 3vw, 30px)',
                  fontWeight: 700,
                  color: '#fff',
                  lineHeight: '1.3',
                }}
              >
                {featuredStory.title}
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Regular Stories - 2 Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regularStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -4,
                transition: { type: 'spring', stiffness: 400, damping: 17 }
              }}
              className="group cursor-pointer rounded-2xl overflow-hidden relative"
              style={{ boxShadow: '0 2px 12px rgba(180, 140, 120, 0.08)' }}
            >
              <div className="relative h-[220px] overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${story.image})`,
                    filter: 'brightness(0.85)',
                  }}
                />
                {/* Overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
                  }}
                >
                  <div
                    className="inline-block px-3 py-1 rounded-full mb-3"
                    style={{
                      backgroundColor: story.categoryBg,
                      color: story.categoryText,
                      fontFamily: 'Pretendard, -apple-system, sans-serif',
                      fontSize: '12px',
                      fontWeight: 600,
                    }}
                  >
                    {story.categoryLabel}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Pretendard, -apple-system, sans-serif',
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#fff',
                      lineHeight: '1.4',
                    }}
                  >
                    {story.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
