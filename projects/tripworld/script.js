/* Cursor */
const csr = document.getElementById('csr');
const csrAura = document.getElementById('csr-aura');
let ax = 0,
    ay = 0;
document.addEventListener('mousemove', e => {
    csr.style.left = e.clientX + 'px';
    csr.style.top = e.clientY + 'px';
    ax += (e.clientX - ax) * 0.12;
    ay += (e.clientY - ay) * 0.12;
    csrAura.style.left = ax + 'px';
    csrAura.style.top = ay + 'px';
});
(function animAura() {
    ax += (parseFloat(csr.style.left || 0) - ax) * 0.12;
    ay += (parseFloat(csr.style.top || 0) - ay) * 0.12;
    csrAura.style.left = ax + 'px';
    csrAura.style.top = ay + 'px';
    requestAnimationFrame(animAura);
})();

/* Parallax */
const bgEl = document.getElementById('bgParallax');
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            const y = window.scrollY * 0.3;
            bgEl.style.transform = `translateY(${y}px)`;
            ticking = false;
        });
        ticking = true;
    }
});

/* Navbar scroll */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    document.getElementById('fab-top').classList.toggle('show', window.scrollY > 500);
});

/* Smooth scroll + active nav */
const navLinks = document.querySelectorAll('.nav-center a');
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (href && href.length > 1 && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
const sections = document.querySelectorAll('section[id]');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(l => l.classList.remove('active'));
            const active = document.querySelector(`.nav-center a[href="#${entry.target.id}"]`);
            if (active) active.classList.add('active');
        }
    });
}, {
    threshold: 0.3
});
sections.forEach(s => observer.observe(s));

/* Scroll reveal */
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealObserver.unobserve(e.target);
        }
    });
}, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
});
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* Counters */
function animCount(el, from, to, dur, fmt) {
    const start = performance.now();

    function step(ts) {
        const p = Math.min((ts - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        const v = from + (to - from) * ease;
        el.innerHTML = fmt(v);
        if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}
setTimeout(() => {
    animCount(document.getElementById('sn1'), 0, 15, 1400, v => `${Math.round(v)}<em>K+</em>`);
    animCount(document.getElementById('sn2'), 0, 120, 1600, v => `${Math.round(v)}<em>+</em>`);
    animCount(document.getElementById('sn3'), 0, 4.9, 1800, v => `${v.toFixed(1)}<em>/5</em>`);
    animCount(document.getElementById('sn4'), 0, 12, 1200, v => `${Math.round(v)}<em>+</em>`);
}, 600);

/* Booking */
function handleSearch() {
    const dest = document.getElementById('destSelect').value;
    const date = document.getElementById('dateInput').value;
    const pax = document.getElementById('paxSelect').value;
    const d = date ? new Date(date).toLocaleDateString('en-US') : '—';
    showToast(`Searching ${dest} · ${d} · ${pax}`);
}

/* Newsletter */
function handleNewsletter() {
    const email = document.getElementById('nlEmail').value.trim();
    if (!email || !email.includes('@')) {
        showToast('Please enter a valid email.');
        return;
    }
    const btn = document.querySelector('.nl-btn');
    btn.textContent = '✓ Subscribed!';
    btn.style.background = 'linear-gradient(135deg, #4ade80, #16a34a)';
    document.getElementById('nlEmail').value = '';
    showToast(`✓ ${email} subscribed successfully!`);
    setTimeout(() => {
        btn.textContent = 'I want to travel →';
        btn.style.background = '';
    }, 4000);
}

/* Mobile nav */
function openMobileNav() {
    document.getElementById('mobileNav').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
    document.getElementById('mobileNav').classList.remove('open');
    document.body.style.overflow = '';
}
window.closeMobileNav = closeMobileNav;
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMobileNav();
});

/* Scroll to section */
window.scrollToSection = id => document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth'
});

/* Toast */
let toastTimer;
window.showToast = function(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
};

/* Console signature */
console.log('%cTripWorld', 'font-size:2rem;font-style:italic;font-family:Georgia;color:#c9a96e;padding:8px;');
console.log('%c© 2026 — Premium glassmorphism portfolio', 'color:#888;font-size:0.85rem;');