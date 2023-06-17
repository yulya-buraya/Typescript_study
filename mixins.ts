type Constructor = new (...args: any[]) => {};
type TConstructor<T = {}> = new (...args: any[]) => T;

class List {
  constructor(public items: string[]) {}
}
class Accordion {
  isOpened: boolean;
}
type ListType = TConstructor<List>;
type AccordionType = TConstructor<Accordion>;

class ExtendedListClass extends List {
  first() {
    return this.items[0];
  }
}
//mixins
function ExtendList<TBase extends ListType>(Base: TBase) {
  return class ExtendList extends Base {
    first() {
      return this.items[0];
    }
  };
}

const list = ExtendList(List);
const res = new list(["first", "second"]);
console.log(res.first);
