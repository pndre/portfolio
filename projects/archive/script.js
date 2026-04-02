// Collection (translated tags and labels)
const masterImageList = [{
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
        tag: "Architecture",
        label: "URBAN SPACE",
        span: "tall",
        date: 1
    },
    {
        src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
        tag: "Streetwear",
        label: "EDITORIAL STREET",
        span: "",
        date: 2
    },
    {
        src: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1200",
        tag: "Minimalism",
        label: "MINIMALISM",
        span: "wide",
        date: 3
    },
    {
        src: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=800",
        tag: "Editorial",
        label: "CULTURE",
        span: "tall",
        date: 4
    },
    {
        src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
        tag: "Minimalism",
        label: "VINTAGE OBJECT",
        span: "",
        date: 5
    },
    {
        src: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&q=80&w=800",
        tag: "Architecture",
        label: "BRUTALIST",
        span: "",
        date: 6
    },
    {
        src: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800",
        tag: "Streetwear",
        label: "URBAN FASHION",
        span: "wide",
        date: 7
    },
    {
        src: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800",
        tag: "Editorial",
        label: "HIGH CONTRAST",
        span: "tall",
        date: 8
    },
    {
        src: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800",
        tag: "Minimalism",
        label: "SILENCE",
        span: "",
        date: 9
    },
    {
        src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&q=80&w=800",
        tag: "Architecture",
        label: "GEOMETRY",
        span: "",
        date: 10
    },
    {
        src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800",
        tag: "Editorial",
        label: "FASHION FILM",
        span: "",
        date: 11
    },
    {
        src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
        tag: "Streetwear",
        label: "GRAFFITI",
        span: "tall",
        date: 12
    },
    {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800",
        tag: "Architecture",
        label: "SACRED MOUNTAIN",
        span: "",
        date: 13
    },
    {
        src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800",
        tag: "Streetwear",
        label: "STREET CORE",
        span: "wide",
        date: 14
    },
    {
        src: "https://www.maxfosterphotography.com/images/xl/Rainbow-Rocks-BW.jpg",
        tag: "Minimalism",
        label: "MONOCHROME",
        span: "tall",
        date: 15
    },
    {
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
        tag: "Editorial",
        label: "INTIMATE PORTRAIT",
        span: "",
        date: 16
    },
    {
        src: "https://images.unsplash.com/photo-1581382575275-97901c2635b7?auto=format&fit=crop&q=80&w=800",
        tag: "Architecture",
        label: "CONCRETE",
        span: "",
        date: 17
    },
    {
        src: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=800",
        tag: "Streetwear",
        label: "SKATE CULT",
        span: "tall",
        date: 18
    },
    {
        src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
        tag: "Minimalism",
        label: "ESSENTIAL",
        span: "wide",
        date: 19
    },
    {
        src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800",
        tag: "Editorial",
        label: "VANGUARD",
        span: "",
        date: 20
    },
    {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
        tag: "Architecture",
        label: "VERTICAL",
        span: "tall",
        date: 21
    },
    {
        src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800",
        tag: "Streetwear",
        label: "URBAN NOMAD",
        span: "",
        date: 22
    },
    {
        src: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&q=80&w=800",
        tag: "Minimalism",
        label: "VISUAL POETRY",
        span: "",
        date: 23
    },
    {
        src: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&q=80&w=800",
        tag: "Editorial",
        label: "HAUTE COUTURE",
        span: "wide",
        date: 24
    }
];
let loadedImages = [];
let currentLimit = 12;
let currentCategory = "All";
let currentSearchTerm = "";
let currentSort = "default";

// DOM references
const filterContainer = document.getElementById("filterBar");
const galleryGrid = document.getElementById("galleryGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const resetBtn = document.getElementById("resetFiltersBtn");
const statsSpan = document.getElementById("statsCounter");

// Lightbox globals
let currentLightboxImages = [];
let currentLightboxIndex = 0;
const modal = document.getElementById("lightboxModal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");

// Helper functions
function updateLoadedImages() {
    loadedImages = masterImageList.slice(0, currentLimit);
}

function getFilteredAndSorted() {
    let filtered = loadedImages.filter(img => {
        const matchCategory = currentCategory === "All" || img.tag === currentCategory;
        const matchSearch = currentSearchTerm === "" ||
            img.label.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
            img.tag.toLowerCase().includes(currentSearchTerm.toLowerCase());
        return matchCategory && matchSearch;
    });

    // Sorting
    if (currentSort === "az") {
        filtered.sort((a, b) => a.label.localeCompare(b.label));
    } else if (currentSort === "za") {
        filtered.sort((a, b) => b.label.localeCompare(a.label));
    } else if (currentSort === "newest") {
        filtered.sort((a, b) => b.date - a.date);
    }
    return filtered;
}

function renderFilters() {
    const categoriesSet = new Set(["All"]);
    loadedImages.forEach(img => categoriesSet.add(img.tag));
    const categories = Array.from(categoriesSet);
    filterContainer.innerHTML = "";
    categories.forEach(cat => {
        const count = loadedImages.filter(img => img.tag === cat).length;
        const btn = document.createElement("div");
        btn.classList.add("filter-btn");
        if (cat === currentCategory) btn.classList.add("active");
        btn.innerHTML = `${cat} <span class="counter-badge">${count}</span>`;
        btn.setAttribute("data-filter", cat);
        btn.addEventListener("click", () => {
            currentCategory = cat;
            renderFilters();
            renderGallery();
        });
        filterContainer.appendChild(btn);
    });
}

function renderGallery() {
    const itemsToShow = getFilteredAndSorted();
    galleryGrid.innerHTML = "";
    statsSpan.innerText = `${itemsToShow.length} of ${loadedImages.length} images`;

    itemsToShow.forEach((item, idx) => {
        const div = document.createElement("div");
        div.className = "item";
        if (item.span === "tall") div.classList.add("item-tall");
        if (item.span === "wide") div.classList.add("item-wide");
        div.setAttribute("data-tag", item.label);

        const img = document.createElement("img");
        img.src = item.src;
        img.alt = item.tag + " visual";
        img.loading = "lazy";
        div.appendChild(img);

        // Lightbox event with index in filtered array
        div.addEventListener("click", (e) => {
            e.stopPropagation();
            const filteredArray = getFilteredAndSorted();
            const clickedIndex = filteredArray.findIndex(i => i.src === item.src);
            openLightbox(filteredArray, clickedIndex);
        });
        galleryGrid.appendChild(div);
    });

    if (galleryGrid) {
        let currentActiveTouchItem = null;
        const clearTouch = () => {
            if (currentActiveTouchItem) {
                currentActiveTouchItem.classList.remove('touch-active');
                currentActiveTouchItem = null;
            }
        };
        galleryGrid.removeEventListener('touchstart', window._touchStartHandler);
        window._touchStartHandler = (e) => {
            const touchedItem = e.target.closest('.item');
            if (!touchedItem) return;
            clearTouch();
            touchedItem.classList.add('touch-active');
            currentActiveTouchItem = touchedItem;
        };
        galleryGrid.addEventListener('touchstart', window._touchStartHandler);
        document.addEventListener('touchend', clearTouch);
        document.addEventListener('touchcancel', clearTouch);
    }
}

function refreshAll() {
    renderFilters();
    renderGallery();
}

// Lightbox functions
function openLightbox(imagesArray, startIndex) {
    currentLightboxImages = imagesArray;
    currentLightboxIndex = startIndex;
    updateModalContent();
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function updateModalContent() {
    if (!currentLightboxImages.length) return;
    const imgData = currentLightboxImages[currentLightboxIndex];
    modalImg.src = imgData.src;
    modalCaption.innerText = `${imgData.label} — ${imgData.tag}`;
    const downloadBtn = document.getElementById("modalDownload");
    downloadBtn.onclick = () => {
        fetch(imgData.src)
            .then(res => res.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `archive_${imgData.label.replace(/\s/g, '_')}.jpg`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            })
            .catch(() => alert("Download available only for source images."));
    };
}

function closeLightbox() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
}

function nextImage() {
    if (currentLightboxImages.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxImages.length;
    updateModalContent();
}

function prevImage() {
    if (currentLightboxImages.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
    updateModalContent();
}

function loadMore() {
    if (currentLimit >= masterImageList.length) {
        alert("🎞️ Full collection loaded! All images are already available.");
        return;
    }
    currentLimit = Math.min(currentLimit + 8, masterImageList.length);
    updateLoadedImages();
    refreshAll();
}

function resetAllFilters() {
    currentCategory = "All";
    currentSearchTerm = "";
    currentSort = "default";
    searchInput.value = "";
    sortSelect.value = "default";
    refreshAll();
}

// Event listeners
searchInput.addEventListener("input", (e) => {
    currentSearchTerm = e.target.value;
    renderGallery();
});
sortSelect.addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderGallery();
});
loadMoreBtn.addEventListener("click", loadMore);
resetBtn.addEventListener("click", resetAllFilters);

// Lightbox listeners
document.getElementById("modalClose").addEventListener("click", closeLightbox);
document.getElementById("modalPrev").addEventListener("click", prevImage);
document.getElementById("modalNext").addEventListener("click", nextImage);
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeLightbox();
});
document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
});

// Newsletter and social alerts
document.getElementById("mockNewsletter")?.addEventListener("click", () => alert("📸 Visual Archive: thanks for your interest! News coming soon to your inbox (demo)."));
document.querySelectorAll('.social-links i').forEach(icon => {
    icon.addEventListener('click', () => alert('Connect with Visual Archive on social media (interactive demo).'));
});

// Initialization
updateLoadedImages();
refreshAll();