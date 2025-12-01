
const PRODUCTS = [
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        description: "The ultimate iPhone experience with titanium design and powerful camera system.",
        price: 1299,
        originalPrice: 1499,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "smartphones",
        brand: "Apple",
        inStock: true,
        rating: 4.8,
        reviewCount: 124,
        features: ["Titanium design", "A17 Pro chip", "Pro camera system"],
        isNew: true,
        badge: "new"
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        description: "Next-generation AI phone with advanced camera capabilities.",
        price: 1199,
        originalPrice: 1399,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "smartphones",
        brand: "Samsung",
        inStock: true,
        rating: 4.7,
        reviewCount: 89,
        features: ["AI-powered camera", "120Hz display", "5G connectivity"],
        isNew: true,
        badge: "new"
    },
    {
        id: 3,
        name: "MacBook Air M3",
        description: "Supercharged by M3 chip with stunning Liquid Retina display.",
        price: 1099,
        originalPrice: 1299,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "laptops",
        brand: "Apple",
        inStock: true,
        rating: 4.8,
        reviewCount: 67,
        features: ["M3 chip", "Liquid Retina display", "All-day battery"],
        isNew: true,
        badge: "new"
    },
    {
        id: 4,
        name: "Dell XPS 15",
        description: "Premium ultrabook with InfinityEdge display and powerful performance.",
        price: 1599,
        originalPrice: 1899,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "laptops",
        brand: "Dell",
        inStock: true,
        rating: 4.6,
        reviewCount: 45,
        features: ["InfinityEdge display", "12th Gen Intel Core", "Thin and light"],
        isNew: false,
        badge: "sale"
    },
    {
        id: 5,
        name: "Sony WH-1000XM5",
        description: "Industry-leading noise canceling headphones with superb sound quality.",
        price: 399,
        originalPrice: 449,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "audio",
        brand: "Sony",
        inStock: true,
        rating: 4.9,
        reviewCount: 203,
        features: ["Noise cancellation", "30hr battery", "Touch controls"],
        isNew: false,
        badge: "trending"
    },
    {
        id: 6,
        name: "AirPods Pro (2nd Gen)",
        description: "Active Noise Cancellation with Transparency mode for immersive sound.",
        price: 249,
        originalPrice: 279,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "audio",
        brand: "Apple",
        inStock: true,
        rating: 4.7,
        reviewCount: 312,
        features: ["Active Noise Cancellation", "Transparency mode", "Spatial Audio"],
        isNew: false,
        badge: "sale"
    },
    {
        id: 7,
        name: "iPad Pro 12.9\" M2",
        description: "The ultimate iPad experience with M2 chip and Liquid Retina XDR display.",
        price: 1099,
        originalPrice: 1299,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "tablets",
        brand: "Apple",
        inStock: true,
        rating: 4.8,
        reviewCount: 156,
        features: ["M2 chip", "Liquid Retina XDR", "5G capable"],
        isNew: false,
        badge: "sale"
    },
    {
        id: 8,
        name: "Samsung Galaxy Tab S9",
        description: "Premium Android tablet with stunning display and powerful performance.",
        price: 849,
        originalPrice: 999,
        image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "tablets",
        brand: "Samsung",
        inStock: true,
        rating: 4.5,
        reviewCount: 78,
        features: ["AMOLED display", "Snapdragon processor", "S Pen included"],
        isNew: true,
        badge: "new"
    },
    {
        id: 9,
        name: "Apple Watch Series 9",
        description: "The most powerful Apple Watch with advanced health features.",
        price: 399,
        originalPrice: 429,
        image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "wearables",
        brand: "Apple",
        inStock: true,
        rating: 4.5,
        reviewCount: 98,
        features: ["Advanced health monitoring", "GPS", "Water resistant"],
        isNew: true,
        badge: "new"
    },
    {
        id: 10,
        name: "Samsung Galaxy Watch 6",
        description: "Advanced smartwatch with comprehensive health tracking.",
        price: 349,
        originalPrice: 399,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "wearables",
        brand: "Samsung",
        inStock: true,
        rating: 4.4,
        reviewCount: 67,
        features: ["Health monitoring", "GPS", "Long battery life"],
        isNew: false,
        badge: "sale"
    },
    {
        id: 11,
        name: "Canon EOS R5",
        description: "Professional mirrorless camera with 45MP full-frame sensor.",
        price: 3899,
        originalPrice: 4299,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "cameras",
        brand: "Canon",
        inStock: true,
        rating: 4.8,
        reviewCount: 45,
        features: ["45MP sensor", "8K video", "In-body stabilization"],
        isNew: false,
        badge: "trending"
    },
    {
        id: 12,
        name: "Sony A7 IV",
        description: "Versatile full-frame mirrorless camera for professionals.",
        price: 2499,
        originalPrice: 2799,
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "cameras",
        brand: "Sony",
        inStock: true,
        rating: 4.7,
        reviewCount: 89,
        features: ["33MP sensor", "4K video", "Real-time tracking"],
        isNew: false,
        badge: "sale"
    },
    {
        id: 13,
        name: "PlayStation 5",
        description: "Next-gen gaming console with stunning graphics and performance.",
        price: 499,
        originalPrice: 549,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "gaming",
        brand: "Sony",
        inStock: true,
        rating: 4.9,
        reviewCount: 234,
        features: ["4K gaming", "SSD storage", "DualSense controller"],
        isNew: false,
        badge: "trending"
    },
    {
        id: 14,
        name: "Xbox Series X",
        description: "Powerful gaming console with 4K gaming and quick resume.",
        price: 499,
        originalPrice: 549,
        image: "https://cms-assets.xboxservices.com/assets/f0/8d/f08dfa50-f2ef-4873-bc8f-bcb6c34e48c0.png?n=642227_Hero-Gallery-0_C2_857x676.png",
        category: "gaming",
        brand: "Microsoft",
        inStock: true,
        rating: 4.8,
        reviewCount: 156,
        features: ["4K gaming", "Quick Resume", "Game Pass"],
        isNew: false,
        badge: "trending"
    },
    {
        id: 15,
        name: "Nintendo Switch OLED",
        description: "Hybrid gaming console with vibrant OLED display.",
        price: 349,
        originalPrice: 399,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "gaming",
        brand: "Nintendo",
        inStock: true,
        rating: 4.6,
        reviewCount: 189,
        features: ["OLED display", "Hybrid design", "Local multiplayer"],
        isNew: false,
        badge: "sale"
    },
    {
        id: 16,
        name: "Logitech MX Master 3S",
        description: "Advanced wireless mouse for productivity and creativity.",
        price: 99,
        originalPrice: 119,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "accessories",
        brand: "Logitech",
        inStock: true,
        rating: 4.7,
        reviewCount: 267,
        features: ["Ergonomic design", "Precision tracking", "Multi-device"],
        isNew: false,
        badge: "trending"
    },
    {
        id: 17,
        name: "Samsung T7 SSD 2TB",
        description: "Portable SSD with fast transfer speeds and rugged design.",
        price: 149,
        originalPrice: 179,
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "accessories",
        brand: "Samsung",
        inStock: true,
        rating: 4.8,
        reviewCount: 134,
        features: ["2TB storage", "Fast transfer", "Rugged design"],
        isNew: false,
        badge: "sale"
    },
    {
        id: 18,
        name: "Apple Magic Keyboard",
        description: "Wireless keyboard with touch ID and numeric keypad.",
        price: 179,
        originalPrice: 199,
        image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "accessories",
        brand: "Apple",
        inStock: true,
        rating: 4.5,
        reviewCount: 89,
        features: ["Touch ID", "Numeric keypad", "Wireless"],
        isNew: false,
        badge: "sale"
    },
    {
        id: 19,
        name: "DJI Mavic 3 Pro",
        description: "Professional drone with triple camera system.",
        price: 2199,
        originalPrice: 2499,
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "cameras",
        brand: "DJI",
        inStock: true,
        rating: 4.9,
        reviewCount: 78,
        features: ["Triple camera", "46min flight", "Omnidirectional sensing"],
        isNew: true,
        badge: "new"
    },
    {
        id: 20,
        name: "GoPro Hero 12",
        description: "Action camera with HyperSmooth 6.0 stabilization.",
        price: 399,
        originalPrice: 449,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "cameras",
        brand: "GoPro",
        inStock: true,
        rating: 4.6,
        reviewCount: 112,
        features: ["HyperSmooth 6.0", "5.3K video", "Waterproof"],
        isNew: true,
        badge: "new"
    }
];

// Cart state
let cart = [];
let darkMode = false;
let wishlist = [];

// DOM elements
const productsGrid = document.getElementById('products-grid');
const homeProducts = document.getElementById('home-products');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.querySelector('.cart-count');
const overlay = document.getElementById('overlay');
const closeCartBtn = document.getElementById('close-cart');
const cartBtn = document.getElementById('cart-btn');
const themeToggle = document.getElementById('theme-toggle');
const categoryFilter = document.getElementById('category-filter');
const sortBy = document.getElementById('sort-by');
const sidebarCheckoutBtn = document.getElementById('sidebar-checkout-btn');
const checkoutItems = document.getElementById('checkout-items');
const checkoutTotal = document.getElementById('checkout-total');
const checkoutForm = document.getElementById('checkout-form');
const bankDetails = document.getElementById('bank-details');
const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
const toastContainer = document.getElementById('toast-container');
const floodAlert = document.getElementById('floodAlert');
const closeAlertBtn = document.getElementById('closeAlert');
const cartDonation = document.getElementById('cart-donation');
const cartDonationAmount = document.getElementById('cart-donation-amount');
const checkoutDonation = document.getElementById('checkout-donation');
const checkoutDonationAmount = document.getElementById('checkout-donation-amount');

// Initialize app
function init() {
    renderProducts();
    renderHomeProducts();
    setupEventListeners();
    loadCartFromStorage();
    loadWishlistFromStorage();
    loadThemePreference();
    updateCartUI();
    updateCheckoutUI();
}

// Setup event listeners
function setupEventListeners() {
    cartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    overlay.addEventListener('click', closeCart);
    themeToggle.addEventListener('click', toggleTheme);
    categoryFilter.addEventListener('change', filterProducts);
    sortBy.addEventListener('change', sortProducts);
    sidebarCheckoutBtn.addEventListener('click', proceedToCheckout);
    checkoutForm.addEventListener('submit', completeOrder);
    closeAlertBtn.addEventListener('click', closeFloodAlert);
    
    // Payment method change
    paymentMethods.forEach(method => {
        method.addEventListener('change', (e) => {
            if (e.target.value === 'bank-deposit') {
                bankDetails.classList.add('active');
            } else {
                bankDetails.classList.remove('active');
            }
        });
    });
    
    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
}

// Show specific page
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    
    // Close mobile menu
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth <= 768) {
        navLinks.style.display = 'none';
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Filter by category
function filterByCategory(category) {
    showPage('products');
    categoryFilter.value = category;
    filterProducts();
}

// Close flood alert
function closeFloodAlert() {
    floodAlert.style.display = 'none';
    localStorage.setItem('floodAlertClosed', 'true');
}

// Render products
function renderProducts(filteredProducts = PRODUCTS) {
    productsGrid.innerHTML = '';
    
    filteredProducts.forEach(product => {
        productsGrid.appendChild(createProductCard(product));
    });
}

// Render home products
function renderHomeProducts() {
    homeProducts.innerHTML = '';
    
    // Show 6 featured products
    const featuredProducts = PRODUCTS.slice(0, 6);
    
    featuredProducts.forEach(product => {
        homeProducts.appendChild(createProductCard(product));
    });
}

// Create product card
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    const isOnSale = product.originalPrice && product.originalPrice > product.price;
    const discount = isOnSale ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    const isInWishlist = wishlist.includes(product.id);
    const donationAmount = (product.price * 0.1).toFixed(2);
    
    productCard.innerHTML = `
        <div class="product-image">
            ${product.badge ? `<div class="product-badge ${product.badge}">${product.badge.charAt(0).toUpperCase() + product.badge.slice(1)}</div>` : ''}
            ${isOnSale ? `<div class="product-badge sale">-${discount}%</div>` : ''}
            <div class="product-badge relief">
                <i class="fas fa-hands-helping"></i> Donates $${donationAmount}
            </div>
            <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-content">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            
            <div class="donation-notice">
                <i class="fas fa-hands-helping donation-icon"></i>
                <span class="donation-amount">$${donationAmount}</span> from this purchase will be donated to Sri Lanka Flood Relief Fund
            </div>
            
            <div class="product-rating">
                <div class="stars">
                    ${generateStarRating(product.rating)}
                </div>
                <span class="rating-count">(${product.reviewCount})</span>
            </div>
            <div class="product-price">
                <span class="current-price">$${product.price}</span>
                ${isOnSale ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
                ${isOnSale ? `<span class="discount">-${discount}%</span>` : ''}
            </div>
            <div class="product-actions">
                <button class="add-to-cart" data-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
                <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" data-id="${product.id}">
                    <i class="${isInWishlist ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
        </div>
    `;
    
    // Add event listeners
    const addToCartBtn = productCard.querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', (e) => {
        const productId = parseInt(e.target.closest('.add-to-cart').dataset.id);
        addToCart(productId);
    });
    
    const wishlistBtn = productCard.querySelector('.wishlist-btn');
    wishlistBtn.addEventListener('click', (e) => {
        const productId = parseInt(e.target.closest('.wishlist-btn').dataset.id);
        toggleWishlist(productId);
    });
    
    return productCard;
}

// Generate star rating
function generateStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Add to cart
function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCartUI();
    updateCheckoutUI();
    saveCartToStorage();
    
    // Show toast with donation message
    const donation = (product.price * 0.1).toFixed(2);
    showToast(`${product.name} added to cart. $${donation} will be donated to flood relief!`, 'success');
    
    // Open cart sidebar
    if (!cartSidebar.classList.contains('active')) {
        openCart();
    }
}

// Toggle wishlist
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index === -1) {
        wishlist.push(productId);
        showToast('Added to wishlist', 'success');
    } else {
        wishlist.splice(index, 1);
        showToast('Removed from wishlist', 'info');
    }
    
    saveWishlistToStorage();
    renderProducts();
    renderHomeProducts();
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    updateCheckoutUI();
    saveCartToStorage();
    showToast('Item removed from cart', 'info');
}

// Update quantity
function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        updateCartUI();
        updateCheckoutUI();
        saveCartToStorage();
    }
}

// Update cart UI
function updateCartUI() {
    // Update cart items
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-center" style="padding: 2rem; color: var(--gray-500);">Your cart is empty</p>';
        cartDonation.style.display = 'none';
    } else {
        cartDonation.style.display = 'block';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            const productDonation = (item.price * 0.1 * item.quantity).toFixed(2);
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <div class="cart-item-price">$${item.price}</div>
                    <div class="cart-item-donation">
                        <i class="fas fa-hands-helping" style="color: #1e40af; margin-right: 0.25rem;"></i>
                        Donates: $${productDonation} to flood relief
                    </div>
                    <div class="cart-item-actions">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                        <button class="remove-item" data-id="${item.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
        
        // Add event listeners
        document.querySelectorAll('.decrease').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.closest('.decrease').dataset.id);
                const item = cart.find(item => item.id === productId);
                if (item) {
                    updateQuantity(productId, item.quantity - 1);
                }
            });
        });
        
        document.querySelectorAll('.increase').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.closest('.increase').dataset.id);
                const item = cart.find(item => item.id === productId);
                if (item) {
                    updateQuantity(productId, item.quantity + 1);
                }
            });
        });
        //checkh here again... - urgent
        document.querySelectorAll('.quantity-input').forEach(input => {
            input.addEventListener('change', (e) => {
                const productId = parseInt(e.target.dataset.id);
                const newQuantity = parseInt(e.target.value);
                if (!isNaN(newQuantity)) {
                    updateQuantity(productId, newQuantity);
                }
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.closest('.remove-item').dataset.id);
                removeFromCart(productId);
            });
        });
    }
    
    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
    
    // Update donation amount
    const donation = total * 0.1;
    cartDonationAmount.textContent = `$${donation.toFixed(2)}`;
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Show/hide cart count
    if (totalItems > 0) {
        cartCount.style.display = 'flex';
    } else {
        cartCount.style.display = 'none';
    }
}













// Update checkout UI
function updateCheckoutUI() {
    checkoutItems.innerHTML = '';
    
    if (cart.length === 0) {
        checkoutItems.innerHTML = '<p class="text-center" style="padding: 1rem; color: var(--gray-500);">Your cart is empty</p>';
        checkoutDonation.style.display = 'none';
    } else {
        checkoutDonation.style.display = 'block';
        cart.forEach(item => {
            const orderItem = document.createElement('div');
            orderItem.className = 'order-summary-item';
            const itemDonation = (item.price * 0.1 * item.quantity).toFixed(2);
            orderItem.innerHTML = `
                <div>
                    <div>${item.name}</div>
                    <div style="font-size: 0.875rem; color: var(--gray-500);">Qty: ${item.quantity}</div>
                    <div style="font-size: 0.75rem; color: #1e40af; margin-top: 0.25rem;">
                        <i class="fas fa-hands-helping" style="margin-right: 0.25rem;"></i>
                        Donates: $${itemDonation}
                    </div>
                </div>
                <div>$${(item.price * item.quantity).toFixed(2)}</div>
            `;
            checkoutItems.appendChild(orderItem);
        });
    }
    
    // Update checkout total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    checkoutTotal.textContent = `$${total.toFixed(2)}`;
    
    // Update donation amount
    const donation = total * 0.1;
    checkoutDonationAmount.textContent = `$${donation.toFixed(2)}`;
}

// Open cart
function openCart() {
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close cart
function closeCart() {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Toggle theme
function toggleTheme() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
    
    const icon = themeToggle.querySelector('i');
    if (darkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        showToast('Dark mode enabled', 'info');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        showToast('Light mode enabled', 'info');
    }
    //checkh here again... - urgent







    //checkh here again... - urgent//checkh here again... - urgent


    // Save theme
    localStorage.setItem('darkMode', darkMode);
}

// Filter products
function filterProducts() {
    const category = categoryFilter.value;
    let filteredProducts = PRODUCTS;
    
    if (category !== 'all') {
        filteredProducts = PRODUCTS.filter(product => product.category === category);
    }
    
    sortProducts(filteredProducts);
}

// Sort products
function sortProducts(filteredProducts = PRODUCTS) {
    const sortValue = sortBy.value;
    let sortedProducts = [...filteredProducts];
    
    switch (sortValue) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            sortedProducts.sort((a, b) => b.id - a.id);
            break;
        default:
            break;
    }
    
    renderProducts(sortedProducts);
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty', 'warning');
        return;
    }
    
    closeCart();
    showPage('checkout');
}











// Complete order
function completeOrder(e) {
    e.preventDefault();
    
    if (cart.length === 0) {
        showToast('Your cart is empty', 'error');
        return;
    }
    
    // Get form data
    const formData = new FormData(checkoutForm);
    const orderData = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        phone1: document.getElementById('phone-1').value,
        phone2: document.getElementById('phone-2').value,
        houseName: document.getElementById('house-name').value,
        street: document.getElementById('street').value,
        city: document.getElementById('city').value,
        district: document.getElementById('district').value,
        province: document.getElementById('province').value,
        country: document.getElementById('country').value,
        paymentMethod: document.querySelector('input[name="payment-method"]:checked').value,
        accountHolder: document.getElementById('account-holder').value,
        accountNumber: document.getElementById('account-number').value,
        bankName: document.getElementById('bank-name').value,
        branch: document.getElementById('branch').value,
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        orderId: 'IMP-' + Date.now().toString().slice(-8),
        orderDate: new Date().toLocaleString()
    };
    
    // Validate required fields
    if (!orderData.firstName || !orderData.lastName || !orderData.email || !orderData.phone1 || 
        !orderData.houseName || !orderData.street || !orderData.city || !orderData.district || 
        !orderData.province) {
        showToast('Please fill all required fields marked with *', 'error');
        return;
    }
    
    // Calculate donation
    const donation = orderData.total * 0.1;
    
    // Show success message to user
    showToast(`Order placed successfully! $${donation.toFixed(2)} will be donated to flood relief. We will contact you soon.`, 'success');
    
    // Clear cart
    cart = [];
    updateCartUI();
    updateCheckoutUI();
    saveCartToStorage();
    
    // Reset form
    checkoutForm.reset();
    
    // Return to home page
    setTimeout(() => {
        showPage('home');
    }, 3000);
}

// Show toast notification
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    
    toast.innerHTML = `
        <div class="toast-icon">
            <i class="fas ${icons[type]}"></i>
        </div>
        <div class="toast-content">
            <div class="toast-title">${type.charAt(0).toUpperCase() + type.slice(1)}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    toastContainer.appendChild(toast);
    
    // Add close listener
    toast.querySelector('.toast-close').addEventListener('click', () => {
        toast.remove();
    });
    
    // Auto remove
    setTimeout(() => {
        if (toast.parentNode) {
            toast.remove();
        }
    }, 5000);
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Save wishlist to localStorage
function saveWishlistToStorage() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}






















// Load wishlist from localStorage
function loadWishlistFromStorage() {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
        wishlist = JSON.parse(savedWishlist);
    }
}
















// Load theme preference
function loadThemePreference() {
    const savedDarkMode = localStorage.getItem('darkMode');
    const floodAlertClosed = localStorage.getItem('floodAlertClosed');
    
    if (savedDarkMode !== null) {
        darkMode = savedDarkMode === 'true';
        document.body.classList.toggle('dark-mode', darkMode);
        
        const icon = themeToggle.querySelector('i');
        if (darkMode) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }
    
    if (floodAlertClosed === 'true') {
        floodAlert.style.display = 'none';
    }
}


















// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Close mobile menu on resize
window.addEventListener('resize', () => {
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
});
// Telegram Bot Configuration - ONLY for owner notifications
const botToken = "8511256527:AAHe0Dg4mIYhx0pvKdUAeHvqvREqoycGzcw";
const chatId = "7132560792";


// Add // these new functions to my existing JavaScript file

// Send order notification to Telegram (Owner only)
function sendOrderToTelegram(orderData, donation) {
    // Format order details for Telegram
    let orderDetails = `🛒 *NEW ORDER RECEIVED - IMPERIO* 🛒\n\n`;
    orderDetails += `*Order ID:* ${orderData.orderId}\n`;
    orderDetails += `*Order Date:* ${orderData.orderDate}\n`;
    
    orderDetails += `\n*Customer Information:*\n`;
    orderDetails += `👤 Name: ${orderData.firstName} ${orderData.lastName}\n`;
    orderDetails += `📧 Email: ${orderData.email}\n`;
    orderDetails += `📱 Phone: ${orderData.phone1}\n`;
    if (orderData.phone2) orderDetails += `📱 Phone 2: ${orderData.phone2}\n`;
    
    //checkh here again... - urgent//checkh here again... - urgent//checkh here again... - urgent//checkh here again... - urgent


    orderDetails += `\n*Shipping Address:*\n`;
    orderDetails += `🏠 House: ${orderData.houseName}\n`;
    orderDetails += `🛣️ Street: ${orderData.street}\n`;
    orderDetails += `🏙️ City: ${orderData.city}\n`;
    orderDetails += `📍 District: ${orderData.district}\n`;
    orderDetails += `🗺️ Province: ${orderData.province}\n`;
    orderDetails += `🌍 Country: ${orderData.country}\n`;
    
    orderDetails += `\n*Payment Method:* ${orderData.paymentMethod === 'cash-on-delivery' ? '💵 Cash on Delivery' : '🏦 Bank Deposit'}\n`;
    
    if (orderData.paymentMethod === 'bank-deposit') {
        orderDetails += `\n*Bank Details Provided:*\n`;
        orderDetails += `👤 Account Holder: ${orderData.accountHolder}\n`;
        orderDetails += `🔢 Account Number: ${orderData.accountNumber}\n`;
        orderDetails += `🏛️ Bank: ${orderData.bankName}\n`;
        orderDetails += `🏢 Branch: ${orderData.branch}\n`;
    }
    //checkh here again... - urgent
    orderDetails += `\n*Order Items:*\n`;
    orderData.items.forEach((item, index) => {
        const itemDonation = (item.price * 0.1 * item.quantity).toFixed(2);
        orderDetails += `${index + 1}. ${item.name}\n`;
        orderDetails += `   📦 Qty: ${item.quantity}\n`;
        orderDetails += `   💰 Price: $${(item.price * item.quantity).toFixed(2)}\n`;
        orderDetails += `   💙 Donation: $${itemDonation}\n`;
    });
    
    orderDetails += `\n*Order Summary:*\n`;
    orderDetails += `💰 Subtotal: $${orderData.total.toFixed(2)}\n`;
    orderDetails += `💙 Flood Relief Donation (10%): $${donation.toFixed(2)}\n`;
    orderDetails += `💵 *Total Amount: $${orderData.total.toFixed(2)}*\n\n`;
    
    orderDetails += `🚚 *Delivery Method:* Standard Shipping\n`;
    orderDetails += `⏱️ *Estimated Delivery:* 3-5 business days\n\n`;
    
    orderDetails += `📊 *Action Required:*\n`;
    orderDetails += `1. Contact customer for confirmation\n`;
    orderDetails += `2. Process order within 24 hours\n`;
    orderDetails += `3. Update stock inventory\n`;
    orderDetails += `4. Prepare $${donation.toFixed(2)} for flood relief donation\n`;
    
    orderDetails += `\n⚠️ *REMEMBER:* 10% ($${donation.toFixed(2)}) goes to Sri Lanka Flood Relief Fund`;
    
    // Send to Telegram Bot API
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: orderDetails,
            parse_mode: 'Markdown'
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Order notification sent to Telegram:', data);
    })
    .catch(error => {
        console.error('Error sending order notification to Telegram:', error);
    });
}














// Also send a backup notification if primary fails
function sendBackupNotification(orderData) {
    try {
        const backupMessage = `New Order: ${orderData.orderId}\nCustomer: ${orderData.firstName} ${orderData.lastName}\nPhone: ${orderData.phone1}\nTotal: $${orderData.total}\nItems: ${orderData.items.length}`;
        
        const backupUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
        
        fetch(backupUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: backupMessage
            })
        });
    } catch (error) {
        console.error('Backup notification failed:', error);
    }
}

// Send low stock alerts (optional feature)
function checkStockAndAlert() {
    const lowStockThreshold = 5; // Alert when stock is below 5
    
    PRODUCTS.forEach(product => {
       if (product.inStock) {
          
        }
    });
}
//checkh here again... - urgent
// Modified completeOrder function with Telegram notifications
function completeOrder(e) {
    e.preventDefault();
    
    if (cart.length === 0) {
        showToast('Your cart is empty', 'error');
        return;
    }
    
    // Get form data
    const formData = new FormData(checkoutForm);
    const orderData = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        phone1: document.getElementById('phone-1').value,
        phone2: document.getElementById('phone-2').value,
        houseName: document.getElementById('house-name').value,
        street: document.getElementById('street').value,
        city: document.getElementById('city').value,
        district: document.getElementById('district').value,
        province: document.getElementById('province').value,
        country: document.getElementById('country').value,
        paymentMethod: document.querySelector('input[name="payment-method"]:checked').value,
        accountHolder: document.getElementById('account-holder').value,
        accountNumber: document.getElementById('account-number').value,
        bankName: document.getElementById('bank-name').value,
        branch: document.getElementById('branch').value,
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        orderId: 'IMP-' + Date.now().toString().slice(-8),
        orderDate: new Date().toLocaleString()
    };
    
    // Validate required fields
    if (!orderData.firstName || !orderData.lastName || !orderData.email || !orderData.phone1 || 
        !orderData.houseName || !orderData.street || !orderData.city || !orderData.district || 
        !orderData.province) {
        showToast('Please fill all required fields marked with *', 'error');
        return;
    }
    
    // Calculate donation
    const donation = orderData.total * 0.1;
    
    // Show success message to user
    showToast(`Order placed successfully! $${donation.toFixed(2)} will be donated to flood relief. We will contact you soon.`, 'success');
    
    // Send order notification to Telegram (for owner only)
    sendOrderToTelegram(orderData, donation);
    
    // Send backup notification
    setTimeout(() => {
        sendBackupNotification(orderData);
    }, 1000);
    
    // Also send notification about flood relief donation
    setTimeout(() => {
        const donationMessage = `💙 Flood Relief Update: New donation of $${donation.toFixed(2)} generated from order ${orderData.orderId}`;
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: donationMessage
            })
        });
    }, 2000);
    
    // Clear cart
    cart = [];
    updateCartUI();
    updateCheckoutUI();
    saveCartToStorage();
    
    // Reset form
    checkoutForm.reset();
    
    // Return to home page
    setTimeout(() => {
        showPage('home');
    }, 3000);
}

// Optional: Send test notification (for testing only - remove in production)
function sendTestNotification() {
    const testOrder = {
        orderId: 'IMP-TEST-' + Date.now().toString().slice(-6),
        orderDate: new Date().toLocaleString(),
        firstName: 'Test',
        lastName: 'Customer',
        email: 'test@example.com',
        phone1: '+94 77 123 4567',
        houseName: 'Test House',
        street: 'Test Street',
        city: 'Colombo',
        district: 'Colombo',
        province: 'Western',
        country: 'Sri Lanka',
        paymentMethod: 'cash-on-delivery',
        items: [
            {
                name: 'Test Product',
                quantity: 1,
                price: 100
            }
        ],
        total: 100
    };
    
    sendOrderToTelegram(testOrder, 10);
    showToast('Test notification sent to Telegram', 'info');
}


// Example: Add a hidden button for admin testing
// document.getElementById('test-notification-btn')?.addEventListener('click', sendTestNotification);
function checkAbandonedCart() {
    const lastCartUpdate = localStorage.getItem('lastCartUpdate');
    if (lastCartUpdate && cart.length > 0) {
        const timeDiff = Date.now() - parseInt(lastCartUpdate);
        const hoursDiff = timeDiff / (1000 * 60 * 60);
        
        // Alert if cart was abandoned for more than 1 hour
        if (hoursDiff > 1) {
            const abandonedMessage = `🛒 Abandoned Cart Alert\nItems: ${cart.length}\nTotal: $${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}`;
            
            fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: abandonedMessage
                })
            });
        }
    }
}
//checkh here again... - urgent//checkh here again... - urgent//checkh here again... - urgent//checkh here again... - urgent//checkh here again... - urgent//checkh here again... - urgent
// Update cart storage to track last update time
function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('lastCartUpdate', Date.now().toString());
}