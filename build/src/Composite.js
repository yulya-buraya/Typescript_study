"use strict";
class DeliveryItem {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getItemPrice() {
        return this.items.reduce((acc, item) => (acc += item.getPrice()), 0);
    }
}
class DeliveryShop extends DeliveryItem {
    constructor(deliveryFee) {
        super();
        this.deliveryFee = deliveryFee;
    }
    getPrice() {
        return this.getItemPrice() + this.deliveryFee;
    }
}
class Package extends DeliveryItem {
    getPrice() {
        return this.getItemPrice();
    }
}
class Item extends DeliveryItem {
    constructor(price) {
        super();
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
const shop = new DeliveryShop(100);
shop.addItem(new Item(23599));
const pack1 = new Package();
pack1.addItem(new Item(200));
shop.addItem(pack1);
const pack2 = new Package();
shop.addItem(pack2);
pack1.addItem(new Item(50));
console.log(shop.getPrice());
