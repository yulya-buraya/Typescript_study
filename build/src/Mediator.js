"use strict";
class Mediated {
    setMediator(mediator) {
        this.mediator = mediator;
    }
}
class Notifications {
    send() {
        console.log("Отправляю уведомление");
    }
}
class Logger {
    log(message) {
        console.log(message);
    }
}
class EventHadler extends Mediated {
    myEvent() {
        this.mediator.notify("EventHadler", "myEvent");
    }
}
class NotificationMediator {
    constructor(notification, logger, event) {
        this.notification = notification;
        this.logger = logger;
        this.event = event;
    }
    notify(sender, event) {
        switch (event) {
            case "myEvent":
                this.notification.send();
                this.logger.log("Отправлено");
                break;
        }
    }
}
const handler = new EventHadler();
const logger = new Logger();
const notification = new Notifications();
const mediator = new NotificationMediator(notification, logger, handler);
handler.setMediator(mediator);
handler.myEvent();
