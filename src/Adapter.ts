class KVDatabase {
  private db: Map<string, string> = new Map();
  save(key: string, value: string) {
    this.db.set(key, value);
  }
}
class PersistentDB {
  savePersistent(obj: Object) {
    console.log(obj);
  }
}

class PersistentDBAdapter extends KVDatabase {
  constructor(public database: PersistentDB) {
    super();
  }
  override save(key: string, value: string): void {
    this.database.savePersistent({ key, value });
  }
}

function run(base: KVDatabase) {
  base.save("zero", "vialon");
}

run(new PersistentDBAdapter(new PersistentDB()));
