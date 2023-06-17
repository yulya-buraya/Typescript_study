//partial - делает все свойства необязательными 
//Requured - делает все свойства обязательными
//Readonly- делает все свойства доступные только для чтеня.
// Эти дженерики можно комбинировать 

interface IAdress{
    city: string;
    street:string;
    house: number;
}

type partial = Partial<IAdress>;
const p: partial ={};

type required = Required<IAdress>;
type readonly = Readonly<IAdress>;
type readonlyAndRequired= Readonly<Required<IAdress>>;

//Pick - позволяет взять из нтерфейса или типа только необходимые ключи(свойства)
//Omit - позволяет взять интерфейс или тип и исключить из него ненужные нам ключи
//Extract -вытаскивание из юнион типа только соотвествующие условию данные
//Exclude - исключаем типы их юнион типа, которые соответствуют условию  

interface PaymentPersistent {
id: number;
sum:number;
from:string;
to:string;
}

type Payment = Omit<PaymentPersistent, 'id'>;
type PaymentRequisits = Pick<PaymentPersistent, "from" |"to">
type ExcludeEx = Exclude<Payment|"pay"|"say", string>;
type ExctractEx = Extract<Payment|"pay"|"say", string>;

//ReturnType - позволяет получить тип, который возврщает функция
//Parameters - позволяет вытащить параметры функции
//ConstructorParameters - позыоляет получить параметры конструктора 
//если в returnType мы пеедаем тип с дженериком, то будет unknown

class Developer{
constructor(public id:number, public name:string){}
}

function getData(id:number): Developer{
return new Developer(id, "Dasha");
}

type RT = ReturnType<typeof getData>;
type RT2 = ReturnType<()=>void>;
type RT3 = ReturnType<<T>()=>T>;
type RT4 = ReturnType<<T extends number>()=>T>;
type PT = Parameters<typeof getData>;
type first = PT[0];
type CP = ConstructorParameters<typeof Developer>;
type IT = InstanceType<typeof Developer>;

//Awaited - позволяет вернуть тип, который передает промис
//Если у нас цепочка промисов, то возврщает финальный тип
type A= Awaited<Promise<string>>;
type A1= Awaited<Promise<Promise<string>>>;

interface IMenu{
name: string;
url:string;
}

async function getMenu():Promise<IMenu[]>{
    return[{name:"Analitic",url:"analitics" }];
}

type R =Awaited<ReturnType<typeof getMenu>>;

async function getArray<T>(x:T): Promise<Awaited<T>[]>{
    return [await x];
}