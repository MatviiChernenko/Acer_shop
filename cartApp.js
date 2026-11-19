import { Cart } from './cart.js'

document.addEventListener("DOMContentLoaded", () => {
    const cart = new Cart()
    cart.render()

    const cartContainer = document.getElementById("cart-list")
    if (!cartContainer) return

    cartContainer.addEventListener("click", (event) => {
        const btn = event.target.closest("button")
        if (!btn) return
        const id = parseInt(btn.dataset.id)

        if (btn.classList.contains("remove-btn")) cart.remove(id)
        if (btn.classList.contains("quantity-plus")) cart.changeQuantity(id, 1)
        if (btn.classList.contains("quantity-minus")) cart.changeQuantity(id, -1)
    })
})