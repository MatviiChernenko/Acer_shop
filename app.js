import { Product } from "./product.js"
import { Cart } from "./cart.js"

document.addEventListener('DOMContentLoaded',() => {

    const products = [
        new Product(1,"https://placehold.co/150","Товар 1", "Опис товару 1", 25000),
        new Product(2,"https://placehold.co/150","Товар 2", "Опис товару 2", 15000),
        new Product(3,"https://placehold.co/150","Товар 3", "Опис товару 3", 10000),
    ]

    const cart = new Cart()
    const productsContainer = document.getElementById("products-container")

    products.forEach(p =>{
        productsContainer.innerHTML += p.toHtml()
    })

    cart.render()

    productsContainer('click', (event) => {
        if (event.targert.classList.contains("buy_btn")){
            const productId = parseInt(event.targert.getrAttribute("data-id"))
            const productToAdd = products.find(p => p.id === productId)

            if (productToAdd) cart.add(productToAdd)
        }
    })

})