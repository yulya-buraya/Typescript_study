abstract class DeliveryItem {
  items: DeliveryItem[]=[];
  addItem(item: DeliveryItem) {
    this.items.push(item);
  }
  getItemPrice(): number {
    return this.items.reduce(
      (acc: number, item: DeliveryItem) => (acc += item.getPrice()),
      0
    );
  }
  abstract getPrice(): number;
}

class DeliveryShop extends DeliveryItem {
  constructor(private deliveryFee: number) {
    super();
  }
  getPrice(): number {
    return this.getItemPrice() + this.deliveryFee;
  }
}

class Package extends DeliveryItem {
  getPrice(): number {
    return this.getItemPrice();
  }
}

class Item extends DeliveryItem {
  constructor(private price: number) {
    super();
  }
  getPrice(): number {
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

console.log(shop.getPrice())

