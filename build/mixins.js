"use strict";
class List {
    constructor(items) {
        this.items = items;
    }
}
class Accordion {
}
class ExtendedListClass extends List {
    first() {
        return this.items[0];
    }
}
//mixins
function ExtendList(Base) {
    return class ExtendList extends Base {
        first() {
            return this.items[0];
        }
    };
}
const list = ExtendList(List);
const res = new list(["first", "second"]);
console.log(res.first);
