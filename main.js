/* ================================================
   main.js — OMAN Community Website
   SPA Navigation, Rendering, Animations
   ================================================ */

/* =============================================
   NAVIGASI HALAMAN (SPA)
   Klik nav-link → tampilkan halaman yang sesuai
============================================= */
function showPage(pageId) {
  // Sembunyikan semua halaman
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Tampilkan halaman yang diminta
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update nav link aktif
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const activeLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
  if (activeLink) activeLink.classList.add('active');

  // Render konten dinamis jika perlu
  if (pageId === 'class') renderClassPanel('warrior');
  if (pageId === 'race') renderRaceGrid();
  if (pageId === 'leveling') renderLevelTable();
}

/* =============================================
   EVENT LISTENER — NAV LINKS
============================================= */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const page = link.dataset.page;
    if (page) showPage(page);
    // Tutup menu mobile
    document.getElementById('navLinks').classList.remove('open');
  });
});

/* =============================================
   EVENT LISTENER — OVERVIEW CARDS (HOME)
   Klik card → pindah ke halaman terkait
============================================= */
document.querySelectorAll('.overview-card').forEach(card => {
  card.addEventListener('click', () => {
    const page = card.dataset.page;
    if (page) showPage(page);
  });
});

/* =============================================
   EVENT LISTENER — TOMBOL SECONDARY (HERO)
============================================= */
document.querySelectorAll('[data-page]').forEach(el => {
  if (el.tagName === 'A' && el.classList.contains('btn-secondary')) {
    el.addEventListener('click', e => {
      e.preventDefault();
      showPage(el.dataset.page);
    });
  }
});

/* =============================================
   EVENT LISTENER — DROPDOWN ITEMS
   (sub-menu class & ras)
============================================= */
document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const subpage = item.dataset.subpage;
    const parentPage = item.closest('.nav-dropdown')?.querySelector('.nav-link')?.dataset.page;
    if (parentPage) {
      showPage(parentPage);
      // Jika class, langsung tab ke class tersebut
      if (parentPage === 'class' && subpage) {
        setTimeout(() => renderClassPanel(subpage), 100);
      }
      // Jika ras, scroll ke card ras tersebut
      if (parentPage === 'race' && subpage) {
        setTimeout(() => {
          const card = document.querySelector(`[data-race="${subpage}"]`);
          if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150);
      }
    }
    document.getElementById('navLinks').classList.remove('open');
  });
});

/* =============================================
   HAMBURGER MENU (Mobile)
============================================= */
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

/* =============================================
   NAVBAR SCROLL EFFECT
============================================= */
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

/* =============================================
   RENDER — CLASS PANEL
   Menampilkan detail class yang dipilih
============================================= */
function renderClassPanel(classId) {
  const data = CLASS_DATA[classId];
  if (!data) return;

  // Update tab aktif
  document.querySelectorAll('.class-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.class === classId);
  });

  // Buat artwork (gambar atau placeholder emoji)
  const artworkHtml = data.image
    ? `<img src="${data.image}" alt="${data.name}" />`
    : `<div class="class-artwork-placeholder">${data.emoji}</div>`;

  // Buat stat bars
  const statBarsHtml = Object.entries(data.stats).map(([stat, val]) => `
    <div class="stat-bar-row">
      <span class="stat-bar-label">${stat}</span>
      <div class="stat-bar-track">
        <div class="stat-bar-fill" style="width: 0%" data-width="${val}%"></div>
      </div>
      <span style="font-size:0.8rem;color:var(--gold-light);width:30px">${val}</span>
    </div>
  `).join('');

  const container = document.getElementById('classContent');
  container.innerHTML = `
    <div class="class-panel">
      <div class="class-artwork">${artworkHtml}</div>
      <div class="class-info">
        <h2>${data.emoji} ${data.name}</h2>
        <span class="class-badge">${data.badge}</span>
        <p class="desc">${data.description}</p>
        <div class="class-details">
          <div class="detail-box"><h4>🎯 Fokus Peran</h4><p>${data.focus}</p></div>
          <div class="detail-box"><h4>⚔️ Senjata Khas</h4><p>${data.weapon}</p></div>
          <div class="detail-box"><h4>✨ Kekhasan</h4><p>${data.specialty}</p></div>
          <div class="detail-box"><h4>🎮 Playstyle</h4><p>${data.playstyle}</p></div>
        </div>
        <div class="stat-bars">
          <h4 style="font-family:var(--font-display);font-size:0.7rem;letter-spacing:2px;color:var(--text-muted);margin-bottom:0.75rem">BASE STATS</h4>
          ${statBarsHtml}
        </div>
      </div>
    </div>
  `;

  // Animasi stat bars setelah render
  setTimeout(() => {
    container.querySelectorAll('.stat-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.width;
    });
  }, 50);
}

/* =============================================
   EVENT LISTENER — CLASS TABS
============================================= */
document.addEventListener('click', e => {
  if (e.target.classList.contains('class-tab')) {
    renderClassPanel(e.target.dataset.class);
  }
});

/* =============================================
   RENDER — RACE GRID
   Menampilkan semua kartu ras
============================================= */
function renderRaceGrid() {
  const grid = document.getElementById('raceGrid');
  if (!grid) return;
  grid.innerHTML = RACE_DATA.map(race => `
    <div class="race-card" data-race="${race.id}">
      <div class="race-card-art">
        ${race.image
          ? `<img src="${race.image}" alt="${race.name}" />`
          : `<span style="font-size:3.5rem">${race.emoji}</span>`}
      </div>
      <div class="race-card-body">
        <h3>${race.emoji} ${race.name}</h3>
        <span class="race-trait">${race.trait}</span>
        <p>${race.description}</p>
        <div class="special-trait">
          <strong style="font-family:var(--font-display);font-size:0.7rem;letter-spacing:1px;color:var(--gold);display:block;margin-bottom:4px">SPECIAL TRAIT</strong>
          ${race.special}
        </div>
      </div>
    </div>
  `).join('');
}

/* =============================================
   RENDER — LEVEL TABLE
   Menampilkan tabel level dari data.js
============================================= */
function renderLevelTable() {
  const tbody = document.getElementById('levelTableBody');
  if (!tbody) return;
  tbody.innerHTML = LEVEL_TABLE.map(([lvl, name, exp, bonus]) => `
    <tr>
      <td><strong style="color:var(--gold)">${lvl}</strong></td>
      <td class="rank">${name}</td>
      <td>${exp.toLocaleString('id-ID')} EXP</td>
      <td style="color:var(--text-muted);font-size:0.85rem">${bonus}</td>
    </tr>
  `).join('');
}

/* =============================================
   ANIMASI COUNTER (STATS HOME)
   Angka naik dari 0 ke target saat masuk viewport
============================================= */
function animateCounters() {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target);
    const duration = 1500;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      counter.textContent = Math.floor(current);
      if (current >= target) clearInterval(timer);
    }, 16);
  });
}

// Jalankan counter saat halaman home visible
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      counterObserver.disconnect();
    }
  });
});

const statsEl = document.querySelector('.stats-band');
if (statsEl) counterObserver.observe(statsEl);

/* =============================================
   SIMULASI COUNTER ONLINE (WhatsApp)
   ✏️ GANTI: Hubungkan ke backend/Supabase untuk data real
   Saat ini menggunakan angka random sebagai demo
============================================= */
function updateOnlineCount() {
  // TODO: Ganti dengan fetch ke Supabase atau backend kamu
  // Contoh:
  // const res = await fetch('https://xxxx.supabase.co/rest/v1/presence?select=count', {...})
  const count = Math.floor(Math.random() * 30) + 15;
  const el = document.getElementById('onlineCount');
  if (el) el.textContent = count;
}

updateOnlineCount();
setInterval(updateOnlineCount, 30000); // Update setiap 30 detik

/* =============================================
   FOOTER LINKS — Navigasi
============================================= */
const pageMap = { 'HOME': 'home', 'CLASS': 'class', 'RAS': 'race', 'LEVELING': 'leveling', 'EKONOMI': 'economy' };
document.querySelectorAll('.footer-links span').forEach(span => {
  span.addEventListener('click', () => {
    const page = pageMap[span.textContent];
    if (page) showPage(page);
  });
});

/* =============================================
   INIT — Tampilkan halaman HOME saat load
============================================= */
showPage('home');
