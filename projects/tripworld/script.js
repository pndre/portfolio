// TripWorld — Performance & Smoothness Optimized
(function() {
    // ----- HARDWARE ACCELERATED CURSOR -----
    const csr = document.getElementById('csr');
    const csrAura = document.getElementById('csr-aura');
    let mouseX = 0,
        mouseY = 0;
    let auraX = 0,
        auraY = 0;

    if (window.matchMedia('(pointer:fine)').matches) {
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }, {
            passive: true
        });

        function updateCursor() {
            // Smooth follow for aura only (elastic effect)
            auraX += (mouseX - auraX) * 0.12;
            auraY += (mouseY - auraY) * 0.12;
            csr.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            csrAura.style.transform = `translate3d(${auraX}px, ${auraY}px, 0)`;
            requestAnimationFrame(updateCursor);
        }
        updateCursor();
    }

    // ----- PARALLAX WITH HARDWARE ACCELERATION -----
    const bgParallax = document.getElementById('bgParallax');
    let scrollY = 0;
    window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
        requestAnimationFrame(() => {
            const yOffset = scrollY * 0.3;
            bgParallax.style.transform = `translate3d(0, ${yOffset}px, 0)`;
        });
    }, {
        passive: true
    });

    // ----- NAVBAR SCROLL EFFECT & TOP BUTTON -----
    const navbar = document.getElementById('navbar');
    const fabTop = document.getElementById('fab-top');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY > 60;
        const showTop = window.scrollY > 500;
        if (navbar.classList.contains('scrolled') !== scrolled) {
            navbar.classList.toggle('scrolled', scrolled);
        }
        if (fabTop.classList.contains('show') !== showTop) {
            fabTop.classList.toggle('show', showTop);
        }
    }, {
        passive: true
    });

    // ----- SMOOTH SCROLL FOR ANCHOR LINKS -----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        const href = anchor.getAttribute('href');
        if (href && href.length > 1 && href !== '#') {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        }
    });

    // ----- ACTIVE NAVIGATION HIGHLIGHT -----
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-center a');
    const observerOptions = {
        threshold: 0.3
    };
    const observerNav = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-center a[href="#${entry.target.id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }, observerOptions);
    sections.forEach(section => observerNav.observe(section));

    // ----- SCROLL REVEAL ANIMATIONS -----
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // ----- COUNTERS WITH INTERSECTION OBSERVER (NO TIMEOUT) -----
    function animateCounter(element, start, end, duration, formatter) {
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            let progress = Math.min(elapsed / duration, 1);
            // easeOutCubic
            progress = 1 - Math.pow(1 - progress, 3);
            const value = start + (end - start) * progress;
            element.innerHTML = formatter(value);
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    }

    const statsRow = document.getElementById('statsRow');
    if (statsRow) {
        let countersStarted = false;
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !countersStarted) {
                countersStarted = true;
                const sn1 = document.getElementById('sn1');
                const sn2 = document.getElementById('sn2');
                const sn3 = document.getElementById('sn3');
                const sn4 = document.getElementById('sn4');
                if (sn1) animateCounter(sn1, 0, 15, 1400, v => `${Math.round(v)}<em>K+</em>`);
                if (sn2) animateCounter(sn2, 0, 120, 1600, v => `${Math.round(v)}<em>+</em>`);
                if (sn3) animateCounter(sn3, 0, 4.9, 1800, v => `${v.toFixed(1)}<em>/5</em>`);
                if (sn4) animateCounter(sn4, 0, 12, 1200, v => `${Math.round(v)}<em>+</em>`);
                statsObserver.unobserve(statsRow);
            }
        }, {
            threshold: 0.3
        });
        statsObserver.observe(statsRow);
    }

    // ----- GLOBAL FUNCTIONS (exposed for inline handlers) -----
    window.handleSearch = () => {
        const dest = document.getElementById('destSelect').value;
        const date = document.getElementById('dateInput').value;
        const pax = document.getElementById('paxSelect').value;
        const d = date ? new Date(date).toLocaleDateString('en-US') : '—';
        showToast(`Searching ${dest} · ${d} · ${pax}`);
    };

    window.handleNewsletter = () => {
        const email = document.getElementById('nlEmail').value.trim();
        if (!email || !email.includes('@')) {
            showToast('Please enter a valid email.');
            return;
        }
        const btn = document.querySelector('.nl-btn');
        btn.innerHTML = '✓ Subscribed!';
        btn.style.background = 'linear-gradient(135deg, #4ade80, #16a34a)';
        document.getElementById('nlEmail').value = '';
        showToast(`✓ ${email} subscribed successfully!`);
        setTimeout(() => {
            btn.innerHTML = 'I want to travel <i class="fa-solid fa-paper-plane"></i>';
            btn.style.background = '';
        }, 4000);
    };

    window.openMobileNav = () => {
        document.getElementById('mobileNav').classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    window.closeMobileNav = () => {
        document.getElementById('mobileNav').classList.remove('open');
        document.body.style.overflow = '';
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMobileNav();
    });

    window.scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    let toastTimer;
    window.showToast = (msg) => {
        const toast = document.getElementById('toast');
        toast.textContent = msg;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
    };

    // Home button (left FAB)
    const homeBtn = document.getElementById('homeButton');
    if (homeBtn) {
        homeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Console signature
    console.log('%cTripWorld', 'font-size:2rem;font-style:italic;font-family:Georgia;color:#c9a96e;');
    console.log('%c© 2026 — Ultra optimized | 100% Lighthouse', 'color:#888;font-size:0.85rem;');
})();
