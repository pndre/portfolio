/* ─── Carousel (translated projects) ─── */
const projects = [{
  title: "Bistrô & Art",
  domain: "Restaurant",
  desc: "Interactive menu and online reservations",
  thumb: "prints/bistro_print.webp",
  url: "projects/bistro/bistro.html"
}, {
  title: "ÆTNA Medical Clinic",
  domain: "Healthcare",
  desc: "Scheduling and medical credibility",
  thumb: "prints/aetna_print.webp",
  url: "projects/aetna/aetna.html"
}, {
  title: "TechFlow Blog",
  domain: "Blog",
  desc: "Neo-Brutalist Blog focused on technology",
  thumb: "prints/techflow_print.webp",
  url: "projects/techflow/techflow.html"
}, {
  title: "Mia Fashion",
  domain: "E-commerce",
  desc: "Digital showcase and optimized cart",
  thumb: "prints/miafashion_print.webp",
  url: "projects/miafashion/miafashion.html"
}, {
  title: "Visual Archive",
  domain: "Photography",
  desc: "High-impact responsive gallery",
  thumb: "prints/archive_print.webp",
  url: "projects/archive/archive.html"
}, {
  title: "Trip World",
  domain: "Travel",
  desc: "Immersive packages with a unique experience",
  thumb: "prints/tripworld_print.webp",
  url: "projects/tripworld/tripworld.html"
}];
const track = document.getElementById('carouselTrack');
let currentIndex = 0;
let cardElements = [];
let slidesPerView = 3;

function updateSlidesPerView() {
  if (window.innerWidth <= 640) slidesPerView = 1.1;
  else if (window.innerWidth <= 1024) slidesPerView = 2.2;
  else slidesPerView = 3.2;
}

function getCardWidth() {
  if (!cardElements.length) return 280;
  const gap = parseFloat(getComputedStyle(track).gap) || 24;
  return cardElements[0].offsetWidth + gap;
}

function buildCarousel() {
  track.innerHTML = '';
  cardElements = [];
  projects.forEach(proj => {
    const card = document.createElement('article');
    card.className = 'carousel-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${proj.title} — ${proj.domain}`);
    const thumb = document.createElement('div');
    thumb.className = 'card-thumb';
    const img = document.createElement('img');
    img.src = proj.thumb;
    img.alt = `Screenshot of the project ${proj.title}`;
    img.loading = 'lazy';
    img.onerror = () => {
      img.src = `https://placehold.co/400x225/0e0e0e/00F0FF?text=${encodeURIComponent(proj.title)}`;
    };
    thumb.appendChild(img);
    const body = document.createElement('div');
    body.className = 'card-body';
    body.innerHTML = `
        <div class="card-domain">${proj.domain}</div>
        <h3>${proj.title}</h3>
        <p class="card-desc">${proj.desc}</p>
        <span class="demo-tag"><i class="fas fa-external-link-alt" aria-hidden="true"></i> View demo</span>
      `;
    card.appendChild(thumb);
    card.appendChild(body);
    const openProject = () => window.open(proj.url, '_blank', 'noopener,noreferrer');
    card.addEventListener('click', openProject);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openProject();
    });
    track.appendChild(card);
    cardElements.push(card);
  });
}

function updatePosition(animate = true) {
  if (!cardElements.length) return;
  const cw = getCardWidth();
  const maxIndex = Math.max(0, projects.length - Math.floor(slidesPerView));
  currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
  track.style.transition = animate ? 'transform .45s cubic-bezier(0.16,1,0.3,1)' : 'none';
  track.style.transform = `translateX(-${currentIndex * cw}px)`;
}
document.getElementById('nextBtn').addEventListener('click', () => {
  const max = Math.max(0, projects.length - Math.floor(slidesPerView));
  currentIndex = currentIndex < max ? currentIndex + 1 : 0;
  updatePosition(true);
});
document.getElementById('prevBtn').addEventListener('click', () => {
  const max = Math.max(0, projects.length - Math.floor(slidesPerView));
  currentIndex = currentIndex > 0 ? currentIndex - 1 : max;
  updatePosition(true);
});
window.addEventListener('resize', () => {
  updateSlidesPerView();
  updatePosition(false);
}, {
  passive: true
});
buildCarousel();
updateSlidesPerView();
requestAnimationFrame(() => updatePosition(false));
const menuToggle = document.getElementById('menu-toggle');
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id && id !== '#') {
      e.preventDefault();
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({
        behavior: 'smooth'
      });
      if (menuToggle && menuToggle.checked) menuToggle.checked = false;
    }
  });
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && menuToggle && menuToggle.checked) {
    menuToggle.checked = false;
  }
});
const fadeEls = document.querySelectorAll('.fade-up');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.animationPlayState = 'running';
      io.unobserve(e.target);
    }
  });
}, {
  threshold: 0.1
});
fadeEls.forEach(el => {
  el.style.animationPlayState = 'paused';
  io.observe(el);
});
