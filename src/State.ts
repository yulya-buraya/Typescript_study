class DocumentItem {
  public text: string;
  private state: DocumentState;
  constructor() {
    this.setState( new DraftDocumetItemState());
  }
  getState() {
    return this.state;
  }
  setState(state: DocumentState) {
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

abstract class DocumentState {
  public name: string;
  public item: DocumentItem;

  public setContext(item: DocumentItem) {
    this.item = item;
  }
  public abstract publish(): void;
  public abstract delete(): void;
}

class DraftDocumetItemState extends DocumentState {
  constructor() {
    super();
    this.name = "DraftDocumetItemState";
  }
  public publish(): void {
    console.log("опубликован");
    this.item.setState(new PublishDocumetItemState());
  }
  public delete(): void {
    console.log("Документ удалён");
  }
}

class PublishDocumetItemState extends DocumentState {
  constructor() {
    super();
    this.name = "PublishDocumetItemState";
  }
  public publish(): void {
    console.log("нельзя повторно опубликовать");
  }
  public delete(): void {
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
