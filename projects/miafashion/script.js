const products = [{
        id: 1,
        name: "Sculptural Midi Dress",
        price: 1890,
        category: "dress",
        desc: "Asymmetric silhouette in organic fabric.",
        images: ["https://misciano.com/cdn/shop/files/robe-midi-perles-et-sequins-champagne-9492818.jpg?v=1757604329&width=1100", "https://misciano.com/cdn/shop/files/robe-midi-perles-et-sequins-champagne-227246.jpg?v=1757585456&width=1100"],
        sizes: ["XS", "S", "M", "L"],
        rating: 4.9,
        reviews: [{
            user: "Isabela",
            text: "Perfect!"
        }]
    },
    {
        id: 2,
        name: "Timeless Silk Blouse",
        price: 890,
        category: "top",
        desc: "Fluid natural silk.",
        images: ["https://brooksfielddonna.vtexassets.com/arquivos/ids/196645/BSSD000001RV_44_2-BLUSA-SEDA-LACO.jpg?v=638820468110270000"],
        sizes: ["S", "M", "L"],
        rating: 4.7,
        reviews: [{
            user: "Mariana",
            text: "Versatile"
        }]
    },
    {
        id: 3,
        name: "Organic Linen Tailleur",
        price: 2450,
        category: "blazer",
        desc: "Artisanal oversized set.",
        images: ["https://cdn.awsli.com.br/600x1000/1704/1704380/produto/347183423/captura-de-tela-2025-04-10-155858-gzfr5s66o6.png"],
        sizes: ["S", "M", "L"],
        rating: 5.0,
        reviews: []
    },
    {
        id: 4,
        name: "Long Ceremony Dress",
        price: 3200,
        category: "dress",
        desc: "Sculptural draping.",
        images: ["https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600"],
        sizes: ["S", "M", "L"],
        rating: 4.8,
        reviews: []
    },
    {
        id: 5,
        name: "Oversize Cotton Shirt",
        price: 650,
        category: "shirt",
        desc: "Mother-of-pearl buttons.",
        images: ["https://acdn-us.mitiendanube.com/stores/001/286/352/products/camiseta-oversized-feminina-branca-1-ba2a97a745ba69ae4a17211519951124-640-0.webp"],
        sizes: ["XS", "S", "M", "L"],
        rating: 4.6,
        reviews: []
    },
    {
        id: 6,
        name: "Vegetal Leather Dress",
        price: 2790,
        category: "dress",
        desc: "Sustainable and minimalist.",
        images: ["https://cdn.awsli.com.br/2500x2500/1538/1538522/produto/265765038/whatsapp-image-2024-04-29-at-13-45-30-62b8lgidum.jpeg"],
        sizes: ["S", "M", "L"],
        rating: 4.9,
        reviews: []
    },
    {
        id: 7,
        name: "Midi Pleated Skirt",
        price: 980,
        category: "skirt",
        desc: "Hand pleated.",
        images: ["https://paconcept.com.br/media/catalog/product/cache/1/image/1800x2399/85e4522595efc69f496374d01ef2bf13/p/_/p.a_jan1_sa260055_3342_2.jpg"],
        sizes: ["S", "M", "L"],
        rating: 4.7,
        reviews: []
    },
    {
        id: 8,
        name: "Linen Blazer",
        price: 1680,
        category: "blazer",
        desc: "Straight cut.",
        images: ["https://images.tcdn.com.br/img/img_prod/719500/blazer_feminino_em_linho_cru_com_bolsos_rosa_xoque_1_20250930115418_561c4201da1f.jpg"],
        sizes: ["S", "M", "L"],
        rating: 5.0,
        reviews: []
    },
    {
        id: 9,
        name: "Silk Cropped Top",
        price: 720,
        category: "top",
        desc: "Gathered detail.",
        images: ["https://lojaanimale.vtexassets.com/arquivos/ids/1721260-1770-2660/52105025_36085_4-TOP-CROPPED-DE-SEDA-SEM-ALCA-COM-TRANSPARENTE.jpg?v=638410336674000000"],
        sizes: ["XS", "S", "M"],
        rating: 4.5,
        reviews: []
    },
    {
        id: 10,
        name: "Slip Dress Satin",
        price: 1350,
        category: "dress",
        desc: "Sensual fit.",
        images: ["https://acdn-us.mitiendanube.com/stores/001/019/962/products/1000649069-580ece233f00bd416e17227988969101-480-0.webp"],
        sizes: ["S", "M", "L"],
        rating: 4.7,
        reviews: []
    }
];
let cart = [],
    wishlist = [],
    currentView = "gallery",
    selectedProduct = null,
    selectedSize = "",
    currentFilter = "all",
    searchTerm = "",
    currentSort = "default";

function save() {
    localStorage.setItem("mia_cart", JSON.stringify(cart));
    localStorage.setItem("mia_wishlist", JSON.stringify(wishlist));
    updateCounters();
}

function load() {
    const c = localStorage.getItem("mia_cart");
    if (c) cart = JSON.parse(c);
    const w = localStorage.getItem("mia_wishlist");
    if (w) wishlist = JSON.parse(w);
    updateCounters();
}

function updateCounters() {
    document.getElementById("cartCount").innerText = cart.reduce((s, i) => s + i.qty, 0);
    document.getElementById("wishlistCount").innerText = wishlist.length;
}

function showToast(msg) {
    const t = document.getElementById("toastMsg");
    t.innerText = msg;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 2500);
}

function renderGallery() {
    let filtered = products.filter(p => (currentFilter === "all" || p.category === currentFilter) && p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    if (currentSort === "price-low") filtered.sort((a, b) => a.price - b.price);
    if (currentSort === "price-high") filtered.sort((a, b) => b.price - a.price);
    if (currentSort === "rating") filtered.sort((a, b) => b.rating - a.rating);
    const grid = document.getElementById("galleryGrid");
    grid.innerHTML = filtered.map(p => `<div class="art-card" data-id="${p.id}"><img class="art-image" src="${p.images[0]}" loading="lazy"><i class="fas fa-heart wishlist-heart ${wishlist.some(w=>w.id===p.id)?"liked":""}" data-id="${p.id}"></i><div class="art-info"><div class="art-name">${p.name}</div><div class="art-price">R$ ${p.price}</div><div class="rating">${renderStars(p.rating)} (${p.reviews.length})</div></div></div>`).join("");
    document.querySelectorAll(".art-card").forEach(card => {
        card.addEventListener("click", (e) => {
            if (!e.target.classList.contains("wishlist-heart")) openDetail(parseInt(card.dataset.id));
        });
    });
    document.querySelectorAll(".wishlist-heart").forEach(heart => {
        heart.addEventListener("click", (e) => {
            e.stopPropagation();
            const pid = parseInt(heart.dataset.id);
            toggleWishlist(pid);
            renderGallery();
        });
    });
}

function renderStars(rating) {
    let f = Math.floor(rating);
    let html = '';
    for (let i = 0; i < f; i++) html += '<i class="fas fa-star"></i>';
    if (rating % 1 >= 0.5) html += '<i class="fas fa-star-half-alt"></i>';
    for (let i = 0; i < 5 - Math.ceil(rating); i++) html += '<i class="far fa-star"></i>';
    return `<span class="stars">${html}</span> ${rating.toFixed(1)}`;
}

function toggleWishlist(pid) {
    const prod = products.find(p => p.id === pid);
    const idx = wishlist.findIndex(w => w.id === pid);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast(`${prod.name} removed from wishlist`);
    } else {
        wishlist.push(prod);
        showToast(`${prod.name} added to wishlist ✨`);
    }
    save();
    updateCounters();
    renderGallery();
    if (currentView === "detail" && selectedProduct && selectedProduct.id === pid) document.querySelector("#detailView .wishlist-heart")?.classList.toggle("liked", wishlist.some(w => w.id === pid));
}

function addToCart(prod, size, qty = 1) {
    if (!size) {
        showToast("Please choose a size");
        return false;
    }
    const existing = cart.find(i => i.productId === prod.id && i.size === size);
    if (existing) existing.qty += qty;
    else cart.push({
        productId: prod.id,
        size,
        qty,
        product: prod
    });
    save();
    showToast(`${prod.name} (${size}) added`);
    renderCartDrawer();
    return true;
}

function renderCartDrawer() {
    const container = document.getElementById("cartItemsList");
    if (cart.length === 0) {
        container.innerHTML = "<p style='text-align:center;padding:2rem;'>Your curation is empty</p>";
        document.getElementById("cartTotalAmount").innerText = "R$ 0";
        return;
    }
    let total = 0;
    container.innerHTML = cart.map((item, i) => {
        const p = item.product;
        const subtotal = p.price * item.qty;
        total += subtotal;
        return `<div class="cart-item"><img class="cart-item-img" src="${p.images[0]}"><div class="cart-item-info"><div class="cart-item-name">${p.name}</div><div>Size: ${item.size}</div><div class="cart-item-price">R$ ${p.price}</div><div class="quantity-control"><button class="cart-dec" data-index="${i}">-</button><span>${item.qty}</span><button class="cart-inc" data-index="${i}">+</button><button class="cart-remove" data-index="${i}" style="margin-left:8px;">🗑️</button></div></div></div>`;
    }).join("");
    document.getElementById("cartTotalAmount").innerText = `R$ ${total.toFixed(2)}`;
    document.querySelectorAll(".cart-dec").forEach(btn => {
        btn.addEventListener("click", () => {
            let idx = parseInt(btn.dataset.index);
            if (cart[idx].qty > 1) cart[idx].qty--;
            else cart.splice(idx, 1);
            save();
            renderCartDrawer();
            updateCounters();
        });
    });
    document.querySelectorAll(".cart-inc").forEach(btn => {
        btn.addEventListener("click", () => {
            let idx = parseInt(btn.dataset.index);
            cart[idx].qty++;
            save();
            renderCartDrawer();
            updateCounters();
        });
    });
    document.querySelectorAll(".cart-remove").forEach(btn => {
        btn.addEventListener("click", () => {
            cart.splice(parseInt(btn.dataset.index), 1);
            save();
            renderCartDrawer();
            updateCounters();
        });
    });
}

function openDetail(id) {
    selectedProduct = products.find(p => p.id === id);
    if (!selectedProduct) return;
    selectedSize = selectedProduct.sizes[0];
    currentView = "detail";
    document.getElementById("galleryView").classList.add("hidden");
    document.getElementById("detailView").classList.remove("hidden");
    document.getElementById("checkoutView").classList.add("hidden");
    document.getElementById("detailTitle").innerText = selectedProduct.name;
    document.getElementById("detailPrice").innerHTML = `R$ ${selectedProduct.price}`;
    document.getElementById("detailDesc").innerText = selectedProduct.desc;
    document.getElementById("detailRating").innerHTML = renderStars(selectedProduct.rating);
    document.getElementById("detailMainImg").src = selectedProduct.images[0];
    const thumbDiv = document.getElementById("thumbnails");
    thumbDiv.innerHTML = selectedProduct.images.map((img, i) => `<img class="thumb ${i===0?"active":""}" src="${img}" data-index="${i}">`).join("");
    document.querySelectorAll(".thumb").forEach(t => t.addEventListener("click", (e) => {
        document.getElementById("detailMainImg").src = e.target.src;
        document.querySelectorAll(".thumb").forEach(th => th.classList.remove("active"));
        e.target.classList.add("active");
    }));
    const sizeDiv = document.getElementById("sizeSelector");
    sizeDiv.innerHTML = selectedProduct.sizes.map(sz => `<button class="size-btn ${sz===selectedSize?"active":""}" data-size="${sz}">${sz}</button>`).join("");
    document.querySelectorAll(".size-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            selectedSize = btn.dataset.size;
            document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });
    document.getElementById("addToCartDetailBtn").onclick = () => addToCart(selectedProduct, selectedSize);
    document.getElementById("buyNowDetailBtn").onclick = () => {
        if (addToCart(selectedProduct, selectedSize)) setTimeout(() => {
            openCheckout();
        }, 200);
    };
    document.getElementById("reviewsList").innerHTML = selectedProduct.reviews.map(r => `<div style="border-bottom:1px solid #eae6e0; padding:1rem 0;"><strong>${r.user}</strong><p>${r.text}</p></div>`).join("") || "<p>No reviews yet.</p>";
    const related = products.filter(p => p.id !== selectedProduct.id).slice(0, 4);
    document.getElementById("relatedGrid").innerHTML = related.map(r => `<div class="art-card" data-id="${r.id}"><img class="art-image" src="${r.images[0]}"><div class="art-info">${r.name}<br>R$ ${r.price}</div></div>`).join("");
    document.querySelectorAll("#relatedGrid .art-card").forEach(card => {
        card.addEventListener("click", () => openDetail(parseInt(card.dataset.id)));
    });
    window.scrollTo(0, 0);
}

function backToGallery() {
    currentView = "gallery";
    document.getElementById("detailView").classList.add("hidden");
    document.getElementById("checkoutView").classList.add("hidden");
    document.getElementById("galleryView").classList.remove("hidden");
    renderGallery();
}

function openCheckout() {
    if (cart.length === 0) {
        showToast("Add items to your cart first");
        return;
    }
    currentView = "checkout";
    document.getElementById("galleryView").classList.add("hidden");
    document.getElementById("detailView").classList.add("hidden");
    document.getElementById("checkoutView").classList.remove("hidden");
    const total = cart.reduce((sum, i) => sum + i.product.price * i.qty, 0);
    document.getElementById("checkoutSummary").innerHTML = `Summary: ${cart.length} items | Total R$ ${total.toFixed(2)}`;
}
document.getElementById("checkoutForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const total = cart.reduce((s, i) => s + i.product.price * i.qty, 0);
    let final = total;
    if (document.getElementById("paymentMethod").value === "pix") final = total * 0.9;
    showToast(`✨ Order completed! Total: R$ ${final.toFixed(2)}. Thank you!`);
    cart = [];
    save();
    renderCartDrawer();
    updateCounters();
    backToGallery();
});

function renderWishlistModal() {
    const container = document.getElementById("wishlistItemsGrid");
    container.innerHTML = wishlist.map(p => `<div style="cursor:pointer;" onclick="openDetail(${p.id});document.getElementById('wishlistModal').classList.remove('open');"><img src="${p.images[0]}" style="width:100%; aspect-ratio:3/4; object-fit:cover;"><p>${p.name}<br>R$ ${p.price}</p></div>`).join("");
    if (wishlist.length === 0) container.innerHTML = "<p>Wishlist empty</p>";
}
const craftItems = ["https://cdn.simplo7.net/static/28546/galeria/156337032416818.jpeg", "https://blog.maximustecidos.com.br/wp-content/uploads/2020/03/costura-maximus-tecidos-1024x681.jpg", "https://img.freepik.com/fotos-gratis/mulher-fazendo-roupas_23-2148875325.jpg?t=st=1775072519~exp=1775076119~hmac=d52a4f635928de48796aba86a5d63cdb5bba144f549cbbfbc45efd5332d80eaf&w=1060", "https://i0.wp.com/meufrete.net.br/wp-content/uploads/2023/09/guest-post_-dicas-de-organizacao-de-roupas-em-uma-mudanca_-vem-descobrir.jpeg?ssl=1"];
const track = document.getElementById("craftTrack");
track.innerHTML = craftItems.map(src => `<div class="carousel-item"><img src="${src}"><p style="margin-top:0.5rem; font-size:0.7rem;">Artisanal step</p></div>`).join("");

function initFilters() {
    const cats = ["all", "dress", "top", "blazer", "shirt", "skirt"];
    const container = document.getElementById("filterContainer");
    container.innerHTML = cats.map(c => `<button class="filter-btn ${c===currentFilter?"active":""}" data-cat="${c}">${c==="all"?"ALL":c.toUpperCase()}</button>`).join("");
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            currentFilter = btn.dataset.cat;
            renderGallery();
            initFilters();
        });
    });
}
document.getElementById("searchInput").addEventListener("input", e => {
    searchTerm = e.target.value;
    renderGallery();
});
document.getElementById("sortSelect").addEventListener("change", e => {
    currentSort = e.target.value;
    renderGallery();
});
document.getElementById("cartIconBtn").addEventListener("click", () => {
    renderCartDrawer();
    document.getElementById("cartDrawer").classList.add("open");
});
document.getElementById("closeCartDrawer").addEventListener("click", () => document.getElementById("cartDrawer").classList.remove("open"));
document.getElementById("proceedCheckoutBtn").addEventListener("click", () => {
    document.getElementById("cartDrawer").classList.remove("open");
    openCheckout();
});
document.getElementById("wishlistIconBtn").addEventListener("click", () => {
    renderWishlistModal();
    document.getElementById("wishlistModal").classList.add("open");
});
document.getElementById("closeWishlistModal").addEventListener("click", () => document.getElementById("wishlistModal").classList.remove("open"));
document.getElementById("backToGallery").addEventListener("click", backToGallery);
document.getElementById("backFromCheckout").addEventListener("click", backToGallery);
document.getElementById("navGallery").addEventListener("click", e => {
    e.preventDefault();
    backToGallery();
});
document.getElementById("footerGallery").addEventListener("click", e => {
    e.preventDefault();
    backToGallery();
});
document.getElementById("navAtelier").addEventListener("click", e => {
    e.preventDefault();
    showToast("Exclusive atelier in Bahia — each piece made to order.");
});
document.getElementById("navContato").addEventListener("click", e => {
    e.preventDefault();
    showToast("hello@miafashion.com | WhatsApp (71) 99123-4567");
});
const mobileMenu = document.getElementById("mobileMenu"),
    hamburger = document.getElementById("hamburgerBtn"),
    closeMenu = document.getElementById("closeMenuBtn");
hamburger.addEventListener("click", () => mobileMenu.classList.add("open"));
closeMenu.addEventListener("click", () => mobileMenu.classList.remove("open"));
document.querySelectorAll("#mobileGallery, #mobileAtelier, #mobileContato").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        if (link.id === "mobileGallery") backToGallery();
        else showToast("Coming soon.");
    });
});
const cursor = document.getElementById("cursorDot");
if (window.innerWidth > 768) {
    document.addEventListener("mousemove", e => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
        cursor.classList.add("active");
    });
    document.querySelectorAll("button, a, .art-card").forEach(el => {
        el.addEventListener("mouseenter", () => cursor.classList.add("expand"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("expand"));
    });
}
load();
initFilters();
renderGallery();
updateCounters();