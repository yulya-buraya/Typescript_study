interface Prototype<T>{
    clone():T;
}

class UserHistory implements Prototype<UserHistory>{
    createdAt:Date;
    constructor(public email: string, public name: string){
        this.createdAt = new Date();
    }

    clone():UserHistory{
        let target = new UserHistory(this.email, this.name);
        target.createdAt = this.createdAt; 
        return target;
    }
}
let profile1 = new UserHistory("vica@gff.br" , "Vika");
console.log(profile1);
let profle2 = profile1.clone();
console.log(profle2);
