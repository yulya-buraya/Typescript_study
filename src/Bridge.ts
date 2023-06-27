interface IProvider {
  sendMessage(message: string): void;
  connect(config: string): void;
  disconnect(): void;
}

class TelegramProvider implements IProvider {
  sendMessage(message: string): void {
    console.log(message);
  }
  connect(config: string): void {
    console.log(config);
  }
  disconnect(): void {
    console.log("disconnected");
  }
}

class ViberProvider implements IProvider {
  sendMessage(message: string): void {
    console.log(message);
  }
  connect(config: string): void {
    console.log(config);
  }
  disconnect(): void {
    console.log("disconnected Viber");
  }
}

class NotificationSender{
    constructor(private provider: IProvider){}

    send(){
        this.provider.connect("connect");
        this.provider.sendMessage('message');
        this.provider.disconnect();
    }
}

class DelayNotificationSender extends NotificationSender{
    constructor(provider: IProvider){
    super(provider)
    }
    sendDelay(){}
}

const sender = new NotificationSender(new TelegramProvider());
sender.send();

const sender2 = new NotificationSender(new ViberProvider());
sender2.send();