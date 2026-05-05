/* ─── i18n 사전 ─────────────────────────────────────────── */
const dict = {
  ko: {
    'nav.works':   'Works',
    'nav.about':   'About',
    'nav.media':   'Media',
    'nav.contact': 'Contact',
    'hero.sub':    '시각예술가 · 그래픽 디자이너',
    'hero.cta':    '작업물 보기',
    'cat.graphic': '그래픽 디자인',
    'cat.art':     '시각예술',
    'work.placeholder': '작업명 추가 예정',
    'about.p1': '치기는 시각예술가이자 그래픽 디자이너입니다.',
    'about.p2': '이미지와 언어 사이, 서로 다른 미디어의 문법을 넘나들며 자신만의 시각 언어를 구축합니다.',
    'about.p3': '사진, 타이포그래피, 영상, 인쇄물 — 매체의 경계를 질문하는 방식으로 작업합니다.',
    'about.imgNote': '사진 추가 예정',
    'media.ytHint': 'YouTube 연동 예정',
    'media.ytCta':  '채널 바로가기 →',
    'media.igCta':  '팔로우하기 →',
    'ig.toon':  '툰',
    'ig.photo': '사진 & 개인',
    'ig.art':   '아트워크',
  },
  en: {
    'nav.works':   'Works',
    'nav.about':   'About',
    'nav.media':   'Media',
    'nav.contact': 'Contact',
    'hero.sub':    'Visual Artist · Graphic Designer',
    'hero.cta':    'View Works',
    'cat.graphic': 'Graphic Design',
    'cat.art':     'Visual Art',
    'work.placeholder': 'Title coming soon',
    'about.p1': 'CHIGI is a visual artist and graphic designer.',
    'about.p2': 'Working in the space between image and language, she moves across media to build a visual language uniquely her own.',
    'about.p3': 'Photography, typography, moving image, print — her practice questions the boundaries between mediums.',
    'about.imgNote': 'Photo coming soon',
    'media.ytHint': 'YouTube coming soon',
    'media.ytCta':  'Visit Channel →',
    'media.igCta':  'Follow →',
    'ig.toon':  'Toon',
    'ig.photo': 'Photo & Personal',
    'ig.art':   'Artwork',
  },
};

/* ─── 언어 전환 ─────────────────────────────────────────── */
let lang = 'ko';

function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[lang][key] !== undefined) el.textContent = dict[lang][key];
  });
  document.documentElement.lang = lang;
  document.getElementById('langToggle').textContent = lang === 'ko' ? 'EN' : 'KO';
}

document.getElementById('langToggle').addEventListener('click', () => {
  lang = lang === 'ko' ? 'en' : 'ko';
  applyLang();
});

/* ─── 내비게이션 스크롤 효과 ─────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ─── 모바일 햄버거 메뉴 ─────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  document.body.style.overflow = open ? 'hidden' : '';
});

navMenu.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ─── 섹션 등장 애니메이션 ──────────────────────────────── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section-title, .work-card, .about-text, .about-img-wrap, .media-block, .contact-body')
  .forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });

/* fade-up 스타일 (JS로 동적 삽입 — CSS 파일 불필요) */
const style = document.createElement('style');
style.textContent = `
  .fade-up {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity .6s ease, transform .6s ease;
  }
  .fade-up.visible {
    opacity: 1;
    transform: none;
  }
  .work-card.fade-up { transition-delay: calc(var(--i, 0) * 80ms); }
`;
document.head.appendChild(style);

document.querySelectorAll('.work-card').forEach((el, i) => {
  el.style.setProperty('--i', i);
});
