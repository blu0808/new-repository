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
    'proj.book.quote': '"진정한 자유는 이방인으로서의 삶이 아닌 내면탐구로부터 온다"',
    'proj.book.title': '춤추는 독백',
    'proj.book.editions': '검정 — 한국어판 · 흰색 — 영문판',
    'proj.ex1.title': '여름을 준비하는 마음',
    'proj.ex1.meta': '2025.05 – 2025.06 · 원두서점 가산점',
    'proj.ex2.title': '일상의 여름',
    'proj.ex2.meta': '2025.07 – 2025.08 · 원두서점 2호점',
    'proj.book.desc': '홀로서기 위해 100일간 떠난 여행지에서의 고독과 사색을 엮은 단상집입니다.\n\n어느날 문득, 지금 내 삶에는 나 자신이 없다는 사실을 깨달음과 동시에 \'진정한 나는 어떤 사람인가?\'라는 질문이 머릿속을 맴돌았습니다. 질문은 총을 든 사격수였고, 저는 총구 속 실탄이었죠. 사격수는 과녁을 향해 내보냈고, 바람과 무중력 경계에 떠 있던 저는 결심했습니다. 누구에게도 기대지 않고, 어떤 요구에도 얽매이지 않는 곳에서 심연에 숨은 진짜 나를 찾아 나서기로요.\n\n대륙을 오가는 기차 안에서, 런던 게이 클럽에서, 스위스 자연을 보며, 베를린 퀴어 퍼레이드 현장 속에서….\n\n내면을 탐색하는 과정은 시간과 장소에 구애받지 않았고, 독백 속에 떠오르는 문장들을 담기 시작했습니다. 때론 불안했고, 때론 공허했지만, 그럼에도 나아갔습니다.\n\n고독했던 독백들이 춤추기 시작합니다. 당신의 이야기도 함께 춤추는 시간이 되길.',
    'proj.ex1.desc': '여름이 막 시작되려는 계절, 서점 한 켠에 작게 자리를 빌렸습니다. 특별한 이야기를 하려던 것은 아니었습니다. 다만 — 어떤 계절을 제대로 맞이하기 위해서는, 먼저 마음을 준비해두는 시간이 필요하다고 느꼈습니다. 아직 덥지 않지만 이미 여름의 기운이 스며드는 그 사이의 감각을, 여러분과 함께 천천히 느끼고 싶었습니다. 이 전시는 그 \'준비하는 마음\'을 사진으로 담은 것이고, 두 번째 전시 \'일상의 여름\'으로 이어지는 첫 번째 계절 이야기이기도 합니다.',
    'proj.ex2.desc': '\'여름을 준비하는 마음\'에서 계절을 기다렸다면, 이번엔 그 여름 안으로 걸어 들어갔습니다. 2024년, 혼자 유럽을 여행하던 중 베를린의 작은 동네 공원에서 발걸음을 멈췄습니다. 현지 사람들이 특별한 계획도 없이 — 그냥 집 근처 공원에서 나무 그늘 아래 드러누워 완전한 여름을 누리고 있었습니다. 그 장면이 오래 머릿속에 남았습니다. 휴식은 \'어디\'에 있느냐의 문제가 아니었습니다. \'어떻게 바라보느냐\'의 문제였습니다. 멀리 떠나지 않아도, 지금 이 일상 안에 이미 여름이 있습니다. 두 번째 전시는 그 단순한 발견을 여러분과 나누고 싶었습니다.',
    'cat.poster': '포스터',
    'works.empty': '업로드 예정입니다.',
    'sb.bio': '앨범커버·포스터를 만드는 그래픽 디자이너. 일상의 작고 여린 감정들을 이미지와 언어로 담습니다. 독립출판 《춤추는 독백》 저자.',
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
    'proj.book.quote': '"There are words that can only be written when solitude stops feeling lonely."',
    'proj.book.title': 'Dancing Soliloquy',
    'proj.book.editions': 'Black — Korean edition · White — English edition',
    'proj.ex1.title': 'Fragment of a summer yet to come',
    'proj.ex1.meta': '2025.05 – 2025.06 · Wondu Bookstore, Gasan',
    'proj.ex2.title': 'Ordinary summer',
    'proj.ex2.meta': '2025.07 – 2025.08 · Wondu Bookstore, Branch 2',
    'proj.book.desc': 'Written daily like a picture diary — in café corners of unfamiliar cities, on trains, pausing at street corners. A collection of solitary reflections from 100 days traveling Europe alone. True freedom comes not from living as a stranger, but from exploring what lies within.',
    'proj.ex1.desc': 'It was May — just as summer was about to begin — and I borrowed a quiet corner of a bookstore. I wasn\'t trying to say anything grand. I simply felt that to truly welcome a season, you first need time to prepare your heart for it. That in-between feeling — not quite hot yet, but already touched by summer\'s warmth — is what I wanted to sit with, alongside you. This exhibition captures that act of preparing, and is also the first chapter in a two-part series leading into \'Summer in Everyday Life.\'',
    'proj.ex2.desc': 'If the first exhibition was about waiting for summer, this one is about walking into it. In 2024, traveling alone through Europe, I stopped at a small neighbourhood park in Berlin. People there were having a perfectly complete summer — no plans, no grand destinations — just lying under the shade of a tree, right near home. That image stayed with me. Rest isn\'t about where you are. It\'s about how you see. You don\'t have to go far. Summer is already here, inside everyday life. This second exhibition is my way of sharing that simple discovery with you.',
    'cat.poster': 'Poster',
    'works.empty': 'Coming soon.',
    'sb.bio': 'Visual artist capturing small, tender emotions through image and language. Author of self-published 《Dancing Soliloquy》.',
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
  { title: 'hikari.',            artist: 'Gonhee',            year: '2025', desc: '', link: '' },
  { title: 'Joy of the Moment ver.2', artist: '한바탕 & KIMTAE', year: '2025', desc: '', link: '' },
  { title: 'Joy of the Moment ver.1', artist: '한바탕 & KIMTAE', year: '2025', desc: '', link: '' },
  { title: '야호',                artist: '아루단테',           year: '2025', desc: '', link: '' },
  { title: 'Hidden Things',      artist: '김소연',             year: '2025', desc: '', link: '' },
  { title: '말해줘',              artist: '이미블루',           year: '2024', desc: '', link: '' },
  { title: '못났어',              artist: '이미블루',           year: '2024', desc: '', link: '' },
  { title: '그 여름',             artist: '이미블루',           year: '2024', desc: '', link: '' },
  { title: '낮잠',                artist: '이미블루',           year: '2024', desc: '', link: '' },
  { title: 'Dark of Fantasy',    artist: '윤혜문',             year: '2024', desc: '', link: '' },
  { title: '애국가',              artist: '박미자, 정경',        year: '2024', desc: '', link: '' },
  { title: 'Cinema',             artist: '조주현',             year: '2023', desc: '', link: '' },
  { title: 'JUMP',               artist: '밴드기린',           year: '2023', desc: '', link: '' },
  { title: 'SICK',               artist: '정재승',             year: '2023', desc: '', link: '' },
  { title: 'Wave',               artist: 'Sayma',             year: '2022', desc: '', link: '' },
];

const modal       = document.getElementById('workModal');
const modalImg    = document.getElementById('modalImg');
const modalTitle  = document.getElementById('modalTitle');
const modalArtist = document.getElementById('modalArtist');
const modalYear   = document.getElementById('modalYear');
const modalDesc   = document.getElementById('modalDesc');
const modalLink   = document.getElementById('modalLink');

let currentYtId = '';

const modalPlayBtn = document.getElementById('modalPlayBtn');
const modalPlayer  = document.getElementById('modalPlayer');

function openModal(card) {
  const index = [...document.querySelectorAll('.work-card')].indexOf(card);
  const data = worksData[index];
  if (!data) return;

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
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
  modalPlayer.classList.remove('active');
  modalPlayer.innerHTML = '';
}

if (modalPlayBtn) {
  modalPlayBtn.addEventListener('click', () => {
    if (!currentYtId) return;
    modalPlayer.innerHTML = `<iframe src="https://www.youtube.com/embed/${currentYtId}?autoplay=1&rel=0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    modalPlayer.classList.add('active');
    modalPlayBtn.style.display = 'none';
  });
}

document.querySelectorAll('.work-card').forEach(card => {
  card.addEventListener('click', () => openModal(card));
});

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalBackdrop').addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    closeEmailPanel();
    if (zoomOverlay) { zoomOverlay.classList.remove('open'); document.body.style.overflow = ''; }
    if (typeof closeYtModal === 'function') closeYtModal();
    if (typeof closePg === 'function') closePg();
  }
  if (pgOverlay?.classList.contains('open')) {
    if (e.key === 'ArrowRight') pgGo(pgCur + 1);
    if (e.key === 'ArrowLeft')  pgGo(pgCur - 1);
  }
});

/* ─── Email Panel ───────────────────────────────────────── */
const emailPanel = document.getElementById('emailPanel');
const epFrom     = document.getElementById('epFrom');
const epMessage  = document.getElementById('epMessage');
const epStatus   = document.getElementById('epStatus');

function openEmailPanel() {
  emailPanel.classList.add('open');
  emailPanel.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
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
  document.body.style.overflow = '';
  resetConfirm();
}

document.getElementById('emailTrigger').addEventListener('click', openEmailPanel);
document.getElementById('navContact').addEventListener('click', () => {
  navMenu.classList.remove('open');
  hamburger.classList.remove('open');
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

function applyWorksFilter(filter) {
  let visible = 0;
  document.querySelectorAll('.work-card').forEach(card => {
    const hide = card.dataset.category !== filter;
    card.classList.toggle('hidden', hide);
    if (!hide) visible++;
  });
  worksGrid.classList.toggle('poster-view', filter === 'poster');
  document.getElementById('works').classList.toggle('poster-active', filter === 'poster');
  const emptyEl = document.getElementById('worksEmpty');
  if (emptyEl) emptyEl.style.display = visible === 0 ? 'block' : 'none';
}

document.querySelectorAll('.works-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.works-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    applyWorksFilter(tab.dataset.filter);
  });
});

const activeTab = document.querySelector('.works-tab.active');
if (activeTab) applyWorksFilter(activeTab.dataset.filter);

/* ─── Carousel ──────────────────────────────────────────────── */
document.querySelectorAll('.proj-carousel').forEach(carousel => {
  const track  = carousel.querySelector('.proj-carousel-track');
  const imgs   = track.querySelectorAll('img');
  const dotsEl = carousel.querySelector('.proj-carousel-dots');
  let cur = 0;

  imgs.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'proj-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', `${i + 1}번 사진`);
    d.addEventListener('click', () => go(i));
    dotsEl.appendChild(d);
  });

  function go(n) {
    cur = (n + imgs.length) % imgs.length;
    track.style.transform = `translateX(-${cur * 100}%)`;
    carousel.querySelectorAll('.proj-dot').forEach((d, i) => d.classList.toggle('active', i === cur));
  }

  carousel.querySelector('.proj-carousel-prev').addEventListener('click', () => go(cur - 1));
  carousel.querySelector('.proj-carousel-next').addEventListener('click', () => go(cur + 1));

  /* swipe */
  let sx = 0;
  track.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 48) go(dx < 0 ? cur + 1 : cur - 1);
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
      document.body.style.overflow = 'hidden';
    });
  });

  zoomOverlay.addEventListener('click', () => {
    zoomOverlay.classList.remove('open');
    document.body.style.overflow = '';
  });
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
  document.body.style.overflow = 'hidden';
}

function closePg() {
  if (!pgOverlay?.classList.contains('open')) return;
  pgOverlay.classList.remove('open');
  pgOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.work-card[data-category="poster"]').forEach((card, i) => {
  card.addEventListener('click', () => openPg(i));
});

if (pgClosBtn) pgClosBtn.addEventListener('click', closePg);
if (pgBg)      pgBg.addEventListener('click', closePg);

pgOverlay?.addEventListener('wheel', e => {
  e.preventDefault();
  pgGo(e.deltaY > 0 ? pgCur + 1 : pgCur - 1);
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
  document.body.style.overflow = 'hidden';
}

function closeYtModal() {
  if (!ytModal.classList.contains('open')) return;
  ytModal.classList.remove('open');
  ytModal.setAttribute('aria-hidden', 'true');
  ytModalPlayer.innerHTML = '';
  document.body.style.overflow = '';
}

/* 앨범커버 클릭은 이미지 확대 모달로 처리 (ytModal 직접 실행 제거) */

if (ytModalClose) ytModalClose.addEventListener('click', closeYtModal);
if (ytModalBackdrop) ytModalBackdrop.addEventListener('click', closeYtModal);

/* hero video cover — 썸네일로 초기 로딩 숨기고 1.2초 후 페이드아웃, 이후 쉴드로 유지 */
const heroCover = document.getElementById('heroVideoCover');
if (heroCover) {
  setTimeout(() => {
    heroCover.style.opacity = '0';
  }, 1200);
}
