(function() {
    // Custom cursor
    const cursor = document.getElementById('cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        document.addEventListener('mouseleave', () => cursor.style.opacity = '0');
        document.addEventListener('mouseenter', () => cursor.style.opacity = '1');
    }

    // Navbar scroll
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });

    // Scroll reveal animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    document.querySelectorAll('.poster-item, .art-card.reveal-card, .chef-bio').forEach(el => observer.observe(el));

    // Smooth parallax on hero
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        const heroText = document.querySelector('.hero-text h1');
        const heroImg = document.querySelector('.hero-main-img');
        if (heroText) heroText.style.transform = `translateY(${scrollY * 0.25}px)`;
        if (heroImg) heroImg.style.transform = `translateY(${scrollY * -0.08}px)`;
    });

    // Go Top button
    const goTopBtn = document.getElementById('goTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) goTopBtn.classList.add('show');
        else goTopBtn.classList.remove('show');
    });
    goTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Reservation simulation
    const btnReservar = document.getElementById('btnReservar');
    if (btnReservar) {
        btnReservar.addEventListener('click', (e) => {
            e.preventDefault();
            const nome = document.getElementById('nomeReserva')?.value.trim();
            if (nome) alert(`Merci, ${nome}! Your reservation request has been sent. We will contact you soon.`);
            else alert("Please provide your name to make a reservation.");
        });
    }

    // Smooth navigation for links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Force initial visibility if any item already in view
    setTimeout(() => {
        document.querySelectorAll('.poster-item, .art-card.reveal-card').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) el.classList.add('visible');
        });
    }, 200);
})();