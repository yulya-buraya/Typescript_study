"use strict";
class Lead {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}
class NewLead {
    constructor() {
        this.observers = [];
    }
    attach(observer) {
        if (this.observers.includes(observer)) {
            return;
        }
        this.observers.push(observer);
    }
    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex == 1) {
            return;
        }
        this.observers.splice(observerIndex, 1);
    }
    notify() {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}
class NotificationService {
    update(subject) {
        console.log("NotificationService получил уведомление");
        console.log(subject);
    }
}
class LeadService {
    update(subject) {
        console.log("LeadService получил уведомление");
        console.log(subject);
    }
}
const subject1 = new NewLead();
subject1.state = new Lead("sacha", "+375257699055");
const observer1 = new NotificationService();
const observer2 = new LeadService();
subject1.attach(observer1);
subject1.attach(observer2);
subject1.notify();
subject1.detach(observer1);
subject1.notify();
