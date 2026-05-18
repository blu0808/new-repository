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
    'proj.ex1.quote': '"떠올리기만 해도 미소가 지어지는 여름의 장면이 있나요?"',
    'proj.ex2.title': '일상의 여름',
    'proj.ex2.meta': '2025.07 – 2025.08 · 원두서점 신풍점',
    'proj.ex2.quote': '"특별한 여름은 멀리 있지 않다."',
    'proj.zine.title': '치기어린사유 #1~#8',
    'proj.zine.meta': '2025 · Childlike Heart Series #1~#8',
    'proj.zine.desc': '불안과 고독 사이의 감정들을 짧은 문장과 손그림으로 엮은 소책자 시리즈 입니다. 앞면은 한국어, 뒷면은 번체·영어로 시작되는 반반 구성의 셀프 중철제본으로, 서로 다른 언어의 감정이 한 권 안에서 마주보듯 이어집니다.',
    'proj.book.desc': '어느 날, 내 삶에 정작 나 자신이 없다는 사실을 깨달았다. \'진정한 나는 어떤 사람인가.\' 질문은 총을 든 사격수였고, 나는 그 총구 속 실탄이었다. 누구에게도 기대지 않고, 어떤 요구에도 얽매이지 않는 곳에서 심연에 숨은 진짜 나를 찾기로 했다. 대륙을 오가는 기차 안, 런던 게이 클럽, 스위스의 자연, 베를린 퀴어 퍼레이드 속에서…. 100일간 떠오른 독백들을 단상집으로 엮었다. 때론 불안했고 때론 공허했지만, 그럼에도 나아갔다. 고독했던 독백들이 비로소 춤추기 시작한다. 당신의 이야기도 그 리듬에 함께하길.',
    'proj.ex1.desc': '한낮의 나른함, 멀리서 불어오는 산들바람, 호수 어디선가 들려오는 웃음소리. 2024년 베를린에서 마주한 여름의 풍경과 마음의 기척을 사진으로 엮었습니다. 바다가 없어도 공원에서 태닝을 하고, 호수에 발을 담그며 여름을 누리는 사람들처럼— 일상 속에서 피서를 즐기는 그 평화로운 장면들이 오래도록 기억에 남았습니다. 무르익는 녹음과 함께 다가오는 여름, 당신에게도 그런 기억이 생기면 좋겠습니다.',
    'proj.ex2.desc': '여름휴가는 언제부터 멀리 떠나는 일과 동의어가 되었을까. 나 역시 낯선 풍경 속에 들어서야 비로소 여름이 시작된다고 믿었다. 그러다 베를린의 한 동네 공원에서 멈춰 섰다. 풀밭 위에 머무는 사람들의 평범하고 완전한 여름을 보며, 휴식은 \'어디에 있느냐\'보다 \'어떻게 바라보느냐\'에 달려 있다는 단순한 진실을 깨달았다. 우리 동네 공원은 언제부터 스쳐 지나가는 회색 배경이 되었을까. 한강은 언제부터 관광지의 조연이 되었을까. 《일상의 여름》은 멀리 떠난 덕분에 오히려 가까운 것들의 가치를 다시 알게 된 담담한 기록이다. 여름은 거창한 모험이 아니라, 나무 그늘 아래 가만히 머무는 태도에서 피어난다.',
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
    'proj.ex1.quote': '"Is there a summer scene that makes you smile just thinking about it?"',
    'proj.ex2.title': 'Ordinary summer',
    'proj.ex2.meta': '2025.07 – 2025.08 · Wondu Bookstore, Sinpung',
    'proj.ex2.quote': '"A special summer is not far away."',
    'proj.zine.title': 'Childlike Heart Series #1~#8',
    'proj.zine.meta': '2025 · Childlike Heart Series #1~#8',
    'proj.zine.desc': 'A series of small booklets weaving short sentences and hand-drawn illustrations around the emotions between anxiety and solitude. Each issue is self-saddle-stitched in a half-and-half format — Korean on one side, Traditional Chinese and English on the other — so emotions in different languages face each other within a single volume.',
    'proj.book.desc': 'One day, I realised I had somehow disappeared from my own life. "Who am I, truly?" The question was a marksman with a gun; I was the bullet in its barrel. I decided to seek the self hidden in the depths — somewhere I leaned on no one, bound by no one\'s expectations. On trains crossing continents, in a London gay club, amid the nature of Switzerland, inside a Berlin queer parade…. The soliloquies that surfaced over 100 days were gathered into a collection of fragments. There were moments of anxiety, moments of emptiness — yet I kept moving. Those solitary monologues are finally learning to dance. May your story find its rhythm there too.',
    'proj.ex1.desc': 'The afternoon languor, a gentle breeze drifting from far away, the sound of laughter rising from somewhere across the lake. This exhibition weaves together the summer landscapes and quiet stirrings of the heart I encountered in Berlin in 2024. People tanning in the park without a sea in sight, dipping their feet into a lake — the peaceful scenes of those who found their escape right within everyday life stayed with me for a long time. As summer ripens alongside the deepening green, I hope you too find a memory like that.',
    'proj.ex2.desc': 'When did summer holidays become synonymous with going far away? I too believed summer only truly began when I stepped into an unfamiliar landscape. Then I stopped at a neighbourhood park in Berlin. Watching people rest on the grass — living a perfectly ordinary, complete summer — I came to understand a simple truth: rest depends less on where you are and more on how you choose to see. When did our neighbourhood parks become grey backdrops we pass through without noticing? When did the Han River become a side character in someone else\'s travel story? Ordinary Summer is a quiet record of rediscovering the value of what is close, made possible only by going far away. Summer does not bloom from grand adventures. It rises from the quiet act of staying still beneath the shade of a tree.',
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

applyLang();

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
    modalPlayer.innerHTML = `<iframe src="https://www.youtube.com/embed/${currentYtId}?autoplay=1&rel=0&playsinline=1" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`;
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
  const track   = carousel.querySelector('.proj-carousel-track');
  const originals = [...track.querySelectorAll('img, video, .proj-carousel-vimeo')];
  const dotsEl  = carousel.querySelector('.proj-carousel-dots');
  const total   = originals.length;
  let cur = 1;
  let locked = false;

  /* 첫/마지막 슬라이드 복제해서 양 끝에 붙임 */
  const firstClone = originals[0].cloneNode(true);
  const lastClone  = originals[total - 1].cloneNode(true);
  track.appendChild(firstClone);
  track.insertBefore(lastClone, originals[0]);

  /* 초기 위치 (애니 없이) */
  track.style.transition = 'none';
  track.style.transform  = `translate3d(-100%, 0, 0)`;
  setTimeout(() => { track.style.transition = ''; }, 50);

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

  function goTo(pos) {
    if (locked) return;
    locked = true;
    cur = pos;
    track.style.transform = `translate3d(-${cur * 100}%, 0, 0)`;
    updateDots();
  }

  /* 클론에 도달하면 실제 슬라이드로 순간이동 */
  track.addEventListener('transitionend', () => {
    if (cur === total + 1) {
      track.style.transition = 'none';
      cur = 1;
      track.style.transform = `translate3d(-100%, 0, 0)`;
      setTimeout(() => { track.style.transition = ''; locked = false; }, 20);
      return;
    }
    if (cur === 0) {
      track.style.transition = 'none';
      cur = total;
      track.style.transform = `translate3d(-${total * 100}%, 0, 0)`;
      setTimeout(() => { track.style.transition = ''; locked = false; }, 20);
      return;
    }
    locked = false;
  });

  carousel.querySelector('.proj-carousel-prev').addEventListener('click', () => goTo(cur - 1));
  carousel.querySelector('.proj-carousel-next').addEventListener('click', () => goTo(cur + 1));

  let sx = 0, sy = 0, swipeDir = null;
  track.addEventListener('touchstart', e => {
    sx = e.touches[0].clientX; sy = e.touches[0].clientY; swipeDir = null;
  }, { passive: true });
  track.addEventListener('touchmove', e => {
    if (!swipeDir) {
      const dx = Math.abs(e.touches[0].clientX - sx);
      const dy = Math.abs(e.touches[0].clientY - sy);
      if (dx > 4 || dy > 4) swipeDir = dx >= dy ? 'h' : 'v';
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
    }, { passive: true });
    guard.addEventListener('touchmove', e => {
      if (!swipeDir) {
        const dx = Math.abs(e.touches[0].clientX - sx);
        const dy = Math.abs(e.touches[0].clientY - sy);
        if (dx > 4 || dy > 4) swipeDir = dx >= dy ? 'h' : 'v';
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
      document.body.style.overflow = 'hidden';
    });
  });

  zoomOverlay.addEventListener('click', () => {
    zoomOverlay.classList.remove('open');
    document.body.style.overflow = '';
  });
}

/* ─── Project Lightbox ──────────────────────────────────── */
const projLightbox = document.getElementById('projLightbox');
const plImg        = document.getElementById('plImg');
const plCloseBtn   = document.getElementById('plClose');
const plPrevBtn    = document.getElementById('plPrev');
const plNextBtn    = document.getElementById('plNext');

if (projLightbox) {
  let plImages = [];
  let plCur = 0;

  function plShow(idx) {
    plCur = (idx + plImages.length) % plImages.length;
    plImg.src = plImages[plCur];
  }

  function plOpen(imgs, idx) {
    plImages = imgs;
    plShow(idx);
    projLightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function plClose() {
    projLightbox.classList.remove('open');
    document.body.style.overflow = '';
    plImg.src = '';
  }

  document.querySelectorAll('.proj-carousel').forEach(carousel => {
    const imgs = [...carousel.querySelectorAll('.proj-carousel-track img')];
    imgs.forEach((img, i) => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', e => {
        e.stopPropagation();
        plOpen(imgs.map(im => im.src), i);
      });
    });
  });

  plCloseBtn.addEventListener('click', plClose);
  plPrevBtn.addEventListener('click', e => { e.stopPropagation(); plShow(plCur - 1); });
  plNextBtn.addEventListener('click', e => { e.stopPropagation(); plShow(plCur + 1); });
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
  const heroIframe = document.getElementById('heroVideoIframe');
  if (heroIframe) { const s = heroIframe.src; heroIframe.src = ''; heroIframe.src = s; }
}

document.querySelectorAll('.work-card[data-category="poster"]').forEach((card, i) => {
  card.addEventListener('click', () => openPg(i));
});

if (pgClosBtn) pgClosBtn.addEventListener('click', closePg);
if (pgBg)      pgBg.addEventListener('click', closePg);
pgOverlay?.addEventListener('click', e => {
  if (e.target === pgOverlay || e.target.classList.contains('pg-stage')) closePg();
});

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
