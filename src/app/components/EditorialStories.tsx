import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

const stories = [
  {
    id: 1,
    title: 'K-라이프스타일 따라잡기',
    desc: '지금 유행하는 K-뷰티 핫플에서 인생 뷰티, 놓치지마세요!',
    image: '/images/story-lifestyle.png',
  },
  {
    id: 2,
    title: 'K-체험 데이',
    desc: '한류 문화를 직접 체험하는 특별한 하루',
    image: '/images/story-kexperience.png',
  },
  {
    id: 3,
    title: 'Dessert 달콤한 강남 디저트 로드',
    desc: '강남의 인기 디저트 맛집을 한 번에!',
    image: '/images/story-dessert.png',
  },
  {
    id: 4,
    title: '한옥의 미를 만나다',
    desc: '전통과 현대가 어우러진 강남 속 한옥 여행',
    image: '/images/story-hanok.png',
  },
  {
    id: 5,
    title: '오감이 즐거운 공연 예술',
    desc: '강남에서 만나는 감동적인 라이브 공연의 세계',
    image: '/images/story-performance.png',
  },
  {
    id: 6,
    title: '감성 로컬을 여행하다, 은마상가',
    desc: '레트로 감성 가득한 은마상가의 숨은 핫플 탐방',
    image: '/images/story-eunma.png',
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

        {/* Featured - 강남 페스티벌 2026 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 rounded-2xl overflow-hidden relative cursor-pointer"
          style={{ boxShadow: '0 4px 20px rgba(180, 140, 120, 0.12)', backgroundColor: '#fff', height: '472px' }}
        >
          <img
            src="/images/hallyu-festival.png"
            alt="14th Gangnam Festival - HEY GANGNAM"
            className="w-full h-full object-contain"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, #fffaf7 0%, transparent 30%)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 md:px-10 md:py-8"
          >
            <div>
              <h3
                style={{
                  fontFamily: 'Pretendard, -apple-system, sans-serif',
                  fontSize: 'clamp(20px, 3vw, 26px)',
                  fontWeight: 700,
                  color: '#2d2926',
                  lineHeight: '1.3',
                }}
              >
                강남 페스티벌 2026
              </h3>
              <p
                style={{
                  fontFamily: 'Pretendard, -apple-system, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: 'rgba(45,41,38,0.5)',
                  marginTop: '4px',
                }}
              >
                Gangnam Festival
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="px-6 py-3 rounded-full shrink-0"
              style={{
                backgroundColor: '#e8628c',
                color: 'white',
                fontFamily: 'Pretendard, -apple-system, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              I'm Going!
            </motion.button>
          </div>
        </motion.div>

        {/* Story Cards - 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{
                y: -4,
                transition: { type: 'spring', stiffness: 400, damping: 17 }
              }}
              className="group cursor-pointer rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 2px 12px rgba(180, 140, 120, 0.08)' }}
            >
              <div className="relative h-[220px] overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${story.image})`,
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-5"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'Pretendard, -apple-system, sans-serif',
                      fontSize: '17px',
                      fontWeight: 700,
                      color: '#fff',
                      lineHeight: '1.4',
                    }}
                  >
                    {story.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Pretendard, -apple-system, sans-serif',
                      fontSize: '13px',
                      fontWeight: 400,
                      color: 'rgba(255,255,255,0.7)',
                      lineHeight: '1.5',
                      marginTop: '4px',
                    }}
                  >
                    {story.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
