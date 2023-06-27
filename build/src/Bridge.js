"use strict";
class TelegramProvider {
    sendMessage(message) {
        console.log(message);
    }
    connect(config) {
        console.log(config);
    }
    disconnect() {
        console.log("disconnected");
    }
}
class ViberProvider {
    sendMessage(message) {
        console.log(message);
    }
    connect(config) {
        console.log(config);
    }
    disconnect() {
        console.log("disconnected Viber");
    }
}
class NotificationSender {
    constructor(provider) {
        this.provider = provider;
    }
    send() {
        this.provider.connect("connect");
        this.provider.sendMessage('message');
        this.provider.disconnect();
    }
}
class DelayNotificationSender extends NotificationSender {
    constructor(provider) {
        super(provider);
    }
    sendDelay() { }
}
const sender = new NotificationSender(new TelegramProvider());
sender.send();
const sender2 = new NotificationSender(new ViberProvider());
sender2.send();
