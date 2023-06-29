"use strict";
class PaymentApi {
    constructor() {
        this.data = [{ id: 1, sum: 10000 }];
    }
    getPaymentDetail(id) {
        return this.data.find(d => d.id == id);
    }
}
class PaymentAccessProxy {
    constructor(api, userId) {
        this.api = api;
        this.userId = userId;
    }
    getPaymentDetail(id) {
        if (this.userId === 1) {
            return this.api.getPaymentDetail(id);
        }
        console.log("Попытка получить данные пользователям с id = " + this.userId);
        return undefined;
    }
}
const proxy = new PaymentAccessProxy(new PaymentApi(), 1);
console.log(proxy.getPaymentDetail(1));
const proxy2 = new PaymentAccessProxy(new PaymentApi(), 21);
console.log(proxy2.getPaymentDetail(1));
