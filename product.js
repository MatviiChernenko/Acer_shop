export class Product {
    constructor(id, img, title, desc, price) {
        this.id = id;
        this.img = img;
        this.title = title;
        this.desc = desc;
        this.price = price;
    }

    toHtml() {
        return `
        <div class="col-12 col-sm-6 col-lg-4">
            <div class="product-card h-100">
                <img src="${this.img}" alt="${this.title}">
                <h2>${this.title}</h2>
                <p class="desc">${this.desc}</p>
                <div class="card-control">
                    <span class="price">${this.price} ₴</span>
                    <button class="buy_btn" data-id="${this.id}">Придбати</button>
                </div>
            </div>
        </div>`;
    }
}