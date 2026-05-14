/* ─── i18n 사전 ─────────────────────────────────────────── */
const dict = {
  ko: {
    'nav.works':   'Works',
    'nav.media':   'Media',
    'nav.contact': 'Contact',
    'hero.sub':    '시각예술가 · 그래픽 디자이너',
    'hero.cta':    '작업물 보기',
    'cat.graphic': '그래픽 디자인',
    'cat.art':     '시각예술',
    'work.placeholder': '작업명 추가 예정',
    'cat.albumCover': '앨범커버',
    'works.more': '더보기',
    'cat.poster': '포스터',
    'works.empty': '업로드 예정입니다.',
    'sb.bio': '앨범커버·포스터를 만드는 그래픽 디자이너. 일상의 작고 여린 감정들을 이미지와 언어로 담습니다. 독립출판 《춤추는 독백》 저자.',
  },
  en: {
    'nav.works':   'Works',
    'nav.media':   'Media',
    'nav.contact': 'Contact',
    'hero.sub':    'Visual Artist · Graphic Designer',
    'hero.cta':    'View Works',
    'cat.graphic': 'Graphic Design',
    'cat.art':     'Visual Art',
    'work.placeholder': 'Title coming soon',
    'cat.albumCover': 'Album Cover',
    'works.more': 'Load More',
    'ptag.book': 'Self-Published',
    'ptag.exhibition': 'Exhibition',
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

document.querySelectorAll('.section-title, .work-entry, .proj-row, .proj-item, .proj-hero, .media-block, .contact-body')
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
  .work-entry.fade-up { transition-delay: calc(var(--i, 0) * 80ms); }
`;
document.head.appendChild(style);

document.querySelectorAll('.work-entry').forEach((el, i) => {
  el.style.setProperty('--i', i);
});


document.getElementById('modalBackdrop').addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
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
  document.querySelectorAll('.we-poster-item').forEach(item => {
    const img = item.querySelector('img');
    if (img) pgItems.push({ src: img.src, alt: img.alt, name: item.querySelector('.we-poster-label')?.textContent || '' });
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

document.querySelectorAll('.we-poster-item').forEach((item, i) => {
  item.addEventListener('click', () => openPg(i));
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

document.querySelectorAll('.we-grid-item[data-yt]').forEach(item => {
  item.addEventListener('click', () => {
    openYtModal(item.dataset.yt, item.querySelector('.we-grid-label')?.textContent || '');
  });
});

if (ytModalClose) ytModalClose.addEventListener('click', closeYtModal);
if (ytModalBackdrop) ytModalBackdrop.addEventListener('click', closeYtModal);
