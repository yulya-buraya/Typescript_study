class Notify {
  send(template: string, to: string) {
    console.log(`Отправлен  ${template}:${to}`);
  }
}

class Log {
  log(message: string) {
    console.log(message);
  }
}

class Template {
  private templates = [
    {
      name: "other",
      template: "<h1>Шаблон</h1>",
    },
  ];

  getByName(name: string) {
    return this.templates.find((t) => t.name === name);
  }
}

class NotificationFacade {
  private notify: Notify;
  private logger: Log;
  private template: Template;
  constructor() {
    this.notify = new Notify();
    this.logger = new Log();
    this.template = new Template();
  }
  send(to: string, templateName: string) {
    const data = this.template.getByName(templateName);
    if (!data) {
      this.logger.log("Не найден шаблон!");
      return;
    }
    this.notify.send(data.template, to);
    this.logger.log("Шаблон отправлен");
  }
}

const s = new NotificationFacade();
s.send("ajskdjk@fdfd.re", "other");
