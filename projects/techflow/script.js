/* =====================================================
   DATA
===================================================== */
const POSTS = [{
        id: 1,
        category: "Web Dev",
        catColor: "web",
        title: "Neo-Brutalism: The Return of Authentic Design",
        excerpt: "Thick borders, offset shadows, and an aesthetic that isn't afraid to be different. Minimalism gave way to personality.",
        date: "02 APR 2026",
        readTime: "9 MIN",
        author: "Grok",
        tags: ["design", "css", "trends", "ui"],
        image: "https://picsum.photos/id/20/1200/700",
        imageThumb: "https://picsum.photos/id/20/800/450",
        likes: 47,
        comments: 12,
        content: `<p>Minimalist design has grown tired. After a decade of pure whites, excessive spacing, and almost invisible typography, the market craves authenticity. Web Neo-Brutalism is not just an aesthetic — it's a statement.</p><h3>What defines Neo-Brutalism</h3><p>Unlike architectural brutalism — which exposes raw concrete structures — digital Neo-Brutalism embraces CSS possibilities with brutal honesty: explicit black borders, shadows that don't pretend to be three-dimensional, and a color palette that shouts instead of whispers.</p><blockquote>Honest design doesn't hide its nature. It exposes it proudly and without excuses.</blockquote><p>Figma and Dribbble are full of interfaces that could be any product. Neo-Brutalism solves this at the root: you look and immediately know that was a deliberate choice.</p><h3>Who is adopting it</h3><p>Tech startups, independent media platforms, and creative studios are at the forefront. <strong>Gumroad, Linear, and Notion</strong> have already incorporated elements of this aesthetic with excellent reception.</p><p>The main competitive advantage is memorability. In a saturated market, being recognizable is worth more than being conventionally beautiful.</p><h3>How to implement</h3><p>Pure CSS is enough for 90% of effects. CSS variables, flexbox and grid are the only tools needed. The secret lies in consistency and the courage to go all the way — half-brutalism doesn't work.</p>`
    },
    {
        id: 2,
        category: "AI",
        catColor: "ai",
        title: "AI Without Anthropomorphism: Why That's Good",
        excerpt: "Understanding artificial intelligence as a tool, not a human substitute, is the most productive and honest path.",
        date: "01 APR 2026",
        readTime: "11 MIN",
        author: "Grok",
        tags: ["ai", "llm", "philosophy", "tech"],
        image: "https://picsum.photos/id/26/1200/700",
        imageThumb: "https://picsum.photos/id/26/800/450",
        likes: 83,
        comments: 24,
        content: `<p>The trend of anthropomorphizing language models has a hidden cost: it creates expectations the system cannot fulfill and obscures how it actually works.</p><h3>Probability machines</h3><p>LLMs are, at their core, systems that calculate the most likely next word given a context. That is extraordinarily powerful — but it is not human reasoning, not creativity in the philosophical sense, and definitely not genuine empathy.</p><blockquote>When you stop expecting AI to 'understand' and start using it as a sophisticated statistical tool, results improve significantly.</blockquote><p>The most accurate analogy is an advanced language calculator. Your calculator doesn't 'want' to help you. It simply performs operations with precision. Treat LLMs the same way and you'll have much less frustration.</p><h3>Practical implications</h3><p>When you stop projecting feelings onto an AI model, you start using more precise prompts, checking outputs more carefully, and matching the right tool to the right problem. <strong>Efficiency increases, frustration decreases.</strong></p><p>Excessive anthropomorphism also fuels unfounded fears about machine consciousness, which hinders serious discussions about real risks like algorithmic bias and power concentration.</p>`
    },
    {
        id: 3,
        category: "Hardware",
        catColor: "hw",
        title: "Custom PC: Is It Worth It in 2026?",
        excerpt: "Building your own computer remains a rewarding experience — whether for performance, learning, or pure fun.",
        date: "31 MAR 2026",
        readTime: "7 MIN",
        author: "Grok",
        tags: ["hardware", "pc", "gaming", "diy"],
        image: "https://picsum.photos/id/0/1200/700",
        imageThumb: "https://picsum.photos/id/0/800/450",
        likes: 62,
        comments: 18,
        content: `<p>With increasingly powerful laptops and mini PCs taking space, the question makes sense: is it still worth building a custom desktop in 2026?</p><h3>The technical argument</h3><p>For heavy workloads — 3D rendering, 4K video editing, ML model training — a custom desktop still delivers the best price/performance ratio. The ability to swap individual components eliminates the need to buy a completely new system when a single component becomes outdated.</p><blockquote>Upgrade flexibility is the killer feature that no laptop will ever fully replicate.</blockquote><h3>The educational argument</h3><p>Building a PC teaches how computers work in a visceral way. Understanding the relationship between CPU, RAM, storage and GPU creates intuitions that make you a better tech professional, regardless of specialty.</p><p>The enthusiast community — forums, YouTube channels, subreddits — remains vibrant and welcoming to beginners. <strong>It's a hobby that pays dividends in knowledge.</strong></p><h3>When NOT to build</h3><p>If you need mobility, if your budget is limited, or if you simply want something that works out of the box, a premium laptop or modern mini PC is the smarter choice. Right tools for the right problems.</p>`
    },
    {
        id: 4,
        category: "Cultura Tech",
        catColor: "cultura",
        title: "The Renaissance of Forums and Pure Text",
        excerpt: "Visual social networks have lost ground to text-based communities: Discord, Reddit, newsletters, and independent blogs.",
        date: "30 MAR 2026",
        readTime: "8 MIN",
        author: "Grok",
        tags: ["internet", "community", "blog", "writing"],
        image: "https://picsum.photos/id/96/1200/700",
        imageThumb: "https://picsum.photos/id/96/800/450",
        likes: 91,
        comments: 31,
        content: `<p>Something is happening on the margins of the mainstream internet: people are migrating from algorithmic image and video platforms back to text-based community spaces.</p><h3>Why text is coming back</h3><p>Fatigue with endless scrolling of superficial content has created genuine appetite for substance. A good long-form text communicates nuance that a 30-second Reel simply cannot. Depth is being valued again.</p><blockquote>Independent newsletters with 10,000 engaged subscribers have more real influence than profiles with millions of passive followers.</blockquote><h3>The new generation of forums</h3><p>Discord, specialized forums like Hacker News and Lobsters, and platforms like Substack have created spaces where long, in-depth discussions thrive. The model isn't new, but the scale and quality are unprecedented.</p><p>Independent blogs are also resurging. The original promise of the web — publishing to anyone, without intermediaries — has never been more technically accessible. <strong>And people are rediscovering it.</strong></p><h3>What this means</h3><p>For content creators, the message is clear: depth > reach. For readers, it's an invitation to leave the algorithmic bubble and build an intentional information diet.</p>`
    },
    {
        id: 5,
        category: "Design Brutal",
        catColor: "design",
        title: "Pure CSS: The Return of Total Control",
        excerpt: "Frameworks are useful, but writing CSS manually gives creative freedom, performance, and deep platform understanding.",
        date: "29 MAR 2026",
        readTime: "6 MIN",
        author: "Grok",
        tags: ["css", "frontend", "performance", "web"],
        image: "https://picsum.photos/id/106/1200/700",
        imageThumb: "https://picsum.photos/id/106/800/450",
        likes: 55,
        comments: 9,
        content: `<p>After years of dependency on CSS frameworks — Bootstrap, Tailwind, Material UI — many developers are rediscovering the pleasure and efficiency of hand-written CSS.</p><h3>The problem with excessive abstractions</h3><p>Frameworks are excellent for development speed in teams. But they have a cost: you start thinking in the framework's terms, not in the platform's terms. When something doesn't work, you don't know if the problem is your code, the framework, or the underlying CSS.</p><blockquote>Knowing CSS deeply is a competitive advantage. Most modern front-end developers don't know what a 'stacking context' is.</blockquote><h3>What modern CSS offers</h3><p>CSS Custom Properties (native variables), Grid, Flexbox, Container Queries, :has(), and @layer have completely changed the game. <strong>The CSS of 2026 is a completely different language</strong> from the CSS 2.0 that justified the creation of major frameworks.</p><p>Performance is also real: zero bytes of unused CSS, zero runtime JavaScript for styles, and total control over the cascade.</p><h3>When to use frameworks</h3><p>On tight-deadline team projects, Tailwind still makes sense. The question isn't abandonment — it's knowing that a viable alternative exists, and having the knowledge to choose consciously.</p>`
    },
    {
        id: 6,
        category: "AI",
        catColor: "ai",
        title: "Prompt Engineering: The Essential New Skill",
        excerpt: "Knowing how to communicate efficiently with AI models has become a key competency in the tech market — and is still underestimated.",
        date: "28 MAR 2026",
        readTime: "5 MIN",
        author: "Grok",
        tags: ["ai", "prompts", "productivity", "llm"],
        image: "https://picsum.photos/id/155/1200/700",
        imageThumb: "https://picsum.photos/id/155/800/450",
        likes: 120,
        comments: 42,
        content: `<p>Prompt engineering has gone from niche curiosity to valued competency in technical and non-technical teams. But what exactly does this mean in practice?</p><h3>Beyond 'tell me to do X'</h3><p>Effective prompting involves providing sufficient context, specifying the desired output format, using concrete examples (few-shot prompting), and understanding the limitations of the model you're using. It's closer to writing technical specifications than giving orders.</p><blockquote>The best prompt engineer is not the one who writes the most elaborate prompt — it's the one who knows when a problem should not be solved with an LLM.</blockquote><h3>Techniques that work</h3><p>Chain-of-thought prompting (ask the model to reason step by step), role prompting (define who the model should 'be'), and constraint prompting (specify what the model should NOT do) are three techniques with immediate, measurable impact.</p><p><strong>Iteration is key</strong>: the first prompt is rarely the best. Treating prompt development like code development — with versioning, testing, and refinement — is what separates amateurs from experts.</p>`
    },
    {
        id: 7,
        category: "Web Dev",
        catColor: "web",
        title: "Modern JavaScript: Frameworks Are Optional",
        excerpt: "Vanilla JS, Web Components, and native APIs are more powerful than ever — and might be the right choice for your next project.",
        date: "27 MAR 2026",
        readTime: "10 MIN",
        author: "Grok",
        tags: ["javascript", "vanilla", "web components", "frontend"],
        image: "https://picsum.photos/id/169/1200/700",
        imageThumb: "https://picsum.photos/id/169/800/450",
        likes: 74,
        comments: 27,
        content: `<p>React just turned 13. Vue and Angular have similar histories. While these frameworks remain relevant, the native browser ecosystem has evolved to make many framework use cases completely unnecessary.</p><h3>What the browser offers natively</h3><p>Web Components let you create reusable HTML elements with shadow DOM and lifecycle hooks. ES Modules make modularization native. Fetch API and async/await simplified requests. Intersection Observer, ResizeObserver, and MutationObserver cover use cases that once required entire jQuery.</p><blockquote>The web platform is the biggest framework of all. And it keeps improving without breaking changes.</blockquote><h3>The real cost of frameworks</h3><p>React + ReactDOM add ~130kb of JavaScript (minified). That's a real performance cost, especially on mid-range devices. For simple applications or content sites, this overhead is rarely justified.</p><p><strong>The question isn't avoiding frameworks</strong> — it's choosing consciously. Large team project? React makes sense. Content site or small tool? Vanilla JS is probably the correct choice.</p>`
    },
    {
        id: 8,
        category: "Hardware",
        catColor: "hw",
        title: "PC Handhelds: The Future of Portable Gaming",
        excerpt: "Devices like the Steam Deck and its successors show that it's possible to have your entire PC library in your pocket.",
        date: "26 MAR 2026",
        readTime: "7 MIN",
        author: "Grok",
        tags: ["gaming", "hardware", "steam deck", "portable"],
        image: "https://picsum.photos/id/177/1200/700",
        imageThumb: "https://picsum.photos/id/177/800/450",
        likes: 88,
        comments: 35,
        content: `<p>The Steam Deck proved there was pent-up demand for portable PC gaming. In 2026, the market exploded — ROG Ally X, Lenovo Legion Go, and a dozen competitors have turned the category into a respectable segment.</p><h3>Why now</h3><p>The convergence of power-efficient AMD APUs, high-density batteries, and ultra-compact SSDs created the window of opportunity. x86 architecture means native compatibility with decades of game catalog — no emulation layer, no compromises.</p><blockquote>Having 15,000 games in your pocket, playable offline, anywhere in the world, is an argument traditional consoles simply can't counter.</blockquote><h3>The real challenges</h3><p>Battery life remains the Achilles' heel: 90 minutes on demanding games is still the reality for most devices. The ideal user profile is someone who plays in short sessions or has frequent access to outlets.</p><p><strong>The software ecosystem also matters:</strong> Valve's SteamOS continues to be the best out-of-the-box experience. Windows on competitors often requires additional configuration to work optimally.</p>`
    }
];

/* STATE */
let activeCategory = null;
let activeSearch = '';
let displayCount = 4;
let likedPosts = new Set(JSON.parse(localStorage.getItem('tf_likes') || '[]'));
let isDark = localStorage.getItem('tf_dark') === 'true';

/* CURSOR */
const cursorDot = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');
let ringX = 0,
    ringY = 0;
document.addEventListener('mousemove', e => {
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
    ringX += (e.clientX - ringX) * 0.18;
    ringY += (e.clientY - ringY) * 0.18;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
});

function animCursor() {
    ringX += (parseFloat(cursorDot.style.left || 0) - ringX) * 0.18;
    ringY += (parseFloat(cursorDot.style.top || 0) - ringY) * 0.18;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
    requestAnimationFrame(animCursor);
}
animCursor();

/* THEME */
function applyTheme() {
    document.body.classList.toggle('dark', isDark);
    document.getElementById('themeToggle').textContent = isDark ? '☽' : '☀';
}
document.getElementById('themeToggle').addEventListener('click', () => {
    isDark = !isDark;
    localStorage.setItem('tf_dark', isDark);
    applyTheme();
    showToast(isDark ? 'DARK MODE ACTIVATED' : 'LIGHT MODE ACTIVATED');
});
applyTheme();

/* PAGE PROGRESS */
window.addEventListener('scroll', () => {
    const st = window.scrollY;
    const dh = document.documentElement.scrollHeight - window.innerHeight;
    document.getElementById('page-progress').style.width = (st / dh * 100) + '%';
    const fabTop = document.getElementById('fab-top');
    fabTop.classList.toggle('visible', st > 400);
});

/* TICKER */
function buildTicker() {
    const items = [
        '2026 — TECHFLOW BLOG',
        'NEO-BRUTALISM ON THE RISE',
        'AI TRANSFORMS THE MARKET',
        'MODERN CSS NEEDS NO FRAMEWORKS',
        'STEAM DECK 2 ANNOUNCED',
        'OPEN SOURCE NEVER DIES',
        'BUILD IN PUBLIC IS THE NEW NORM',
        'TYPESCRIPT DOMINATES THE ECOSYSTEM',
        'RUST ON THE WEB? WASM ANSWERS'
    ];
    const inner = document.getElementById('ticker-inner');
    const doubled = [...items, ...items].map(t => `<span>${t}</span>`).join('');
    inner.innerHTML = doubled;
}

/* HELPERS */
function getFiltered() {
    let posts = [...POSTS];
    if (activeCategory) posts = posts.filter(p => p.category === activeCategory);
    if (activeSearch.trim()) {
        const t = activeSearch.toLowerCase();
        posts = posts.filter(p =>
            p.title.toLowerCase().includes(t) ||
            p.excerpt.toLowerCase().includes(t) ||
            p.tags.some(tag => tag.includes(t))
        );
    }
    return posts;
}

function getCatColor(cat) {
    const map = {
        'Web Dev': 'web',
        'AI': 'ai',
        'Hardware': 'hw',
        'Cultura Tech': 'cultura',
        'Design Brutal': 'design'
    };
    return map[cat] || 'web';
}

function renderStars(rating) {
    let f = Math.floor(rating);
    let html = '';
    for (let i = 0; i < f; i++) html += '<i class="fas fa-star"></i>';
    if (rating % 1 >= 0.5) html += '<i class="fas fa-star-half-alt"></i>';
    for (let i = 0; i < 5 - Math.ceil(rating); i++) html += '<i class="far fa-star"></i>';
    return `<span class="stars">${html}</span> ${rating.toFixed(1)}`;
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(window.toastTimeout);
    window.toastTimeout = setTimeout(() => t.classList.remove('show'), 2800);
}

/* RENDER POSTS */
function renderPosts() {
    const container = document.getElementById('posts-container');
    container.innerHTML = '';
    const filtered = getFiltered();
    const toShow = filtered.slice(0, displayCount);
    document.getElementById('section-title').textContent = activeCategory || 'POSTS';
    document.getElementById('section-count').textContent = activeCategory ? `${filtered.length} ARTICLE${filtered.length !== 1 ? 'S' : ''}` : 'ALL';
    if (toShow.length === 0) {
        container.innerHTML = `<div class="empty-state"><span class="big-emoji">🔍</span><h3>NOTHING HERE</h3><p>No posts found for current search.</p><button class="btn-read" onclick="resetAll()">CLEAR FILTERS <span class="arrow">→</span></button></div>`;
        document.getElementById('load-more').style.display = 'none';
        document.getElementById('posts-count-label').textContent = '';
        return;
    }
    toShow.forEach((post, i) => {
        const isFirst = i === 0 && !activeCategory && !activeSearch;
        const art = document.createElement('article');
        art.className = `post-card animate-in ${isFirst ? 'full-width' : ''}`;
        art.innerHTML = `
      <div class="post-card-img-wrap"><img class="post-card-img" src="${post.imageThumb}" alt="${post.title}" loading="lazy"><div class="read-time-badge">⏱ ${post.readTime}</div></div>
      <div class="post-card-body"><span class="cat-tag" data-color="${post.catColor}">${post.category}</span><h2 class="post-card-title">${post.title}</h2><p class="post-card-excerpt">${post.excerpt}</p><div class="post-card-footer"><div class="post-meta"><strong>${post.author}</strong> — ${post.date}<br>♥ ${post.likes + (likedPosts.has(post.id) ? 1 : 0)} · 💬 ${post.comments}</div><button class="btn-read" data-id="${post.id}">READ <span class="arrow">→</span></button></div></div>
      <div class="post-number">${String(i + 1).padStart(2, '0')}</div>`;
        art.querySelector('.btn-read').addEventListener('click', e => {
            e.stopPropagation();
            openPost(post.id);
        });
        art.addEventListener('click', () => openPost(post.id));
        container.appendChild(art);
    });
    const loadBtn = document.getElementById('load-more');
    const hasMore = displayCount < filtered.length;
    loadBtn.style.display = hasMore ? 'block' : 'none';
    document.getElementById('posts-count-label').textContent = `SHOWING ${toShow.length} OF ${filtered.length} POSTS`;
}

/* MODAL */
function getCatBg(c) {
    const m = {
        web: '#0057ff',
        ai: '#ff2d55',
        hw: '#ffe500',
        cultura: '#a259ff',
        design: '#c8ff00'
    };
    return m[c] || '#111';
}

function getCatColor2(c) {
    const m = {
        web: '#fff',
        ai: '#fff',
        hw: '#111',
        cultura: '#fff',
        design: '#111'
    };
    return m[c] || '#fff';
}

function openPost(id) {
    const post = POSTS.find(p => p.id === id);
    if (!post) return;
    const liked = likedPosts.has(post.id);
    const likeCount = post.likes + (liked ? 1 : 0);
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
    <img class="modal-hero-img" src="${post.image}" alt="${post.title}" loading="lazy">
    <div class="modal-body">
      <span class="modal-cat-badge" style="background:${getCatBg(post.catColor)};color:${getCatColor2(post.catColor)};border-color:transparent">${post.category}</span>
      <h1 class="modal-title">${post.title}</h1>
      <div class="modal-meta"><div class="author-avatar">${post.author[0]}</div><div><strong>${post.author}</strong><br>${post.date} · ${post.readTime} READ</div><div style="margin-left:auto;display:flex;gap:14px;font-size:0.75rem;"><span>♥ ${likeCount}</span><span>💬 ${post.comments}</span></div></div>
      <div class="modal-article-body">${post.content}</div>
      <div class="share-bar"><span class="share-label">SHARE:</span><button class="share-btn" onclick="copyLink(${post.id})">🔗 LINK</button><button class="share-btn" onclick="showToast('Open Twitter...')">𝕏 TWITTER</button><button class="share-btn" onclick="showToast('Open LinkedIn...')">in LINKEDIN</button><button class="like-btn ${liked ? 'liked' : ''}" id="like-btn-${post.id}" onclick="toggleLike(${post.id})"><span class="heart">${liked ? '♥' : '♡'}</span><span id="like-count-${post.id}">${likeCount}</span></button></div>
      <div class="comments-section"><h2 class="comments-title">COMMENTS (${post.comments})</h2><div class="comment-item"><div class="comment-author">@curious_dev <span class="badge">READER</span></div><p class="comment-text">Excellent content! Straight to the point with no fluff. Exactly what I needed to read today.</p></div><div class="comment-item"><div class="comment-author">@br_design <span class="badge">READER</span></div><p class="comment-text">The blog aesthetic is perfect for the content. Design and editorial aligned — rare to see.</p></div><div class="comment-item"><div class="comment-author">@mateusfrancisco <span class="badge">READER</span></div><p class="comment-text">Already shared with the whole team. Congratulations on the quality.</p></div><div class="comment-form-wrap"><div class="comment-form-title">LEAVE YOUR COMMENT</div><div class="comment-inputs"><input type="text" class="comment-input" id="cmt-name" placeholder="Your name"><input type="email" class="comment-input" id="cmt-email" placeholder="your@email.com"></div><textarea class="comment-textarea" id="cmt-text" placeholder="What did you think?"></textarea><button class="btn-comment" onclick="submitComment()">SUBMIT COMMENT →</button></div></div>
    </div>`;
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    const modalBox = document.getElementById('modal-box');
    modalBox.scrollTop = 0;
    modalBox.addEventListener('scroll', updateModalProgress);
    document.getElementById('modal-reading-label').textContent = `READING: ${post.title.substring(0,24)}...`;
}

function updateModalProgress() {
    const box = document.getElementById('modal-box');
    const pct = (box.scrollTop / (box.scrollHeight - box.clientHeight)) * 100;
    document.getElementById('modal-progress').style.width = pct + '%';
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
    document.getElementById('modal-box').removeEventListener('scroll', updateModalProgress);
}
document.getElementById('close-modal').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});

/* LIKE */
function toggleLike(id) {
    const btn = document.getElementById(`like-btn-${id}`);
    const countEl = document.getElementById(`like-count-${id}`);
    const post = POSTS.find(p => p.id === id);
    if (!post) return;
    if (likedPosts.has(id)) {
        likedPosts.delete(id);
        btn.classList.remove('liked');
        btn.querySelector('.heart').textContent = '♡';
        countEl.textContent = post.likes;
        showToast('LIKE REMOVED');
    } else {
        likedPosts.add(id);
        btn.classList.add('liked');
        btn.querySelector('.heart').textContent = '♥';
        countEl.textContent = post.likes + 1;
        showToast('ARTICLE LIKED! ♥');
    }
    localStorage.setItem('tf_likes', JSON.stringify([...likedPosts]));
    renderPosts();
}

function copyLink(id) {
    navigator.clipboard?.writeText(window.location.href + '#post-' + id).then(() => showToast('LINK COPIED!')).catch(() => showToast('CTRL+C TO COPY'));
}

function submitComment() {
    const name = document.getElementById('cmt-name')?.value.trim();
    const text = document.getElementById('cmt-text')?.value.trim();
    if (!name || !text) {
        showToast('FILL NAME AND COMMENT');
        return;
    }
    const form = document.querySelector('.comment-form-wrap');
    const newComment = document.createElement('div');
    newComment.className = 'comment-item';
    newComment.innerHTML = `<div class="comment-author">@${name.toLowerCase().replace(/\s+/g,'_')} <span class="badge" style="background:var(--hot);color:white;border-color:var(--hot)">NEW</span></div><p class="comment-text">${text}</p>`;
    newComment.style.animation = 'fadeSlideUp .4s var(--ease)';
    form.parentNode.insertBefore(newComment, form);
    document.getElementById('cmt-name').value = '';
    document.getElementById('cmt-text').value = '';
    showToast('COMMENT PUBLISHED! ✓');
}

/* NEWSLETTER */
function handleSubscribe() {
    const email = document.getElementById('newsletter-email')?.value.trim();
    if (!email || !email.includes('@')) {
        showToast('INVALID EMAIL');
        return;
    }
    const widget = document.querySelector('.newsletter-widget');
    widget.innerHTML = `<h3 style="color:var(--ink);margin-bottom:12px;">✅ SUBSCRIBED!</h3><p style="font-family:var(--mono);font-size:0.8rem;color:rgba(0,0,0,0.7);">Great! <strong>${email}</strong> is on the list.<br>Next dispatch: next week.</p>`;
    showToast('SUBSCRIPTION CONFIRMED! ✓');
}

/* CATEGORIES */
function buildCategories() {
    const container = document.getElementById('category-list');
    const cats = [...new Set(POSTS.map(p => p.category))];
    container.innerHTML = '';
    const allItem = document.createElement('div');
    allItem.className = 'cat-item' + (!activeCategory ? ' active' : '');
    allItem.innerHTML = `<span>ALL POSTS</span><span class="count-badge">${POSTS.length}</span>`;
    allItem.addEventListener('click', () => {
        resetAll();
    });
    container.appendChild(allItem);
    cats.forEach(cat => {
        const count = POSTS.filter(p => p.category === cat).length;
        const item = document.createElement('div');
        item.className = 'cat-item' + (activeCategory === cat ? ' active' : '');
        item.innerHTML = `<span>${cat}</span><span class="count-badge">${count}</span>`;
        item.addEventListener('click', () => {
            activeCategory = cat;
            activeSearch = '';
            document.getElementById('search-input').value = '';
            displayCount = 4;
            renderPosts();
            buildCategories();
            updateNavActive();
            updateHero();
        });
        container.appendChild(item);
    });
}

function updateNavActive() {
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    if (!activeCategory) document.getElementById('nav-inicio')?.classList.add('active');
    else document.querySelectorAll('.nav-links a[data-cat]').forEach(a => {
        if (a.dataset.cat === activeCategory) a.classList.add('active');
    });
}

function updateHero() {
    const featured = document.getElementById('hero-featured');
    const post = POSTS.find(p => !activeCategory || p.category === activeCategory) || POSTS[0];
    featured.innerHTML = `<div class="hero-card" onclick="openPost(${post.id})"><img class="hero-card-img" src="${post.imageThumb}" alt="${post.title}" loading="lazy"><div class="hero-card-body"><div class="hero-card-cat">${post.category}</div><div class="hero-card-title">${post.title}</div><div class="hero-card-meta">${post.date} · ${post.readTime} READ</div></div></div>`;
}

function buildRecent() {
    const container = document.getElementById('recent-posts');
    container.innerHTML = '';
    POSTS.slice(0, 5).forEach(post => {
        const div = document.createElement('div');
        div.className = 'recent-item';
        div.innerHTML = `<img class="recent-thumb" src="${post.imageThumb}" alt="${post.title}" loading="lazy"><div class="recent-info"><span class="recent-cat">${post.category}</span><span class="recent-title">${post.title}</span><span class="recent-date">${post.date}</span></div>`;
        div.addEventListener('click', () => openPost(post.id));
        container.appendChild(div);
    });
}

function buildTags() {
    const all = POSTS.flatMap(p => p.tags);
    const unique = [...new Set(all)];
    const container = document.getElementById('tags-cloud');
    container.innerHTML = unique.map(tag => `<span class="tag" onclick="filterByTag('${tag}')">#${tag}</span>`).join('');
}

function filterByTag(tag) {
    document.getElementById('search-input').value = tag;
    activeSearch = tag;
    activeCategory = null;
    displayCount = 4;
    renderPosts();
    buildCategories();
    updateNavActive();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    showToast(`TAG: #${tag}`);
}

/* SEARCH */
document.getElementById('search-input').addEventListener('input', e => {
    activeSearch = e.target.value;
    activeCategory = null;
    displayCount = 4;
    renderPosts();
    buildCategories();
    updateNavActive();
    const filtered = getFiltered();
    const info = document.getElementById('search-info');
    info.textContent = activeSearch ? `${filtered.length} result${filtered.length !== 1 ? 's' : ''} found` : '';
});
document.getElementById('load-more').addEventListener('click', () => {
    const total = getFiltered().length;
    displayCount = Math.min(displayCount + 3, total);
    renderPosts();
    showToast(`LOADED ${displayCount} OF ${total} POSTS`);
});

/* NAV LINKS */
document.querySelectorAll('.nav-links a[data-cat]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        activeCategory = link.dataset.cat;
        activeSearch = '';
        document.getElementById('search-input').value = '';
        displayCount = 4;
        renderPosts();
        buildCategories();
        updateNavActive();
        updateHero();
        closeMenu();
        window.scrollTo({
            top: document.querySelector('.container').offsetTop - 80,
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('[data-cat-footer]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        activeCategory = link.dataset.catFooter;
        activeSearch = '';
        displayCount = 4;
        renderPosts();
        buildCategories();
        updateNavActive();
        updateHero();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

/* HAMBURGER */
const hamburger = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

function closeMenu() {
    navLinks.classList.remove('open');
}

/* RESET */
window.resetAll = function() {
    activeCategory = null;
    activeSearch = '';
    document.getElementById('search-input').value = '';
    document.getElementById('search-info').textContent = '';
    displayCount = 4;
    renderPosts();
    buildCategories();
    updateNavActive();
    updateHero();
};

/* INIT */
function init() {
    buildTicker();
    buildCategories();
    buildRecent();
    buildTags();
    updateHero();
    renderPosts();
    animateCounter('stat-posts', 0, POSTS.length, 1200);
    animateCounter('stat-reads', 0, 2400, 1800, true);
    console.log('%cTECHFLOW', 'font-size:2rem;font-weight:bold;color:#c8ff00;background:#111;padding:8px 16px;');
    console.log('%c© 2026 — Tech blog portfolio with Neo-Brutalism', 'font-size:0.9rem;color:#888;');
}

function animateCounter(id, from, to, duration, useK = false) {
    const el = document.getElementById(id);
    if (!el) return;
    const start = performance.now();

    function step(ts) {
        const progress = Math.min((ts - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const val = Math.round(from + (to - from) * ease);
        el.textContent = useK ? (val >= 1000 ? (val / 1000).toFixed(1) + 'K' : val) : val;
        if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}
init();