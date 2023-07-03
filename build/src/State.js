"use strict";
class DocumentItem {
    constructor() {
        this.setState(new DraftDocumetItemState());
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
        this.state.setContext(this);
    }
    publishDoc() {
        this.state.publish();
    }
    deleteDoc() {
        this.state.delete();
    }
}
class DocumentState {
    setContext(item) {
        this.item = item;
    }
}
class DraftDocumetItemState extends DocumentState {
    constructor() {
        super();
        this.name = "DraftDocumetItemState";
    }
    publish() {
        console.log("опубликован");
        this.item.setState(new PublishDocumetItemState());
    }
    delete() {
        console.log("Документ удалён");
    }
}
class PublishDocumetItemState extends DocumentState {
    constructor() {
        super();
        this.name = "PublishDocumetItemState";
    }
    publish() {
        console.log("нельзя повторно опубликовать");
    }
    delete() {
        console.log("снято с публикации");
        this.item.setState(new DraftDocumetItemState());
    }
}
const doc = new DocumentItem;
doc.text = "Post";
console.log(doc.getState());
doc.publishDoc();
console.log(doc.getState());
doc.publishDoc();
console.log(doc.getState());
doc.deleteDoc();
console.log(doc.getState());
