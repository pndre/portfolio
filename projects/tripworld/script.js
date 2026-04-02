// TripWorld — Performance Optimized
(function() {
    const csr = document.getElementById('csr'),
        csrAura = document.getElementById('csr-aura');
    let ax = 0,
        ay = 0;
    document.addEventListener('mousemove', e => {
            csr.style.left = e.clientX + 'px', csr.style.top = e.clientY + 'px', ax += (e.clientX - ax) * .12, ay += (e.clientY - ay) * .12, csrAura.style.left = ax + 'px', csrAura.style.top = ay + 'px'
        }),
        function anim() {
            ax += (parseFloat(csr.style.left || 0) - ax) * .12, ay += (parseFloat(csr.style.top || 0) - ay) * .12, csrAura.style.left = ax + 'px', csrAura.style.top = ay + 'px', requestAnimationFrame(anim)
        }();
    const bgEl = document.getElementById('bgParallax');
    let ticking = !1;
    window.addEventListener('scroll', () => {
        ticking || requestAnimationFrame(() => {
            bgEl.style.transform = `translateY(${window.scrollY*.3}px)`, ticking = !1
        }), ticking = !0
    });
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60), document.getElementById('fab-top').classList.toggle('show', window.scrollY > 500)
    });
    const navLinks = document.querySelectorAll('.nav-center a');
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        const href = a.getAttribute('href');
        href && href.length > 1 && href !== '#' && a.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(href);
            target && target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    });
    const sections = document.querySelectorAll('section[id]');
    new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(l => l.classList.remove('active'));
                const active = document.querySelector(`.nav-center a[href="#${entry.target.id}"]`);
                active && active.classList.add('active')
            }
        })
    }, {
        threshold: .3
    }).observe(document.querySelector('#home'));
    sections.forEach(s => new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                navLinks.forEach(l => l.classList.remove('active'));
                const act = document.querySelector(`.nav-center a[href="#${e.target.id}"]`);
                act && act.classList.add('active')
            }
        })
    }, {
        threshold: .3
    }).observe(s));
    new IntersectionObserver((e, o) => {
        e.forEach(entry => {
            entry.isIntersecting && (entry.target.classList.add('visible'), o.unobserve(entry.target))
        })
    }, {
        threshold: .12,
        rootMargin: '0px 0px -40px 0px'
    }).observe(document.querySelector('.reveal'));
    document.querySelectorAll('.reveal').forEach(el => new IntersectionObserver((e, o) => {
        e.forEach(entry => {
            entry.isIntersecting && (entry.target.classList.add('visible'), o.unobserve(entry.target))
        })
    }, {
        threshold: .12,
        rootMargin: '0px 0px -40px 0px'
    }).observe(el));

    function animCount(el, from, to, dur, fmt) {
        const start = performance.now();
        (function step(ts) {
            const p = Math.min((ts - start) / dur, 1),
                ease = 1 - Math.pow(1 - p, 3),
                v = from + (to - from) * ease;
            if (el.innerHTML = fmt(v), p < 1) requestAnimationFrame(step)
        })(start)
    }
    setTimeout(() => {
        animCount(document.getElementById('sn1'), 0, 15, 1400, v => `${Math.round(v)}<em>K+</em>`), animCount(document.getElementById('sn2'), 0, 120, 1600, v => `${Math.round(v)}<em>+</em>`), animCount(document.getElementById('sn3'), 0, 4.9, 1800, v => `${v.toFixed(1)}<em>/5</em>`), animCount(document.getElementById('sn4'), 0, 12, 1200, v => `${Math.round(v)}<em>+</em>`)
    }, 600);
    window.handleSearch = () => {
        const dest = document.getElementById('destSelect').value,
            date = document.getElementById('dateInput').value,
            pax = document.getElementById('paxSelect').value,
            d = date ? new Date(date).toLocaleDateString('en-US') : '—';
        showToast(`Searching ${dest} · ${d} · ${pax}`)
    };
    window.handleNewsletter = () => {
        const email = document.getElementById('nlEmail').value.trim();
        if (!email || !email.includes('@')) {
            showToast('Please enter a valid email.');
            return
        }
        const btn = document.querySelector('.nl-btn');
        btn.innerHTML = '✓ Subscribed!', btn.style.background = 'linear-gradient(135deg, #4ade80, #16a34a)', document.getElementById('nlEmail').value = '', showToast(`✓ ${email} subscribed successfully!`), setTimeout(() => {
            btn.innerHTML = 'I want to travel <i class="fa-solid fa-paper-plane"></i>', btn.style.background = ''
        }, 4e3)
    };
    window.openMobileNav = () => {
        document.getElementById('mobileNav').classList.add('open'), document.body.style.overflow = 'hidden'
    };
    window.closeMobileNav = () => {
        document.getElementById('mobileNav').classList.remove('open'), document.body.style.overflow = ''
    };
    document.addEventListener('keydown', e => {
        e.key === 'Escape' && closeMobileNav()
    });
    window.scrollToSection = id => document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth'
    });
    let toastTimer;
    window.showToast = function(msg) {
        const t = document.getElementById('toast');
        t.textContent = msg, t.classList.add('show'), clearTimeout(toastTimer), toastTimer = setTimeout(() => t.classList.remove('show'), 3e3)
    };
    document.getElementById('homeButton')?.addEventListener('click', e => {
        e.preventDefault(), window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    });
    console.log('%cTripWorld', 'font-size:2rem;font-style:italic;font-family:Georgia;color:#c9a96e;padding:8px;'), console.log('%c© 2026 — Premium glassmorphism portfolio', 'color:#888;font-size:0.85rem;')
})();
