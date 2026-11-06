export class Product{
        constructor(id, img_path, price, title, desc){
            this.img_path = img_path;
            this.price = price;
            this.title = title;
            this.desc = desc;
        }

        toHtml() {
            return `
            <div class="product-card">
                <img src="${this.img}" alt="">
                <h2>${this.title}</h2>
                <p><b>Опис:</b> ${this.desc}</p>
                <div class="card-control">
                    <span>${this.price}₴</span>
                    <button class="buy_btn">Придбати</button>
                </div>
            </div>`
        }

    }