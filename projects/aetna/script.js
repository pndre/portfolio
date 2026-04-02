(function() {
    const cursor = document.getElementById('cursor'),
        ring = document.getElementById('cursor-ring');
    let mx = 0,
        my = 0,
        rx = 0,
        ry = 0;
    document.addEventListener('mousemove', e => {
        mx = e.clientX;
        my = e.clientY;
        cursor.style.left = mx + 'px';
        cursor.style.top = my + 'px';
    });

    function animRing() {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
        requestAnimationFrame(animRing);
    }
    animRing();
    const inter = document.querySelectorAll('a,button,.spec-card,.test-item,.journey-step,.soc-btn,.num-card');
    inter.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
    const prog = document.getElementById('progBar');
    window.addEventListener('scroll', () => {
        prog.style.width = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100 + '%';
    });
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 60);
    });
    const sections = document.querySelectorAll('section[id]'),
        navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
        let cur = '';
        sections.forEach(s => {
            if (window.scrollY >= s.offsetTop - 200) cur = s.id;
        });
        navLinks.forEach(l => {
            l.classList.remove('active');
            if (l.getAttribute('href') === '#' + cur) l.classList.add('active');
        });
    });
    navLinks.forEach(l => {
        l.addEventListener('click', e => {
            e.preventDefault();
            const t = document.getElementById(l.getAttribute('href').substring(1));
            if (t) t.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    const btnHero = document.getElementById('btnHeroAgendar'),
        btnNav = document.getElementById('btnNavAgendar'),
        toContact = () => document.getElementById('contato')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    if (btnHero) btnHero.addEventListener('click', toContact);
    if (btnNav) btnNav.addEventListener('click', toContact);
    const modal = document.getElementById('modalCred'),
        btnCred = document.getElementById('btnHeroCred'),
        closeModal = document.getElementById('modalClose');
    if (btnCred) btnCred.addEventListener('click', () => modal.classList.add('open'));
    if (closeModal) closeModal.addEventListener('click', () => modal.classList.remove('open'));
    if (modal) modal.addEventListener('click', e => {
        if (e.target === modal) modal.classList.remove('open');
    });
    const revealObs = new IntersectionObserver(e => {
        e.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, {
        threshold: .1,
        rootMargin: '0px 0px -60px 0px'
    });
    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
    const sigObs = new IntersectionObserver(e => {
        e.forEach(entry => {
            if (entry.isIntersecting) {
                document.getElementById('sigPath')?.classList.add('animate');
                sigObs.disconnect();
            }
        });
    }, {
        threshold: .5
    });
    const sigWrap = document.querySelector('.signature-wrap');
    if (sigWrap) sigObs.observe(sigWrap);
    const heroImg = document.getElementById('heroParallax'),
        journeyImg = document.getElementById('journeyParallax');
    window.addEventListener('scroll', () => {
        if (heroImg) heroImg.style.transform = `scale(1.06) translateY(${window.scrollY*0.12}px)`;
        if (journeyImg) {
            const rect = journeyImg.closest('.journey-img-wrap')?.getBoundingClientRect();
            if (rect && rect.top < window.innerHeight && rect.bottom > 0) journeyImg.style.transform = `translateY(${(window.innerHeight/2-rect.top)*0.08}px)`;
        }
    });

    function animateCounter(el, target, dur) {
        let start = 0,
            step = target / (dur / 16),
            suffix = el.dataset.suffix || '';
        const int = setInterval(() => {
            start = Math.min(start + step, target);
            el.textContent = (target >= 1000 ? Math.round(start).toLocaleString('en-US') + '+' : Math.round(start)) + suffix;
            if (start >= target) clearInterval(int);
        }, 16);
    }
    const numObs = new IntersectionObserver(e => {
        e.forEach(entry => {
            if (entry.isIntersecting) {
                const val = entry.target.querySelector('[data-target]');
                if (val && !val.dataset.counted) {
                    val.dataset.counted = 'true';
                    animateCounter(val, parseInt(val.dataset.target, 10), 1600);
                }
            }
        });
    }, {
        threshold: .5
    });
    document.querySelectorAll('.num-card').forEach(card => numObs.observe(card));
    const form = document.getElementById('formAetna'),
        success = document.getElementById('formSuccessMsg');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            form.style.display = 'none';
            success.classList.add('show');
        });
    }
})();