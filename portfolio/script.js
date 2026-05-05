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
    'about.p1': 'CHIGI는 시각예술가이자 그래픽 디자이너입니다.',
    'about.p2': '그림일기를 그리듯 — 일상의 작고 여린 감정들을 이미지와 언어로 붙잡습니다. 내면을 들여다보는 방식으로 작업합니다.',
    'about.p3': '2024년, 100일간 홀로 유럽을 여행하며 쓴 단상집 《춤추는 독백》을 독립출판했습니다. 진정한 자유는 이방인의 삶이 아닌 내면으로부터 온다고 믿습니다.',
    'about.imgNote': '사진 추가 예정',
    'media.ytHint': 'YouTube 연동 예정',
    'media.ytCta':  '채널 바로가기 →',
    'media.igCta':  '팔로우하기 →',
    'ig.toon':  '툰',
    'ig.photo': '사진 & 개인',
    'ig.art':   '아트워크',
    'cat.all': '전체',
    'cat.albumCover': '앨범커버',
    'works.more': '더보기',
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
    'about.p2': 'Working like keeping a picture diary — she captures small, tender emotions from everyday life in image and language, always looking inward.',
    'about.p3': 'In 2024, she traveled Europe alone for 100 days and self-published 《Dancing Monologue》, a collection of solitary reflections. She believes true freedom comes not from living as a stranger in foreign places, but from exploring what lies within.',
    'about.imgNote': 'Photo coming soon',
    'media.ytHint': 'YouTube coming soon',
    'media.ytCta':  'Visit Channel →',
    'media.igCta':  'Follow →',
    'ig.toon':  'Toon',
    'ig.photo': 'Photo & Personal',
    'ig.art':   'Artwork',
    'cat.all': 'All',
    'cat.albumCover': 'Album Cover',
    'works.more': 'Load More',
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

/* ─── Works 모달 데이터 ─────────────────────────────────────── */
/* 나중에 desc(설명)와 link(음악 링크)를 여기서 채워넣으세요 */
const worksData = [
  { title: '너를 기다리고 있어', artist: '예례밴드',          year: '2026', desc: '', link: '' },
  { title: 'End(And)',           artist: 'Grace',             year: '2025', desc: '', link: '' },
  { title: '시큰',                artist: '조에',              year: '2025', desc: '', link: '' },
  { title: 'Hiraki',             artist: 'Gonhee',            year: '2025', desc: '', link: '' },
  { title: 'Joy of the Moment ver.2', artist: '한바탕 & KIMTAE', year: '2025', desc: '', link: '' },
  { title: 'Joy of the Moment ver.1', artist: '한바탕 & KIMTAE', year: '2025', desc: '', link: '' },
  { title: '야호',                artist: '아루단테',           year: '2025', desc: '', link: '' },
  { title: 'Hidden Things',      artist: 'NG',                year: '2025', desc: '', link: '' },
  { title: '말해줘',              artist: '이미블루',           year: '2024', desc: '', link: '' },
  { title: '못났어',              artist: '이미블루',           year: '2024', desc: '', link: '' },
  { title: '그 여름',             artist: '이미블루',           year: '2024', desc: '', link: '' },
  { title: '낮잠',                artist: '이미블루',           year: '2024', desc: '', link: '' },
  { title: 'Dark of Fantasy',    artist: '윤혜문',             year: '2024', desc: '', link: '' },
  { title: '애국가',              artist: '',                  year: '2024', desc: '', link: '' },
  { title: 'Cinema',             artist: '조주현',             year: '2023', desc: '', link: '' },
  { title: 'JUMP',               artist: '밴드기린',           year: '2023', desc: '', link: '' },
  { title: 'SICK',               artist: '',                  year: '2023', desc: '', link: '' },
  { title: 'Wave',               artist: '',                  year: '2022', desc: '', link: '' },
];

const modal       = document.getElementById('workModal');
const modalImg    = document.getElementById('modalImg');
const modalTitle  = document.getElementById('modalTitle');
const modalArtist = document.getElementById('modalArtist');
const modalYear   = document.getElementById('modalYear');
const modalDesc   = document.getElementById('modalDesc');
const modalLink   = document.getElementById('modalLink');

function openModal(index) {
  const data = worksData[index];
  const card = document.querySelectorAll('.work-card')[index];
  if (!data || !card) return;

  modalImg.src = card.querySelector('img').src;
  modalImg.alt = data.title;
  modalTitle.textContent  = data.title;
  modalArtist.textContent = data.artist;
  modalYear.textContent   = data.year;
  modalDesc.textContent   = data.desc;
  modalDesc.style.display = data.desc ? '' : 'none';

  if (data.link) {
    modalLink.href         = data.link;
    modalLink.textContent  = '음악 듣기 →';
    modalLink.style.display = '';
  } else {
    modalLink.style.display = 'none';
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.work-card').forEach((card, i) => {
  card.addEventListener('click', () => openModal(i));
});

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalBackdrop').addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ─── Works 더보기 ─────────────────────────────────────────── */
document.querySelectorAll('.work-card').forEach((card, i) => {
  if (i >= 6) card.classList.add('extra-card');
});

const worksMoreBtn = document.getElementById('worksMoreBtn');
if (worksMoreBtn) {
  worksMoreBtn.addEventListener('click', () => {
    document.querySelectorAll('.work-card.extra-card').forEach(card => {
      card.classList.remove('extra-card');
    });
    document.getElementById('worksMoreWrap').style.display = 'none';
  });
}

/* ─── Works 카테고리 필터 ─────────────────────────────────── */
document.querySelectorAll('.works-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.works-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    document.querySelectorAll('.work-card').forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});
