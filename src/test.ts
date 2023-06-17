/*Необходимо сделать корзину (Cart) на сайте,
которая имееет список продуктов (Product), добавленных в корзину
и переметры доставки (Delivery). Для Cart реализовать методы:
- Добавить продукт в корзину
- Удалить продукт из корзины по ID
- Посчитать стоимость товаров в корзине
- Задать доставку
- Checkout - вернуть что всё ок, если есть продукты и параметры доставки
Product: id, название и цена
Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)*/

class Product{
    id:number;
    name:string;
    price:number;
    constructor(id:number,name:string, price:number){
        this.id=id;
        this.name= name;
        this.price=price;
    }

}
type DeliveryOption= HomeDelivery|ShopDelivery;

class Delivery{
date:Date;
constructor( date:Date){
       this.date=date;
}
}

class HomeDelivery extends Delivery{
constructor(date:Date, public address:string){
super(date);
}
}

class ShopDelivery extends Delivery{
    constructor(public shopId:number){
    super(new Date());
    
    }
}

class Cart {
    private products:Product[]=[];
    private delivery:DeliveryOption;
    
    public addProduct(product:Product):void{
     this.products.push(product);
    }

    public deleteProduct(productId:number):void{
   this.products = this.products.filter((p:Product)=>p.id!==productId)
    }

    public calculatePrice():number{
    return this.products.map((p:Product)=>p.price).reduce((p1:number,p2:number)=> p1 + p2);
    }
    public setDelivery(delivery:DeliveryOption):void{
    this.delivery=delivery;
    }
    public  isCheckout(){
    if(this.products.length==0){
    throw Error("Список продуктов пуст");
   }
    else if(!this.delivery){
    throw Error("Не указан способ доставки");
   }
   return {success:true};
    }

}

const cart= new Cart();
cart.addProduct(new Product(1, "Печенье",10 ));
cart.addProduct(new Product(2, "Торт",50 ));
cart.addProduct(new Product(3, "Напиток",5 ));

cart.deleteProduct(2);
cart.setDelivery(new ShopDelivery(8));
console.log(cart.calculatePrice());

console.log(cart);
