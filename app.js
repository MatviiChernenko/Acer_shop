import { Product } from "./product.js"
import { Cart } from "./cart.js"

document.addEventListener('DOMContentLoaded', () => {

    const products = [
        new Product(1, "images/acer_nitro_5.webp", "Acer Nitro 5", "Ігровий ноутбук, 15.6\", RTX 4050", 42000),
        new Product(2, "images/acer_predator_helios.jpg", "Acer Predator Helios", "Ігровий ноутбук, 16\", RTX 4070", 78000),
        new Product(3, "images/acer_aspire_3.webp", "Acer Aspire 3", "Ноутбук для навчання та роботи", 18000),
        new Product(4, "images/acer_swift_go.jpg", "Acer Swift Go", "Легкий ультрабук, OLED-екран", 35000),
        new Product(5, "images/acer_nitro_27.jpg", "Acer Nitro 27", "Ігровий монітор, 165 Гц", 12000),
        new Product(6, "images/acer_predator_mouse.jpg", "Acer Predator Mouse", "Ігрова миша, 16000 DPI", 1800),
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
        const query = searchInput.value.trim().toLowerCase()

        let list = products.filter(p => p.title.toLowerCase().includes(query))

        switch (sortSelect.value) {
            case "price-asc":
                list.sort((a, b) => a.price - b.price)
                break
            case "price-desc":
                list.sort((a, b) => b.price - a.price)
                break
        }

        if (list.length === 0) {
            productsContainer.innerHTML = `<p class="text-center text-muted">Нічого не знайдено</p>`
            return
        }

        productsContainer.innerHTML = list.map(p => p.toHtml()).join('')
    }

    renderProducts()
    cart.render()

    searchInput.addEventListener('input', renderProducts)
    sortSelect.addEventListener('change', renderProducts)

    productsContainer.addEventListener('click', (event) => {
        const btn = event.target.closest('.buy_btn')
        if (!btn) return

        const productId = parseInt(btn.getAttribute("data-id"), 10)
        const productToAdd = products.find(p => p.id === productId)

        if (productToAdd) {
            cart.add(productToAdd)
            showCartToast(productToAdd.title)
        }
    })

    const mobileMenuEl = document.getElementById("mobileMenu")
    if (mobileMenuEl) {
        let targetSelector = null

        mobileMenuEl.addEventListener("click", (event) => {
            const link = event.target.closest("a")
            if (!link) return

            const href = link.getAttribute("href")
            if (href && href.startsWith("#") && href.length > 1) {
                event.preventDefault()
                targetSelector = href

                const offcanvasInstance = bootstrap.Offcanvas.getOrCreateInstance(mobileMenuEl)
                offcanvasInstance.hide()
            }
        })

        mobileMenuEl.addEventListener("hidden.bs.offcanvas", () => {
            if (!targetSelector) return
            const targetEl = document.querySelector(targetSelector)
            targetSelector = null

            if (targetEl) {
                targetEl.scrollIntoView({ behavior: "auto" })
            }
        })
    }

    const supportForm = document.getElementById("support-form")
    const supportSuccess = document.getElementById("support-success")

    if (supportForm) {
        supportForm.addEventListener("submit", (event) => {
            event.preventDefault()
            supportForm.reset()
            if (supportSuccess) supportSuccess.classList.remove("d-none")
        })
    }
})
