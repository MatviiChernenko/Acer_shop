export class Cart{
    constructor(){
        this.items = [];
    }

    add(product){
            const existingItem = this.items.find(item => item.product.id === product.id);
            if (existingItem){
                existingItem.quantity += 1;         
            }else{
                this.items.push({product, quantity: 1});
            }
            this.render();
     }

    getTotal(){
            return this.items.reduce((sum, item) => sum +(item.product.price * item.quantity),0);
    }

    render() {
            const cartContainer = document.getElementById("cart-list")
            const cartTotal = document.getElementById("cart-total-value")

            cartContainer.innerHTML = ''
            if (this.items.length === 0) {
                cartContainer.innerHTML += `<p>Кошик порожній!</p>`
            } else {
                this.items.forEach(item => {
                    cartContainer.innerHTML += `
                    <div class="product">
                        <div class="product-img">
                            <img src="${item.product.img}" alt="">
                        </div>
                        <div class="product-title">
                            <h3>${item.product.title}</h3>
                        </div>
                        <div class="quantity-control">
                            <button class="quantity-minus">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-plus">+</button>
                        </div>
                        
                        <div class="product-price">
                            <span>${item.quantity * item.product.price}₴</span>
                        </div>
                        <div class="remove">
                            <button class="remove-btn">X</button>
                        </div>
                    </div>
                    `
                })
            }
    }
}
