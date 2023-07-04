"use strict";
class Form {
    constructor(name) {
        this.name = name;
    }
}
class SaveForm {
    save(form) {
        const res = this.fill(form);
        this.log(res);
        this.send(res);
    }
    log(data) {
        console.log(data);
    }
}
class FirstAPI extends SaveForm {
    fill(form) {
        return form.name;
    }
    send(data) {
        console.log("send" + data);
    }
}
class SecondAPI extends SaveForm {
    fill(form) {
        return { fio: form.name };
    }
    send(data) {
        console.log("send" + data);
    }
}
const form1 = new FirstAPI();
form1.save(new Form("First"));
const form2 = new SecondAPI();
form1.save(new Form("Second"));
