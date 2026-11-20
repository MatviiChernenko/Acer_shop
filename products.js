import { Product } from "./product.js"
import { Cart } from "./cart.js"

document.addEventListener("DOMContentLoaded", () => {
    const products = [
        // Товари з головної сторінки
        new Product(1, "images/acer_nitro_5.webp", "Acer Nitro 5", "Ігровий ноутбук, 15.6\", RTX 4050", 42000),
        new Product(2, "images/acer_predator_helios.jpg", "Acer Predator Helios", "Ігровий ноутбук, 16\", RTX 4070", 78000),
        new Product(3, "images/acer_aspire_3.webp", "Acer Aspire 3", "Ноутбук для навчання та роботи", 18000),
        new Product(4, "images/acer_swift_go.jpg", "Acer Swift Go", "Легкий ультрабук, OLED-екран", 35000),
        new Product(5, "images/acer_nitro_27.jpg", "Acer Nitro 27", "Ігровий монітор, 165 Гц", 12000),
        new Product(6, "images/acer_predator_mouse.jpg", "Acer Predator Mouse", "Ігрова миша, 16000 DPI", 1800),

        // Додаткові товари для окремої сторінки
        new Product(7, "images/Acer_Predator_Helios_Neo_16.webp", "Acer Predator Helios Neo 16", "Ігровий ноутбук, 16\", 240 Гц, RTX 5070", 86000),
        new Product(8, "images/Acer_Aspire_5.webp", "Acer Aspire 5", "Універсальний ноутбук, 15.6\", 16 ГБ ОЗП", 24500),
        new Product(9, "images/Acer_Predator_XB273U.jpg", "Acer Predator XB273U", "Кіберспортивний монітор, 27\", WQHD, 240 Гц", 19500),
        new Product(10, "images/Acer_Predator_Aethon_300.jpg", "Acer Predator Aethon 300", "Механічна ігрова клавіатура, RGB-підсвітка", 3200),
        new Product(11, "images/Acer_Nitro_Headset.webp", "Acer Nitro Headset", "Ігрова гарнітура з об'ємним звуком та мікрофоном", 2100),
        new Product(12, "images/Acer_Predator_Rolltop_Backpack.jpg", "Acer Predator Rolltop Backpack", "Ігровий рюкзак для ноутбука до 17 дюймів", 2600),
    ]

    const cart = new Cart()
    const productsContainer = document.getElementById("products-container")
    const searchInput = document.getElementById("search-input")
    const sortSelect = document.getElementById("sort-select")

    let toastTimeout

    function showCartToast(title) {
        const toast = document.getElementById("cart-toast")
        if (!toast) return

        toast.textContent = `Додано до кошика: ${title}`
        toast.classList.add("show")

        clearTimeout(toastTimeout)
        toastTimeout = setTimeout(() => {
            toast.classList.remove("show")
        }, 2000)
    }

    function renderProducts() {
        if (!productsContainer) return

        const query = searchInput ? searchInput.value.trim().toLowerCase() : ""
        let list = products.filter(p => p.title.toLowerCase().includes(query))

        const sortValue = sortSelect ? sortSelect.value : "default"
        switch (sortValue) {
            case "price-asc":
                list.sort((a, b) => a.price - b.price)
                break
            case "price-desc":
                list.sort((a, b) => b.price - a.price)
                break
        }

        if (list.length === 0) {
            productsContainer.innerHTML = `<p class="text-center text-muted py-4">Нічого не знайдено</p>`
            return
        }

        productsContainer.innerHTML = list.map(p => p.toHtml()).join("")
    }

    renderProducts()

    if (searchInput) searchInput.addEventListener("input", renderProducts)
    if (sortSelect) sortSelect.addEventListener("change", renderProducts)

    if (productsContainer) {
        productsContainer.addEventListener("click", (event) => {
            const btn = event.target.closest(".buy_btn")
            if (!btn) return

            const productId = parseInt(btn.getAttribute("data-id"), 10)
            const productToAdd = products.find(p => p.id === productId)

            if (productToAdd) {
                cart.add(productToAdd)
                showCartToast(productToAdd.title)
            }
        })
    }

    const mobileMenuEl = document.getElementById("mobileMenu")
    if (mobileMenuEl) {
        mobileMenuEl.addEventListener("click", (event) => {
            const link = event.target.closest("a")
            if (!link) return

            const offcanvasInstance = bootstrap.Offcanvas.getOrCreateInstance(mobileMenuEl)
            if (offcanvasInstance) {
                offcanvasInstance.hide()
            }
        })
    }
})