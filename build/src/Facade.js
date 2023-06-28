"use strict";
class Notify {
    send(template, to) {
        console.log(`Отправлен  ${template}:${to}`);
    }
}
class Log {
    log(message) {
        console.log(message);
    }
}
class Template {
    constructor() {
        this.templates = [
            {
                name: "other",
                template: "<h1>Шаблон</h1>",
            },
        ];
    }
    getByName(name) {
        return this.templates.find((t) => t.name === name);
    }
}
class NotificationFacade {
    constructor() {
        this.notify = new Notify();
        this.logger = new Log();
        this.template = new Template();
    }
    send(to, templateName) {
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
