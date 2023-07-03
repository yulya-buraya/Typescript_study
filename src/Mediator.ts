interface IMediator {
  notify(sender: string, event: string): void;
}

abstract class Mediated {
  mediator: IMediator;
  setMediator(mediator: IMediator) {
    this.mediator = mediator;
  }
}

class Notifications {
  send() {
    console.log("Отправляю уведомление");
  }
}

class Logger {
  log(message: string) {
    console.log(message);
  }
}
class EventHadler extends Mediated {
  myEvent() {
    this.mediator.notify("EventHadler", "myEvent");
  }
}

class NotificationMediator implements IMediator {
  constructor(
    public notification: Notifications,
    public logger: Logger,
    public event: EventHadler
  ) {}
  notify(sender: string, event: string): void {
    switch (event) {
      case "myEvent":
        this.notification.send();
        this.logger.log("Отправлено");
        break;
    }
  }
}
const handler =new EventHadler();
const logger = new Logger();
const notification= new Notifications();
const mediator = new NotificationMediator(notification, logger,handler);

handler.setMediator(mediator);
handler.myEvent();
