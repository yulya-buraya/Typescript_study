"use strict";
class KVDatabase {
    constructor() {
        this.db = new Map();
    }
    save(key, value) {
        this.db.set(key, value);
    }
}
class PersistentDB {
    savePersistent(obj) {
        console.log(obj);
    }
}
class PersistentDBAdapter extends KVDatabase {
    constructor(database) {
        super();
        this.database = database;
    }
    save(key, value) {
        this.database.savePersistent({ key, value });
    }
}
function run(base) {
    base.save("zero", "vialon");
}
run(new PersistentDBAdapter(new PersistentDB));
