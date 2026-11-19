export class Cart {
    constructor() {
        const saveCart = localStorage.getItem("shoping_cart");
        this.items = saveCart ? JSON.parse(saveCart) : [];
    }

    add(product) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({ product, quantity: 1 });
        }
        this.save();
        this.render();
    }

    remove(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
        this.save();
        this.render();
    }

    clear() {
        this.items = [];
        this.save();
        this.render();
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    }

    getTotalCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    formatPrice(value) {
        return `${value.toLocaleString("uk-UA")} ₴`;
    }

    changeQuantity(productId, delta) {
        const item = this.items.find(i => i.product.id === productId);
        if (!item) return;
        item.quantity += delta;
        if (item.quantity <= 0) return this.remove(productId);
        this.save();
        this.render();
    }

    render() {
        const cartContainer = document.getElementById("cart-list");
        const cartTotal = document.getElementById("cart-total-value");
        const cartSummary = document.getElementById("cart-summary");
        const cartCount = document.getElementById("cart-items-count");
        const clearBtn = document.getElementById("clear-cart-btn");

        if (!cartContainer) return;

        if (this.items.length === 0) {
            cartContainer.innerHTML = `
                <div class="text-center py-5 border rounded-3 bg-light">
                    <p class="fs-5 text-muted mb-3">Кошик порожній!</p>
                    <a href="index.html#catalog" class="btn btn-gradient text-white fw-semibold px-4 py-2 rounded-2">
                        Перейти до каталогу
                    </a>
                </div>`;
            if (cartSummary) cartSummary.classList.add("d-none");
            if (clearBtn) clearBtn.classList.add("d-none");
            if (cartTotal) cartTotal.innerHTML = "";
            return;
        }

        if (cartSummary) cartSummary.classList.remove("d-none");
        if (clearBtn) clearBtn.classList.remove("d-none");

        cartContainer.innerHTML = this.items.map(item => `
            <div class="cart-item">
                <img class="cart-item-img" src="${item.product.img}" alt="${item.product.title}">
                <div>
                    <h3 class="cart-item-title">${item.product.title}</h3>
                    <p class="cart-item-desc">${item.product.desc || ""}</p>
                </div>
                <div class="quantity-control">
                    <button type="button" class="quantity-btn quantity-minus" data-id="${item.product.id}">-</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button type="button" class="quantity-btn quantity-plus" data-id="${item.product.id}">+</button>
                </div>
                <div class="cart-item-price">${this.formatPrice(item.quantity * item.product.price)}</div>
                <button type="button" class="remove-btn" data-id="${item.product.id}" title="Видалити">✕</button>
            </div>
        `).join("");

        if (cartCount) cartCount.textContent = `${this.getTotalCount()} шт.`;
        if (cartTotal) cartTotal.innerHTML = `До сплати: <span class="text-success">${this.formatPrice(this.getTotal())}</span>`;
    }

    save() {
        localStorage.setItem("shoping_cart", JSON.stringify(this.items));
    }
}
