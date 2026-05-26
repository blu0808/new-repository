/* ─── i18n 사전 ─────────────────────────────────────────── */
const dict = {
  ko: {
    'nav.works':   'Works',
    'nav.media':   'Media',
    'nav.contact': 'Email',
    'hero.sub':    '시각예술가 · 그래픽 디자이너',
    'hero.cta':    '작업물 보기',
    'cat.graphic': '그래픽 디자인',
    'cat.art':     '시각예술',
    'work.placeholder': '작업명 추가 예정',
    'cat.albumCover': '앨범커버',
    'works.more': '더보기',
    'nav.projects': 'Projects',
    'projects.tagline': '춤추는 독백의 세계 — 책, 사진전, 유튜브',
    'ptag.book': '독립출판',
    'ptag.exhibition': '사진전',
    'ptag.photobook': '사진집',
    'proj.book.quote': '"진정한 자유는 이방인으로서의 삶이 아닌 내면탐구로부터 온다"',
    'proj.book.title': '춤추는 독백',
    'proj.book.editions': '검정 — 한국어판 · 흰색 — 영문판',
    'proj.ex1.title': '여름을 준비하는 마음',
    'proj.ex1.meta': '2025.05 – 2025.06 · 원두서점 가산점',
    'proj.ex1.quote': '"떠올리기만 해도 미소가 지어지는 여름의 장면이 있나요?"',
    'proj.ex2.title': '일상의 여름',
    'proj.ex2.meta': '2025.07 – 2025.08 · 원두서점 신풍점',
    'proj.ex2.quote': '"특별한 여름은 멀리 있지 않다."',
    'proj.zine.title': '치기어린마음 #1~#8',
    'proj.zine.meta': '2025 · Childlike Heart Series #1~#8',
    'proj.zine.quote': '"지독한 감정들의 은밀한 전시"',
    'proj.zine.desc': '고통과 흔들림을 숨기지 않고 바라보며 손그림으로 엮은 소책자 시리즈 입니다. 앞면은 한국어, 뒷면은 번체·영어로 시작되는 반반 구성의 수제 중철제본으로, 서로 다른 언어의 감정이 한 권 안에서 마주보듯 이어집니다.',
    'proj.book.desc': '어느 날, 제 삶에 정작 나 자신이 없다는 사실을 깨달았습니다. \'진정한 나는 어떤 사람인가.\' 질문은 총을 든 사격수였고, 나는 그 총구 속 실탄이었죠. 누구에게도 기대지 않고, 어떤 요구에도 얽매이지 않는 곳에서 심연에 숨은 진짜 나를 찾기로 결심했습니다. 대륙을 오가는 기차 안, 런던 게이 클럽, 스위스의 자연, 베를린 퀴어 퍼레이드 속에서…. 100일간 떠오른 독백들을 단상집으로 엮었습니다. 때론 불안했고 때론 공허했지만, 그럼에도 나아갔습니다. 고독했던 독백들이 비로소 춤추기 시작합니다. 당신의 이야기도 그 리듬에 함께하길 바랍니다.',
    'proj.ex1.desc': '한낮의 나른함, 멀리서 불어오는 산들바람, 호수 어디선가 들려오는 웃음소리. 2024년 베를린에서 마주한 여름의 풍경과 마음의 기척을 사진으로 엮었습니다. 바다가 없어도 공원에서 태닝을 하고, 호수에 발을 담그며 여름을 누리는 사람들처럼— 일상 속에서 피서를 즐기는 그 평화로운 장면들이 오래도록 기억에 남았습니다. 무르익는 녹음과 함께 다가오는 여름, 당신에게도 그런 기억이 생기면 좋겠습니다.',
    'proj.ex2.desc': '여름휴가는 언제부터 멀리 떠나는 일과 동의어가 되었을까요. 저는 낯선 풍경 속에 들어서야 비로소 여름이 시작된다고 믿었습니다. 그러던 어느 날, 베를린의 한 동네 공원에서 멈춰 섰죠. 풀밭 위에 머무는 사람들의 평범하고 완전한 여름을 보며, 휴식은 \'어디에 있느냐\'보다 \'어떻게 바라보느냐\'에 달려 있다는 단순한 진실을 깨달았습니다. 우리 동네 공원은 언제부터 스쳐 지나가는 회색 배경이 되었을까요. 한강은 언제부터 관광지의 조연이 되었을까요. 《일상의 여름》은 멀리 떠난 덕분에 오히려 가까운 것들의 가치를 다시 알게 된 담담한 기록입니다. 여름은 거창한 모험이 아니라, 나무 그늘 아래 가만히 머무는 태도에서 피어납니다.',
    'cat.poster': '포스터',
    'works.empty': '업로드 예정입니다.',
    'sb.bio': '그래픽 디자인부터 독립출판, 전시 기획, 영상까지 — 형식에 얽매이지 않고 감각을 작업으로 옮깁니다. 침묵 속에서 건져올린 문장처럼, 오래 남는 것들을 만듭니다.',
    'hist.bf.jeju':    '제주북페어',
    'hist.bf.incheon': '인천아트북페어',
    'hist.bf.jeonju1': '전주책쾌',
    'hist.bf.jeonju2': '전주 서노송예술주간 만인의동네',
    'hist.bf.daegu':   '대구 아마도생산적활동',
    'hist.bf.busan':   '부산 마우스북페어',
    'hist.bf.taipei':  '타이베이 아트북페어',
    'hist.ex1.title':  '《여름을 준비하는 마음》 개인 사진전',
    'hist.ex1.venue':  '원두서점 가산점',
    'hist.ex2.title':  '《일상의 여름》 개인 사진전',
    'hist.ex2.venue':  '원두서점 신풍점',
  },
  en: {
    'nav.works':   'Works',
    'nav.media':   'Media',
    'nav.contact': 'Email',
    'hero.sub':    'Visual Artist · Graphic Designer',
    'hero.cta':    'View Works',
    'cat.graphic': 'Graphic Design',
    'cat.art':     'Visual Art',
    'work.placeholder': 'Title coming soon',
    'cat.albumCover': 'Album Cover',
    'works.more': 'Load More',
    'nav.projects': 'Projects',
    'projects.tagline': 'The Universe of Dancing Soliloquy — Book, Exhibitions, YouTube',
    'ptag.book': 'Self-Published',
    'ptag.exhibition': 'Exhibition',
    'ptag.photobook': 'Photobook',
    'proj.book.quote': '"There are words that can only be written when solitude stops feeling lonely."',
    'proj.book.title': 'Dancing Soliloquy',
    'proj.book.editions': 'Black — Korean edition · White — English edition',
    'proj.ex1.title': 'Fragment of a summer yet to come',
    'proj.ex1.meta': '2025.05 – 2025.06 · Wondu Bookstore, Gasan',
    'proj.ex1.quote': '"Is there a summer scene that makes you smile just thinking about it?"',
    'proj.ex2.title': 'Ordinary summer',
    'proj.ex2.meta': '2025.07 – 2025.08 · Wondu Bookstore, Sinpung',
    'proj.ex2.quote': '"A special summer is not far away."',
    'proj.zine.title': 'Childlike Heart Series #1~#8',
    'proj.zine.meta': '2025 · Childlike Heart Series #1~#8',
    'proj.zine.quote': '"A secret exhibition of relentless emotions"',
    'proj.zine.desc': 'A series of small booklets weaving short sentences and hand-drawn illustrations around the emotions between anxiety and solitude. Each issue is self-saddle-stitched in a half-and-half format — Korean on one side, Traditional Chinese and English on the other — so emotions in different languages face each other within a single volume.',
    'proj.book.desc': 'One day, I realised I had somehow disappeared from my own life. "Who am I, truly?" The question was a marksman with a gun; I was the bullet in its barrel. I decided to seek the self hidden in the depths — somewhere I leaned on no one, bound by no one\'s expectations. On trains crossing continents, in a London gay club, amid the nature of Switzerland, inside a Berlin queer parade…. The soliloquies that surfaced over 100 days were gathered into a collection of fragments. There were moments of anxiety, moments of emptiness — yet I kept moving. Those solitary monologues are finally learning to dance. May your story find its rhythm there too.',
    'proj.ex1.desc': 'The afternoon languor, a gentle breeze drifting from far away, the sound of laughter rising from somewhere across the lake. This exhibition weaves together the summer landscapes and quiet stirrings of the heart I encountered in Berlin in 2024. People tanning in the park without a sea in sight, dipping their feet into a lake — the peaceful scenes of those who found their escape right within everyday life stayed with me for a long time. As summer ripens alongside the deepening green, I hope you too find a memory like that.',
    'proj.ex2.desc': 'When did summer holidays become synonymous with going far away? I too believed summer only truly began when I stepped into an unfamiliar landscape. Then I stopped at a neighbourhood park in Berlin. Watching people rest on the grass — living a perfectly ordinary, complete summer — I came to understand a simple truth: rest depends less on where you are and more on how you choose to see. When did our neighbourhood parks become grey backdrops we pass through without noticing? When did the Han River become a side character in someone else\'s travel story? Ordinary Summer is a quiet record of rediscovering the value of what is close, made possible only by going far away. Summer does not bloom from grand adventures. It rises from the quiet act of staying still beneath the shade of a tree.',
    'cat.poster': 'Poster',
    'works.empty': 'Coming soon.',
    'sb.bio': 'From graphic design to independent publishing, exhibition curation, and film — translating sensibility into work, unbound by form. Like sentences drawn from silence, making things that linger.',
    'hist.bf.jeju':    'Jeju Book Fair',
    'hist.bf.incheon': 'Incheon Art Book Fair',
    'hist.bf.jeonju1': 'Jeonju Chaekoe',
    'hist.bf.jeonju2': "Jeonju Seonossong Art Week — Everyone's Neighborhood",
    'hist.bf.daegu':   'Daegu Amado Productive Activities',
    'hist.bf.busan':   'Busan Mouse Book Fair',
    'hist.bf.taipei':  'Taipei Art Book Fair',
    'hist.ex1.title':  '"Fragment of a Summer Yet to Come" Solo Exhibition',
    'hist.ex1.venue':  'Wondu Bookstore, Gasan',
    'hist.ex2.title':  '"Ordinary Summer" Solo Exhibition',
    'hist.ex2.venue':  'Wondu Bookstore, Sinpung',
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
  const label = lang === 'ko' ? 'EN' : 'KO';
  document.querySelectorAll('.lang-btn').forEach(btn => btn.textContent = label);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    lang = lang === 'ko' ? 'en' : 'ko';
    applyLang();
  });
});

applyLang();

/* ─── 내비게이션 스크롤 효과 ─────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ─── 모바일 햄버거 메뉴 ─────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

hamburger?.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  document.body.style.overflow = open ? 'hidden' : '';
});

navMenu?.querySelectorAll('.nav-link').forEach(link => {
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

document.querySelectorAll('.section-title, .work-card, .about-text, .about-img-wrap, .proj-item, .proj-hero, .media-block, .contact-body')
  .forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });

/* fade-up 스타일 (JS로 동적 삽입 — CSS 파일 불필요) */
const style = document.createElement('style');
style.textContent = `
  .fade-up {
    opacity: 0;
    transform: translateY(14px);
    transition: opacity .35s ease, transform .35s ease;
  }
  .fade-up.visible {
    opacity: 1;
    transform: none;
  }
  .work-card.fade-up { transition-delay: calc(var(--i, 0) * 50ms); }
`;
document.head.appendChild(style);

document.querySelectorAll('.work-card').forEach((el, i) => {
  el.style.setProperty('--i', i);
});

/* ─── Works 모달 데이터 ─────────────────────────────────────── */
/* 나중에 desc(설명)와 link(음악 링크)를 여기서 채워넣으세요 */
const worksData = [
  { title: '낮잠',                     artist: '이미블루',        year: '2024', desc: '', link: '' },
  { title: '그 여름',                  artist: '이미블루',        year: '2024', desc: '', link: '' },
  { title: '못났어',                   artist: '이미블루',        year: '2024', desc: '', link: '' },
  { title: 'Cinema',                  artist: '조주현',          year: '2023', desc: '', link: '' },
  { title: 'Hidden Things',           artist: '김소연',          year: '2025', desc: '', link: '' },
  { title: 'Dark of Fantasy',         artist: '윤혜문',          year: '2024', desc: '', link: '' },
  { title: 'JUMP',                    artist: '밴드기린',         year: '2023', desc: '', link: '' },
  { title: 'Wave',                    artist: 'Sayma',           year: '2022', desc: '', link: '' },
  { title: 'SICK',                    artist: '정재승',          year: '2023', desc: '', link: '' },
  { title: 'hikari.',                 artist: 'Gonhee',          year: '2025', desc: '', link: '' },
  { title: 'Joy of the Moment ver.1', artist: '한바탕 & KIMTAE', year: '2025', desc: '', link: '' },
  { title: 'Joy of the Moment ver.2', artist: '한바탕 & KIMTAE', year: '2025', desc: '', link: '' },
  { title: '말해줘',                   artist: '이미블루',        year: '2024', desc: '', link: '' },
  { title: '애국가',                   artist: '박미자, 정경',     year: '2024', desc: '', link: '' },
  { title: '야호',                     artist: '아루단테',         year: '2025', desc: '', link: '' },
  { title: '너를 기다리고 있어',        artist: '예례밴드',         year: '2026', desc: '', link: '' },
  { title: '시큰',                     artist: '조에',            year: '2025', desc: '', link: '' },
  { title: 'End(And)',                 artist: 'Grace',           year: '2025', desc: '', link: '' },
];

/* 스크롤 차단 — 터치기기(iOS): position:fixed, 데스크탑: overflow:hidden */
const _isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
let _scrollLocked = false;
let _savedScrollY = 0;
function lockScroll() {
  if (_scrollLocked) return;
  _scrollLocked = true;
  _savedScrollY = window.scrollY;
  if (_isTouchDevice) {
    document.body.style.position = 'fixed';
    document.body.style.top = `-${_savedScrollY}px`;
    document.body.style.width = '100%';
  } else {
    document.body.style.overflow = 'hidden';
  }
}
function unlockScroll() {
  if (!_scrollLocked) return;
  _scrollLocked = false;
  if (_isTouchDevice) {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo({ top: _savedScrollY, behavior: 'instant' });
  } else {
    document.body.style.overflow = '';
  }
}

const modal       = document.getElementById('workModal');
const modalImg    = document.getElementById('modalImg');
const modalTitle  = document.getElementById('modalTitle');
const modalArtist = document.getElementById('modalArtist');
const modalYear   = document.getElementById('modalYear');
const modalDesc   = document.getElementById('modalDesc');
const modalLink   = document.getElementById('modalLink');

let currentYtId = '';
let currentModalIndex = -1;
let modalAnimTimer = null;

const modalPlayBtn = document.getElementById('modalPlayBtn');
const modalPlayer  = document.getElementById('modalPlayer');

function openModal(card, dir = 0) {
  const index = [...document.querySelectorAll('.work-card')].indexOf(card);
  const data = worksData[index];
  if (!data) return;
  const alreadyOpen = modal.classList.contains('open');
  currentModalIndex = [...document.querySelectorAll('.work-card:not(.hidden)')].indexOf(card);

  const panel = document.querySelector('#workModal .modal-panel');

  const applyContent = () => {
    modalImg.src = card.querySelector('img').src;
    modalImg.alt = data.title;
    modalTitle.textContent  = data.title;
    modalArtist.textContent = data.artist;
    modalYear.textContent   = data.year;
    modalDesc.textContent   = data.desc;
    modalDesc.style.display = data.desc ? '' : 'none';
    currentYtId = card.dataset.yt || '';
    modalPlayer.classList.remove('active');
    modalPlayer.innerHTML = '';
    if (modalPlayBtn) modalPlayBtn.style.display = currentYtId ? 'flex' : 'none';
    modal.classList.add('open');
    lockScroll();
  };

  const preloadAdjacent = () => {
    const vis = [...document.querySelectorAll('.work-card:not(.hidden)')];
    [vis[(currentModalIndex - 1 + vis.length) % vis.length], vis[(currentModalIndex + 1) % vis.length]]
      .forEach(c => { if (c) { const i = new Image(); i.src = c.querySelector('img')?.src; } });
  };

  if (alreadyOpen) {
    if (window.innerWidth <= 860) {
      if (modalAnimTimer) clearTimeout(modalAnimTimer);
      const nextSrc = card.querySelector('img').src;
      const tmp = new Image();
      tmp.src = nextSrc;
      tmp.decode().then(() => { applyContent(); preloadAdjacent(); }).catch(() => { applyContent(); preloadAdjacent(); });
    } else {
      const FADE = 220;
      modalImg.style.transition = `opacity ${FADE}ms ease, transform ${FADE}ms ease`;
      modalImg.style.opacity = '0';
      modalImg.style.transform = 'scale(1.04)';
      setTimeout(() => {
        applyContent();
        modalImg.style.transition = 'none';
        modalImg.style.transform = 'scale(0.97)';
        void modalImg.offsetWidth;
        requestAnimationFrame(() => requestAnimationFrame(() => {
          modalImg.style.transition = `opacity ${FADE}ms ease, transform ${FADE}ms ease`;
          modalImg.style.opacity = '';
          modalImg.style.transform = '';
          setTimeout(() => { modalImg.style.transition = ''; }, FADE + 20);
        }));
      }, FADE + 10);
    }
  } else {
    applyContent();
    preloadAdjacent();
  }
}

function closeModal() {
  modal.classList.remove('open');
  unlockScroll();
  modalPlayer.classList.remove('active');
  modalPlayer.innerHTML = '';
}

if (modalPlayBtn) {
  modalPlayBtn.addEventListener('click', () => {
    if (!currentYtId) return;
    modalPlayer.innerHTML = `<iframe src="https://www.youtube.com/embed/${currentYtId}?autoplay=1&rel=0&playsinline=1&modestbranding=1" frameborder="0" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    modalPlayer.classList.add('active');
    modalPlayBtn.style.display = 'none';
  });
}

document.querySelectorAll('.work-card').forEach(card => {
  let touchStartY = 0;
  card.addEventListener('touchstart', e => { touchStartY = e.touches[0].clientY; }, { passive: true });
  card.addEventListener('touchend', e => {
    if (Math.abs(e.changedTouches[0].clientY - touchStartY) < 10) {
      e.preventDefault();
      if (card.dataset.category === 'poster') {
        const pgIdx = [...document.querySelectorAll('.work-card[data-category="poster"]')].indexOf(card);
        openPg(pgIdx);
      } else {
        openModal(card);
      }
    }
  });
  card.addEventListener('click', () => {
    if (card.dataset.category === 'poster') return;
    openModal(card);
  });
});

document.getElementById('modalClose')?.addEventListener('click', closeModal);
document.getElementById('modalBackdrop')?.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    closeEmailPanel();
    if (zoomOverlay) { zoomOverlay.classList.remove('open'); unlockScroll(); }
    if (typeof closeYtModal === 'function') closeYtModal();
    if (typeof closePg === 'function') closePg();
  }
  if (pgOverlay?.classList.contains('open')) {
    if (e.key === 'ArrowRight') pgGo(pgCur + 1);
    if (e.key === 'ArrowLeft')  pgGo(pgCur - 1);
  }
  if (modal?.classList.contains('open')) {
    const visibles = [...document.querySelectorAll('.work-card:not(.hidden)')];
    if (e.key === 'ArrowRight') openModal(visibles[(currentModalIndex + 1) % visibles.length], 1);
    if (e.key === 'ArrowLeft')  openModal(visibles[(currentModalIndex - 1 + visibles.length) % visibles.length], -1);
  }
});

/* ─── Works 모달 화살표 위치 (이미지 세로 중심 기준) ─────────── */
function positionModalNav() {
  const imgWrap = document.querySelector('#workModal .modal-img-wrap');
  const prev = document.getElementById('modalPrev');
  const next = document.getElementById('modalNext');
  if (!imgWrap || !prev || !next) return;
  const r = imgWrap.getBoundingClientRect();
  const cy = r.top + r.height / 2;
  prev.style.top = next.style.top = cy + 'px';
}

/* ─── Works 모달 화살표 + 모바일 스와이프 ──────────────────── */
document.getElementById('modalPrev')?.addEventListener('click', e => {
  e.stopPropagation();
  const visibles = [...document.querySelectorAll('.work-card:not(.hidden)')];
  openModal(visibles[(currentModalIndex - 1 + visibles.length) % visibles.length], -1);
});
document.getElementById('modalNext')?.addEventListener('click', e => {
  e.stopPropagation();
  const visibles = [...document.querySelectorAll('.work-card:not(.hidden)')];
  openModal(visibles[(currentModalIndex + 1) % visibles.length], 1);
});
let modalTx = 0, modalPreloaded = false;
const workModal = document.getElementById('workModal');
workModal?.addEventListener('touchstart', e => { modalTx = e.touches[0].clientX; modalPreloaded = false; }, { passive: true });
workModal?.addEventListener('touchmove', e => {
  if (modalPreloaded) return;
  const dx = e.touches[0].clientX - modalTx;
  if (Math.abs(dx) < 20) return;
  modalPreloaded = true;
  const vis = [...document.querySelectorAll('.work-card:not(.hidden)')];
  const target = dx < 0
    ? vis[(currentModalIndex + 1) % vis.length]
    : vis[(currentModalIndex - 1 + vis.length) % vis.length];
  if (target) { const img = new Image(); img.src = target.querySelector('img')?.src; }
}, { passive: true });
workModal?.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - modalTx;
  if (Math.abs(dx) < 50) return;
  const visibles = [...document.querySelectorAll('.work-card:not(.hidden)')];
  if (dx < 0) openModal(visibles[(currentModalIndex + 1) % visibles.length], 1);
  if (dx > 0) openModal(visibles[(currentModalIndex - 1 + visibles.length) % visibles.length], -1);
});

/* ─── Email Panel ───────────────────────────────────────── */
const emailPanel = document.getElementById('emailPanel');
const epFrom     = document.getElementById('epFrom');
const epMessage  = document.getElementById('epMessage');
const epStatus   = document.getElementById('epStatus');

function openEmailPanel() {
  emailPanel.classList.add('open');
  emailPanel.setAttribute('aria-hidden', 'false');
  lockScroll();
  setTimeout(() => epFrom.focus(), 420);
}

const epActions = document.getElementById('epSend').parentElement;
const epConfirm = document.getElementById('epConfirm');

function resetConfirm() {
  epConfirm.classList.remove('show');
  epActions.style.display = '';
  epStatus.textContent = '';
}

function closeEmailPanel() {
  emailPanel.classList.remove('open');
  emailPanel.setAttribute('aria-hidden', 'true');
  unlockScroll();
  resetConfirm();
}

document.querySelectorAll('#emailTrigger, #emailTriggerNav').forEach(btn =>
  btn?.addEventListener('click', openEmailPanel)
);
document.getElementById('navContact')?.addEventListener('click', () => {
  navMenu?.classList.remove('open');
  hamburger?.classList.remove('open');
  document.body.style.overflow = '';
  openEmailPanel();
});
document.getElementById('epCancel').addEventListener('click', closeEmailPanel);
document.getElementById('epBackdrop').addEventListener('click', closeEmailPanel);
document.getElementById('epConfirmBack').addEventListener('click', resetConfirm);

document.getElementById('epSend').addEventListener('click', () => {
  const from = epFrom.value.trim();
  const msg  = epMessage.value.trim();
  if (!from || !msg) {
    epStatus.classList.add('error');
    epStatus.textContent = lang === 'ko' ? '이메일과 메시지를 입력해주세요.' : 'Please fill in all fields.';
    return;
  }
  epActions.style.display = 'none';
  epConfirm.classList.add('show');
  epStatus.textContent = '';
  epStatus.classList.remove('error');
});

document.getElementById('epConfirmSend').addEventListener('click', async () => {
  const from = epFrom.value.trim();
  const msg  = epMessage.value.trim();
  epConfirm.classList.remove('show');
  epActions.style.display = '';
  epStatus.classList.remove('error');
  epStatus.textContent = lang === 'ko' ? '보내는 중...' : 'Sending...';
  try {
    const res = await fetch('https://formspree.io/f/xgodzyjr', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ _replyto: from, message: msg }),
    });
    if (res.ok) {
      epStatus.textContent = lang === 'ko' ? '보내졌어요! 감사합니다 :)' : 'Sent! Thank you :)';
      epFrom.value = '';
      epMessage.value = '';
    } else { throw new Error(); }
  } catch {
    epStatus.classList.add('error');
    epStatus.textContent = lang === 'ko'
      ? '오류가 발생했어요. chigi225@gmail.com으로 직접 보내주세요.'
      : 'Something went wrong. Please email chigi225@gmail.com directly.';
  }
});


/* ─── Works 카테고리 필터 ─────────────────────────────────── */
const worksGrid = document.querySelector('.works-grid');
let filterTimer = null;
let staggerTimers = [];

function staggerWorkCards(cards) {
  staggerTimers.forEach(t => clearTimeout(t));
  staggerTimers = [];
  cards.forEach((card, i) => {
    card.classList.add('w-anim');
    staggerTimers.push(setTimeout(() => card.classList.add('w-visible'), i * 35 + 10));
  });
}

function applyWorksFilter(filter, animate = true) {
  if (filterTimer) clearTimeout(filterTimer);
  staggerTimers.forEach(t => clearTimeout(t));
  staggerTimers = [];
  const allCards = [...document.querySelectorAll('.work-card')];

  document.getElementById('works').classList.toggle('poster-active', filter === 'poster');

  if (animate) {
    // 현재 보이는 카드를 즉시 opacity:0으로 (그리드 레벨 조작 없이 깜빡임 방지)
    allCards.forEach(c => {
      if (!c.classList.contains('hidden')) {
        c.classList.add('w-anim');
        c.classList.remove('w-visible');
      }
    });
  }

  filterTimer = setTimeout(() => {
    const visibleCards = [];
    allCards.forEach(card => {
      const hide = card.dataset.category !== filter;
      card.classList.toggle('hidden', hide);
      card.classList.remove('w-anim', 'w-visible');
      if (!hide) visibleCards.push(card);
    });
    worksGrid.classList.toggle('poster-view', filter === 'poster');
    const emptyEl = document.getElementById('worksEmpty');
    if (emptyEl) emptyEl.style.display = visibleCards.length === 0 ? 'block' : 'none';
    if (animate) {
      staggerWorkCards(visibleCards);
    }
  }, animate ? 150 : 0);
}

const worksTabEls = [...document.querySelectorAll('.works-tab')];
worksTabEls.forEach((tab, i) => {
  const activateTab = () => {
    worksTabEls.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    applyWorksFilter(tab.dataset.filter);
  };
  let tabTouchY = 0;
  tab.addEventListener('touchstart', e => { tabTouchY = e.touches[0].clientY; }, { passive: true });
  tab.addEventListener('touchend', e => {
    if (Math.abs(e.changedTouches[0].clientY - tabTouchY) < 10) {
      e.preventDefault();
      activateTab();
    }
  });
  tab.addEventListener('click', activateTab);
  tab.addEventListener('keydown', e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = e.key === 'ArrowRight'
      ? (i + 1) % worksTabEls.length
      : (i - 1 + worksTabEls.length) % worksTabEls.length;
    worksTabEls[next].focus();
    worksTabEls[next].click();
  });
});

const activeTab = document.querySelector('.works-tab.active');
if (activeTab) applyWorksFilter(activeTab.dataset.filter, false);

/* ─── Carousel ──────────────────────────────────────────────── */
document.querySelectorAll('.proj-carousel').forEach(carousel => {
  const track   = carousel.querySelector('.proj-carousel-track');
  const originals = [...track.querySelectorAll('img:not(.vimeo-thumb), video, .proj-carousel-vimeo')];
  const dotsEl  = carousel.querySelector('.proj-carousel-dots');
  const total   = originals.length;
  let cur = 1;
  let locked = false;
  let lockTimer = null;

  /* 첫/마지막 슬라이드 복제해서 양 끝에 붙임 */
  const firstClone = originals[0].cloneNode(true);
  const lastClone  = originals[total - 1].cloneNode(true);
  firstClone.dataset.clone = 'true';
  lastClone.dataset.clone  = 'true';
  /* 클론 안의 iframe은 src 제거 (Vimeo 중복 로드 방지) */
  [firstClone, lastClone].forEach(cl =>
    cl.querySelectorAll('iframe').forEach(f => f.removeAttribute('src'))
  );
  track.appendChild(firstClone);
  track.insertBefore(lastClone, originals[0]);

  function setPos(n, animate) {
    const w = carousel.offsetWidth;
    if (w === 0) return;
    [...track.children].forEach(c => { c.style.flex = `0 0 ${w}px`; c.style.width = w + 'px'; });
    if (!animate) track.style.transition = 'none';
    track.style.transform = `translate3d(-${n * w}px, 0, 0)`;
    if (!animate) setTimeout(() => { track.style.transition = ''; }, 20);
  }

  /* 초기 위치 — 폭이 확정된 뒤 한 번만 설정 */
  setPos(1, false);
  if (carousel.offsetWidth === 0) {
    const ro = new ResizeObserver(() => {
      if (carousel.offsetWidth > 0) { setPos(cur, false); ro.disconnect(); }
    });
    ro.observe(carousel);
  }

  /* dots */
  originals.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'proj-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', `${i + 1}번 슬라이드`);
    d.addEventListener('click', () => goTo(i + 1));
    dotsEl.appendChild(d);
  });

  function updateDots() {
    let real = cur === 0 ? total - 1 : cur === total + 1 ? 0 : cur - 1;
    carousel.querySelectorAll('.proj-dot').forEach((d, i) => d.classList.toggle('active', i === real));
  }

  function unlock() {
    locked = false;
    clearTimeout(lockTimer);
    lockTimer = null;
  }

  function goTo(pos) {
    if (locked) return;
    locked = true;
    cur = pos;
    setPos(cur, true);
    updateDots();
    /* transitionend가 발화 안 될 때를 대비한 안전 해제 (600ms) */
    clearTimeout(lockTimer);
    lockTimer = setTimeout(unlock, 600);
  }

  /* 클론에 도달하면 실제 슬라이드로 순간이동 */
  track.addEventListener('transitionend', () => {
    clearTimeout(lockTimer);
    lockTimer = null;
    if (cur === total + 1) {
      cur = 1;
      setPos(cur, false);
      setTimeout(unlock, 20);
      return;
    }
    if (cur === 0) {
      cur = total;
      setPos(cur, false);
      setTimeout(unlock, 20);
      return;
    }
    unlock();
  });

  window.addEventListener('resize', () => setPos(cur, false));

  carousel.querySelector('.proj-carousel-prev').addEventListener('click', () => goTo(cur - 1));
  carousel.querySelector('.proj-carousel-next').addEventListener('click', () => goTo(cur + 1));

  carousel.addEventListener('mouseenter', () => carousel.classList.add('is-hovered'));
  carousel.addEventListener('mouseleave', () => carousel.classList.remove('is-hovered'));

  let touchTimer;
  carousel.addEventListener('touchstart', () => {
    carousel.classList.add('touched');
    clearTimeout(touchTimer);
    touchTimer = setTimeout(() => carousel.classList.remove('touched'), 2000);
  }, { passive: true });

  let sx = 0, sy = 0, swipeDir = null;
  track.addEventListener('touchstart', e => {
    sx = e.touches[0].clientX; sy = e.touches[0].clientY; swipeDir = null;
  }, { passive: false });
  track.addEventListener('touchmove', e => {
    if (!swipeDir) {
      const dx = Math.abs(e.touches[0].clientX - sx);
      const dy = Math.abs(e.touches[0].clientY - sy);
      if (dx > 10 || dy > 10) {
        swipeDir = dx >= dy ? 'h' : 'v';
      } else {
        e.preventDefault(); // 방향 결정 전까지 화면 고정
      }
    }
    if (swipeDir === 'h') e.preventDefault();
  }, { passive: false });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - sx;
    if (swipeDir === 'h' && Math.abs(dx) > 48) goTo(dx < 0 ? cur + 1 : cur - 1);
  });

  track.querySelectorAll('.proj-carousel-vimeo').forEach(vimeoEl => {
    const guard = document.createElement('div');
    guard.style.cssText = 'position:absolute;inset:0;z-index:2;';
    vimeoEl.appendChild(guard);
    guard.addEventListener('touchstart', e => {
      sx = e.touches[0].clientX; sy = e.touches[0].clientY; swipeDir = null;
    }, { passive: false });
    guard.addEventListener('touchmove', e => {
      if (!swipeDir) {
        const dx = Math.abs(e.touches[0].clientX - sx);
        const dy = Math.abs(e.touches[0].clientY - sy);
        if (dx > 10 || dy > 10) {
          swipeDir = dx >= dy ? 'h' : 'v';
        } else {
          e.preventDefault();
        }
      }
      if (swipeDir === 'h') e.preventDefault();
    }, { passive: false });
    guard.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - sx;
      if (swipeDir === 'h' && Math.abs(dx) > 48) goTo(dx < 0 ? cur + 1 : cur - 1);
    });
  });
});

/* ─── Image Zoom ────────────────────────────────────────────── */
const zoomOverlay = document.getElementById('zoomOverlay');
const zoomImg     = document.getElementById('zoomImg');

if (zoomOverlay) {
  document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', e => {
      e.stopPropagation();
      zoomImg.src = img.src;
      zoomImg.alt = img.alt;
      zoomOverlay.classList.add('open');
      lockScroll();
    });
  });

  zoomOverlay.addEventListener('click', () => {
    zoomOverlay.classList.remove('open');
    unlockScroll();
  });
}

/* ─── Project Lightbox ──────────────────────────────────── */
const projLightbox = document.getElementById('projLightbox');
const plImg        = document.getElementById('plImg');
const plCloseBtn   = document.getElementById('plClose');
const plPrevBtn    = document.getElementById('plPrev');
const plNextBtn    = document.getElementById('plNext');
const plCounter    = document.getElementById('plCounter');

if (projLightbox) {
  let plImages = [];
  let plCur = 0;
  let plBusy = false;

  function plUpdateCounter() {
    if (plCounter) plCounter.textContent = plImages.length > 1 ? `${plCur + 1} / ${plImages.length}` : '';
  }

  function plShow(idx) {
    if (plBusy) return;
    const next = (idx + plImages.length) % plImages.length;
    if (next === plCur && plImages.length > 1) return;
    const dir = idx >= plCur ? 1 : -1;
    plBusy = true;
    plCur = next;
    plUpdateCounter();

    // 모바일: 페이드 없이 즉시 교체 (깜빡임 방지)
    if (window.innerWidth <= 860) {
      plImg.src = plImages[next];
      plBusy = false;
      return;
    }

    const FADE = 260;
    const EASE = 'cubic-bezier(0.25,0.46,0.45,0.94)';

    let done = false;
    const doTransition = () => {
      if (done) return;
      done = true;

      // 순차 페이드: 구 이미지 완전 소멸 후 신 이미지 등장 → 겹침 없어 흰선 완전 제거
      plImg.style.transition = `opacity ${FADE}ms ${EASE}`;
      plImg.style.opacity = '0';

      setTimeout(() => {
        plImg.style.transition = 'none';
        plImg.src = plImages[next];
        void plImg.offsetWidth;
        requestAnimationFrame(() => requestAnimationFrame(() => {
          plImg.style.transition = `opacity ${FADE}ms ${EASE}`;
          plImg.style.opacity = '1';
          setTimeout(() => {
            plImg.style.transition = '';
            plImg.style.opacity = '';
            plBusy = false;
          }, FADE + 30);
        }));
      }, FADE + 10);
    };

    const probe = new Image();
    probe.src = plImages[next];
    if (probe.complete) {
      doTransition();
    } else {
      probe.onload  = doTransition;
      probe.onerror = doTransition;
      setTimeout(doTransition, 2000);
    }
  }

  function plOpen(imgs, idx) {
    plImages = imgs;
    plCur = idx;
    plImg.src = plImages[idx];
    plUpdateCounter();
    projLightbox.classList.add('open');
    document.body.classList.add('pl-open');
  }

  function plClose() {
    projLightbox.classList.remove('open');
    document.body.classList.remove('pl-open');
    document.querySelectorAll('.proj-carousel.touched').forEach(c => c.classList.remove('touched'));
    setTimeout(() => { plImg.src = ''; }, 300);
  }

  document.querySelectorAll('.proj-carousel').forEach(carousel => {
    const imgs = [...carousel.querySelectorAll('.proj-carousel-track img:not([data-clone])')].filter(img => !img.closest('.proj-carousel-vimeo'));
    const track = carousel.querySelector('.proj-carousel-track');
    let tapX = 0, tapY = 0;
    track.addEventListener('touchstart', e => {
      tapX = e.touches[0].clientX; tapY = e.touches[0].clientY;
    }, { passive: true });
    imgs.forEach((img, i) => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', e => {
        e.stopPropagation();
        plOpen(imgs.map(im => im.src), i);
      });
      img.addEventListener('touchend', e => {
        const dx = Math.abs(e.changedTouches[0].clientX - tapX);
        const dy = Math.abs(e.changedTouches[0].clientY - tapY);
        if (dx < 8 && dy < 8) { e.preventDefault(); plOpen(imgs.map(im => im.src), i); }
      });
    });
  });

  plCloseBtn.addEventListener('click', plClose);
  plPrevBtn.addEventListener('click', e => { e.stopPropagation(); plShow(plCur - 1); });
  plNextBtn.addEventListener('click', e => { e.stopPropagation(); plShow(plCur + 1); });

  // 모바일 탭존 (좌/우 32% 영역 터치로 이동)
  document.getElementById('plTapPrev')?.addEventListener('click', e => { e.stopPropagation(); plShow(plCur - 1); });
  document.getElementById('plTapNext')?.addEventListener('click', e => { e.stopPropagation(); plShow(plCur + 1); });
  projLightbox.addEventListener('click', e => { if (e.target === projLightbox) plClose(); });

  document.addEventListener('keydown', e => {
    if (!projLightbox.classList.contains('open')) return;
    if (e.key === 'Escape')      plClose();
    if (e.key === 'ArrowLeft')   plShow(plCur - 1);
    if (e.key === 'ArrowRight')  plShow(plCur + 1);
  });

  let plTx = 0;
  projLightbox.addEventListener('touchstart', e => { plTx = e.touches[0].clientX; }, { passive: true });
  projLightbox.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - plTx;
    if (Math.abs(dx) > 48) plShow(dx < 0 ? plCur + 1 : plCur - 1);
  });

  const journalAllImgs = [...document.querySelectorAll('.journal-img, .relay-strip img')];
  if (journalAllImgs.length) {
    journalAllImgs.forEach((img, i) => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', e => {
        e.stopPropagation();
        plOpen(journalAllImgs.map(im => im.src), i);
      });
    });
  }
}

/* ─── Poster data-pg-idx 할당 ───────────────────────────── */
document.querySelectorAll('.work-card[data-category="poster"]').forEach((card, i) => {
  card.setAttribute('data-pg-idx', i + 1);
});

/* ─── Poster Gallery ─────────────────────────────────────── */
const pgOverlay = document.getElementById('pgOverlay');
const pgImg     = document.getElementById('pgImg');
const pgLabel   = document.getElementById('pgLabel');
const pgCount   = document.getElementById('pgCount');
const pgStrip   = document.getElementById('pgStrip');
const pgClosBtn = document.getElementById('pgClose');
const pgBg      = document.getElementById('pgBg');

let pgItems = [];
let pgCur   = 0;
let pgBusy  = false;

function pgBuild() {
  pgItems = [];
  document.querySelectorAll('.work-card[data-category="poster"]').forEach(card => {
    const img = card.querySelector('.work-thumb img');
    if (img) pgItems.push({ src: img.src, alt: img.alt, name: card.querySelector('.work-name')?.textContent || '' });
  });
}

function pgRenderStrip() {
  pgStrip.innerHTML = '';
  pgItems.forEach((item, i) => {
    const t = document.createElement('img');
    t.src = item.src; t.alt = item.alt;
    t.className = 'pg-thumb' + (i === pgCur ? ' active' : '');
    t.addEventListener('click', () => pgGo(i));
    pgStrip.appendChild(t);
  });
}

function pgSyncStrip() {
  pgStrip.querySelectorAll('.pg-thumb').forEach((t, i) => t.classList.toggle('active', i === pgCur));
  pgStrip.querySelector('.pg-thumb.active')?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
}

function pgSet(index, animate) {
  pgCur = ((index % pgItems.length) + pgItems.length) % pgItems.length;
  pgImg.src = pgItems[pgCur].src;
  pgImg.alt = pgItems[pgCur].alt;
  pgLabel.textContent = pgItems[pgCur].name;
  pgCount.textContent = `${pgCur + 1} / ${pgItems.length}`;
  pgSyncStrip();
}

function pgGo(index) {
  if (pgBusy) return;
  const next = ((index % pgItems.length) + pgItems.length) % pgItems.length;
  if (next === pgCur) return;
  pgBusy = true;
  pgImg.classList.add('out');
  setTimeout(() => {
    pgCur = next;
    pgImg.src  = pgItems[next].src;
    pgImg.alt  = pgItems[next].alt;
    pgLabel.textContent = pgItems[next].name;
    pgCount.textContent = `${next + 1} / ${pgItems.length}`;
    pgImg.classList.remove('out');
    pgImg.classList.add('in');
    requestAnimationFrame(() => requestAnimationFrame(() => {
      pgImg.classList.remove('in');
      pgBusy = false;
    }));
    pgSyncStrip();
  }, 380);
}

function openPg(index) {
  pgBuild();
  pgCur = index;
  pgRenderStrip();
  pgSet(index, false);
  pgOverlay.classList.add('open');
  pgOverlay.setAttribute('aria-hidden', 'false');
  lockScroll();
}

function closePg() {
  if (!pgOverlay?.classList.contains('open')) return;
  pgOverlay.classList.remove('open');
  pgOverlay.setAttribute('aria-hidden', 'true');
  unlockScroll();
  // pgGo 애니메이션 중 닫힐 때 transform 즉시 초기화
  pgImg.style.transition = 'none';
  pgImg.classList.remove('out', 'in');
  void pgImg.offsetWidth;
  pgImg.style.transition = '';
  pgBusy = false;
  const heroIframe = document.getElementById('heroVideoIframe');
  if (heroIframe) setTimeout(() => {
    heroIframe.contentWindow.postMessage('{"method":"play"}', 'https://player.vimeo.com');
  }, 400);
}

document.querySelectorAll('.work-card[data-category="poster"]').forEach((card, i) => {
  card.addEventListener('click', () => openPg(i));
});

if (pgClosBtn) pgClosBtn.addEventListener('click', closePg);
if (pgBg)      pgBg.addEventListener('click', closePg);
pgOverlay?.addEventListener('click', e => {
  if (e.target === pgOverlay || e.target.classList.contains('pg-stage')) closePg();
});

let pgWheelTime = 0;
pgOverlay?.addEventListener('wheel', e => {
  e.preventDefault();
  const now = Date.now();
  if (now - pgWheelTime < 1000) return;
  const delta = Math.abs(e.deltaX) >= Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
  if (Math.abs(delta) < 3) return;
  pgWheelTime = now;
  pgGo(delta > 0 ? pgCur + 1 : pgCur - 1);
}, { passive: false });

let pgTx = 0;
pgOverlay?.addEventListener('touchstart', e => { pgTx = e.touches[0].clientX; }, { passive: true });
pgOverlay?.addEventListener('touchend',   e => {
  const dx = e.changedTouches[0].clientX - pgTx;
  if (Math.abs(dx) > 50) pgGo(dx < 0 ? pgCur + 1 : pgCur - 1);
});

/* ─── YouTube Modal ─────────────────────────────────────── */
const ytModal = document.getElementById('ytModal');
const ytModalPlayer = document.getElementById('ytModalPlayer');
const ytModalTitle = document.getElementById('ytModalTitle');
const ytModalClose = document.getElementById('ytModalClose');
const ytModalBackdrop = document.getElementById('ytModalBackdrop');

function openYtModal(videoId, title) {
  ytModalPlayer.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
  ytModalTitle.textContent = title;
  ytModal.classList.add('open');
  ytModal.setAttribute('aria-hidden', 'false');
  lockScroll();
}

function closeYtModal() {
  if (!ytModal.classList.contains('open')) return;
  ytModal.classList.remove('open');
  ytModal.setAttribute('aria-hidden', 'true');
  ytModalPlayer.innerHTML = '';
  unlockScroll();
}

/* 앨범커버 클릭은 이미지 확대 모달로 처리 (ytModal 직접 실행 제거) */

if (ytModalClose) ytModalClose.addEventListener('click', closeYtModal);
if (ytModalBackdrop) ytModalBackdrop.addEventListener('click', closeYtModal);

/* 캐러셀 Vimeo 썸네일 — iframe 로드 후 1.5초 뒤 페이드아웃, 최대 8초 fallback */
document.querySelectorAll('.proj-carousel-vimeo').forEach(wrap => {
  const thumb = wrap.querySelector('.vimeo-thumb');
  const iframe = wrap.querySelector('iframe');
  if (!thumb || !iframe) return;
  let done = false;
  const fadeThumb = () => {
    if (done) return;
    done = true;
    thumb.style.opacity = '0';
    setTimeout(() => thumb.remove(), 700);
  };
  iframe.addEventListener('load', () => setTimeout(fadeThumb, 1500));
  setTimeout(fadeThumb, 8000);
});

/* hero video cover — iframe 로드 후 1.5초 뒤 페이드아웃 (최대 6초 fallback) */
const heroCover = document.getElementById('heroVideoCover');
if (heroCover) {
  let coverGone = false;
  const fadeHeroCover = () => {
    if (coverGone) return;
    coverGone = true;
    heroCover.style.opacity = '0';
  };
  const _heroIframe = document.getElementById('heroVideoIframe');
  if (_heroIframe) {
    _heroIframe.addEventListener('load', () => setTimeout(fadeHeroCover, 600));
  }
  setTimeout(fadeHeroCover, 6000);
}

/* ─── 페이지 전환 로더 ──────────────────────────────────────── */
document.querySelectorAll('a[href]').forEach(link => {
  const url = link.getAttribute('href');
  if (!url || url.startsWith('#') || url.startsWith('http') || link.target === '_blank') return;
  link.addEventListener('click', e => {
    e.preventDefault();
    const loader = document.getElementById('page-loader');
    if (loader) {
      loader.style.transition = 'none';
      loader.style.opacity = '1';
      loader.style.pointerEvents = 'all';
    }
    setTimeout(() => { window.location.href = url; }, 150);
  });
});

/* ─── Journey 스크롤 등장 ───────────────────────────────────── */
const journalItems = document.querySelectorAll('.journal-item');
if (journalItems.length) {
  journalItems.forEach(el => el.classList.add('j-anim'));
  const jObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('j-visible'); jObs.unobserve(e.target); }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });
  journalItems.forEach(el => jObs.observe(el));
}

/* ─── 이미지 로드 블러 ──────────────────────────────────────── */
document.querySelectorAll('.journal-img, .iv-img').forEach(img => {
  img.classList.add('img-blur');
  if (img.complete && img.naturalWidth) {
    img.classList.remove('img-blur');
  } else {
    img.addEventListener('load', () => img.classList.remove('img-blur'));
  }
});

/* ─── Works 첫 스크롤 스태거 ────────────────────────────────── */
const worksSection = document.getElementById('works');
if (worksSection) {
  const worksObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      staggerWorkCards([...document.querySelectorAll('.work-card:not(.hidden)')]);
      worksObs.disconnect();
    }
  }, { threshold: 0.08 });
  worksObs.observe(worksSection);
}

/* ─── 페이지 로더 ────────────────────────────────────────────── */
(function() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;

  // 인라인 style="opacity:0" 이 class보다 우선하므로 직접 style로 제어
  let loaded = false;
  const showLoader = () => { loader.style.opacity = '1'; loader.style.pointerEvents = 'all'; };
  const hideLoader = () => { loader.style.opacity = '0'; loader.style.pointerEvents = 'none'; loaded = true; };

  // 로더는 항상 opacity:1 시작 → 로드 완료 시 페이드아웃
  if (document.readyState === 'complete') { hideLoader(); }
  else {
    window.addEventListener('load', hideLoader);
    setTimeout(hideLoader, 8000);
  }

})();

/* ─── 위로 가기 버튼 ─────────────────────────────────────────── */
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ─── 이메일 플로팅 버튼 (Journey/Interview) ─────────────────── */
const emailFloatBtn = document.getElementById('emailFloat');
if (emailFloatBtn) {
  emailFloatBtn.classList.add('visible');
  emailFloatBtn.addEventListener('click', openEmailPanel);
}

/* ─── 이메일 패널 포커스 트랩 ────────────────────────────────── */
emailPanel?.addEventListener('keydown', e => {
  if (e.key !== 'Tab') return;
  const confirmVisible = epConfirm.classList.contains('show');
  const focusable = confirmVisible
    ? [document.getElementById('epConfirmSend'), document.getElementById('epConfirmBack')]
    : [epFrom, epMessage, document.getElementById('epSend'), document.getElementById('epCancel')];
  const first = focusable[0];
  const last  = focusable[focusable.length - 1];
  if (e.shiftKey) {
    if (document.activeElement === first) { e.preventDefault(); last.focus(); }
  } else {
    if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
  }
});

/* ─── Projects 스크롤 등장 애니메이션 ───────────────────────── */
const projRows = document.querySelectorAll('.proj-row');
if (projRows.length) {
  projRows.forEach(el => el.classList.add('p-anim'));
  const projObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('p-visible');
        projObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  projRows.forEach(el => projObs.observe(el));
}

/* ─── 이미지 blur-up 로딩 ───────────────────────────────────── */
document.querySelectorAll('img[loading="lazy"]').forEach(img => {
  if (img.complete && img.naturalWidth > 0) return;
  img.classList.add('img-lazy');
  img.addEventListener('load', () => img.classList.add('loaded'));
});

/* ─── 앨범커버 오버레이 아티스트명 주입 ─────────────────────── */
document.querySelectorAll('.work-card[data-category="album-cover"]').forEach((card, i) => {
  const overlay = card.querySelector('.work-overlay');
  if (overlay && worksData[i]?.artist) {
    const el = document.createElement('span');
    el.className = 'work-artist';
    el.textContent = worksData[i].artist;
    overlay.appendChild(el);
  }
});

/* ─── 스크롤 프로그레스 바 ───────────────────────────────────── */
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);
window.addEventListener('scroll', () => {
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.style.width = (window.scrollY / docHeight * 100) + '%';
}, { passive: true });

/* ─── 커스텀 커서 ────────────────────────────────────────────── */
if (window.matchMedia('(hover: hover)').matches) {
  const dot = document.createElement('div');
  dot.className = 'cursor-dot cursor-hidden';
  const ring = document.createElement('div');
  ring.className = 'cursor-ring cursor-hidden';
  document.body.append(dot, ring);

  let mouseX = 0, mouseY = 0, ringX = -100, ringY = -100;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    dot.style.left = mouseX + 'px'; dot.style.top = mouseY + 'px';
    dot.classList.remove('cursor-hidden'); ring.classList.remove('cursor-hidden');
  });
  document.addEventListener('mouseleave', () => {
    dot.classList.add('cursor-hidden'); ring.classList.add('cursor-hidden');
  });

  (function animateRing() {
    ringX += (mouseX - ringX) * 0.1; ringY += (mouseY - ringY) * 0.1;
    ring.style.left = ringX + 'px'; ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  })();

  const hoverTargets = 'a, button, .work-card, .proj-carousel-btn, .modal-close, .pg-close, .pl-close, .scroll-top, .email-float, .sb-link, .nav-link, .nav-link--sub, .lang-btn, .hamburger';
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => { dot.classList.add('cursor-hover'); ring.classList.add('cursor-hover'); });
    el.addEventListener('mouseleave', () => { dot.classList.remove('cursor-hover'); ring.classList.remove('cursor-hover'); });
  });
}
