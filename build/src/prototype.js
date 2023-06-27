"use strict";
class UserHistory {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.createdAt = new Date();
    }
    clone() {
        let target = new UserHistory(this.email, this.name);
        target.createdAt = this.createdAt;
        return target;
    }
}
let profile1 = new UserHistory("vica@gff.br", "Vika");
console.log(profile1);
let profle2 = profile1.clone();
console.log(profle2);
