"use strict";
//////////////////////////////////////////////////////////////////////////////
// // test1.json in typescript object
// let info: {
//   officeId: number;
//   isOpened: boolean;
//   contacts: {
//     phone: string;
//     email: string;
//     address: {
//       city: string;
//     };
//   };
// } = {
//   officeId: 45,
//   isOpened: false,
//   contacts: {
//     phone: "+79100000000",
//     email: "my@email.ru",
//     address: {
//       city: "Москва",
//     },
//   },
// };
// //function
// function getFullName(userEntity: {
//   firstName: string;
//   surName: string;
// }): string {
//   return `${userEntity.firstName} ${userEntity.surName}`;
// }
// //object
// const user = {
//   firstName: "Juliya",
//   surName: "Buraya",
//   age: 22,
//   city: "Schuchin",
// };
// //array
// const skills: string[] = ["Dev", "DevOps", "Testing"];// запись массива
// const skillls2: Array<string> = ["Dev", "DevOps"]; //альтернативная запись массива
// for (const skill of skills) {
//  skill.toUpperCase();
// }
// const res = skills
//   .filter((s: string) => s != "DevOps")
//   .map((s) => s + "! ")
//   .reduce((a, b) => a + b);
// //tuples-кортежи
// const phone:[string, number]=["Office", 320443];
// const phoneName = phone[0];
// const phoneNumber = phone[1];
// phone.push("ffdfdfdfdf");//можно удалять и добавлять элементы
// const t= phone[2]; //нельзя обращаться к элементам не строго типизироваанным
// const [phNAme, phNumber] = phone;// деструктарзация tuples
// const arr: [number, string, ...boolean[]]=[1,"fddfdf", true, true, false];//  с доп элементами
// //readonly
// const home:readonly[string, number]=["Green", 3];
// const  homes: readonly string[]=['2', '3'];
// homes.push("fdfd");//с модификатором readonly нельзя как-либо модифицировать массив или обвлять новые элементы
// const home2: ReadonlyArray<string> = ["fdfdf", "fdfdfdf"];
// //enums-перечисления
// enum StatusCode{
//   SUCCESS=1,
//   IN_PROCESS=2,
//   FAILED=3
// }
// const enum Roles{
//   ADMIN=1,
//   USER=2
// }
// const result = {
//   message: "it is successefuly",
//   statusCode:StatusCode.SUCCESS
// }
// //test 2
// enum statusCode {
//   "published",
//   "draft",
//   "deleted",
//   "optionale"
// }
// async function getFaqs(req:{
//   topicId: number;
//   status?:statusCode;
// }): Promise<{
//   question: string;
//   answer:string;
//   tags: string[];
//   likes: number;
//   status:statusCode;
// }[]> {
// 	const res = await fetch('/faqs', {
// 		method: 'POST',
// 		body: JSON.stringify(req)
// 	});
// 	const data = await res.json();
// 	return data;
// }
////////////////////////////////////////////////////////////////////////
// //Union
// function logId(id: string | number) {
//   //сужение типов
//   if (typeof id === "string") {
//     console.log(id.toLowerCase());
//   } else {
//     console.log(id + 1);
//   }
// }
// logId(1);
// logId("ffdfd");
// function logError(err: string | string[]) {
//   if (Array.isArray(err)) {
//     console.log(err);
//   } else {
//     console.log(err);
//   }
// }
// function logObject(obj: { a: string } | { b: string }) {
//   if ("a" in obj) {
//     console.log(obj.a);
//   } else {
//     console.log(obj.b);
//   }
// }
// function logMultipleIds(a: string | number, b:boolean|string) {
//   if (a===b) {
//     console.log(a+b);
//   } else {
//     console.log(a);
//   }
// }
// //type Alias
// type httpMethod= "get"|"post";
// // literal types
// function fetchWithAuth(url:string, method:"get"|"post"/*httpMethod */){
// }
// let method="post"
// fetchWithAuth("6", method as "post");// кастоматзация типов
// fetchWithAuth("6", "post");
// //type Alias
// type User={
//   name:string,
//   age:number,
//   skills:string[]
// }
// type Role={
//   id:number
// }
//  type userWithRole = User&Role; //объединене свойств нескольких объектов в один(пересечения)
//  type userWithRole2 ={ //композиция (используем если у нас есть одинаковые свойства в объектах и мы хотим сохранить оба )
//   user: User,
//   role:Role
//  }
//  //Interface
//  interface Person{
//   name:string,
//   age:number,
//   skills:string[],
//   log:(id:number)=>  string;
// }
// interface personRole {
//   roleId:number;
// }
// interface PersonWithRole extends Person, personRole {// объединение интерфейсов
//   createDate: Date
// }
// let person: PersonWithRole={
//   name:"Petja",
//   age:33,
//   skills:['1','4'],
//   roleId: 1,
//   createDate: new Date(),
//   log(id) {
//     return "";
//   }
// }
//  interface personDic{
//   [index:number]: Person;
//  }
//  type userDic ={
//   [index:number]: Person;
//  }
//  //optional - необязательные поля
//  interface userData{
//   login: string;
//   password?:string
//  }
//  const userData: userData ={
//   login: "burayayuliya@gmail.com",
//  }
//  function multiply(a:number, b?: number): number{
//   if(!b){
//     return a*a;
//   }
//   return a*b;
//  }
//  interface userPro{
//   login: string;
//   password?:{
//   type: 'primary' | 'second'
//   }
//  }
//  function tesPass(user: userPro){
//   const t= user.password?.type; //если поле пароль есть, то мы можем посмотреть тип
//   const t1= user.password!.type; // мы уверены, что поле пароль не undefined
//  }
//  function test(param?:string){
//  const t=param??multiply(5); // проверяем если у нас прамс null или неопределен, то мы выполняем функцию multiply
//  }
//  ///exercises 3
//  interface IPayment{
//   sum: number,
// 	from: number,
// 	to: number
//  }
// interface IRequest extends IPayment{}
// enum statusResponse {
// Success="success",
// Failed="failed"
// }
// interface IDataSuccess extends IPayment{
// databaseId: number;
// }
// interface IDataFailed{
// errorMessage:string;
// errorCode:number;
// }
// interface IResponseSuccess{
//   status: statusResponse.Success;
//   data: IDataSuccess;
// }
// interface IResponseFailed{
//   status: statusResponse.Failed;
//   data: IDataFailed;
// }
///////////////////////////////////////////////////////////////////////
// //void - если мы хотим игнорировать результат выполнения функции
// type voidFunc = () => void;
// const skills = ["Dev", "Mob", "Front"];
// const user1 = {
//   s: ["string"],
// };
// skills.forEach((skill) => user1.s.push(skill));
// //Unknown означает, что мы не знаем, что у нас лежит в переменной
// let input: unknown;
// input = 3;
// input = "ddfdfd";
// let res: any = input;
// function run(i: unknown) {
//   if (typeof i == "string") {
//     return i + "!";
//   } else {
//     return i;
//   }
// }
// async function getData() {
//   try {
//     fetch("");
//   } catch (error) {
//     if (error instanceof Error) {
//       console.log(error.message);
//     }
//   }
// }
// //если мы точно знаем, что есть ошибка
// async function getData2() {
//   try {
//     fetch("");
//   } catch (error) {
//     if (error instanceof Error) {
//       const e = error as Error; // создаем константу, которую приводим к ошибке
//       console.log(e.message);
//     }
//   }
// }
// type U1 = unknown | number; // union любой тип с unknown всегда unknown ... самый широкий тип
// type E1 = unknown & string; //entersection unknown и любого типа, дает этот тип . сужение
// //never - никогда такого не произойдет. Помогает сделать код более безопасным.
// function generateError(message: string): never {
//   throw new Error(message);
// }
// function rec(): never {
//   return rec();
// }
// type paymentAction = "refund" | "checkout" | "reject";
// //Never можно использовать для проверк в switch-case, что мы никогда не зайдем в ту или иную ветку.
// function processAction(action: paymentAction) {
//   switch (action) {
//     case "refund":
//       //...
//       break;
//     case "checkout":
//       //...
//       break;
//     case "reject":
//       //...
//       break;
//     default:
//       const _: never = action;
//       throw new Error("Нет такого action");
//   }
// }
// //исчерпывающая проверка never
// function isString(x: string | number): boolean {
//   if (typeof x === "string") {
//     return true;
//   } else if (typeof x === "number") {
//     return false;
//   }
//   generateError("dfdfd");
// }
// //null
// const n: null = null;
// const n1: any = null;
// const n2: number = null;
// const n3: string = null;
// const n4: boolean = null;
// const n5: undefined = null;
// interface User {
//   name: string;
// }
// function getUser() {
//   if (Math.random() > 0.5) {
//     return null;
//   } else {
//     return {
//       name: "Vasya",
//     } as User
//   }
// }
// const user = getUser();
// if(user){
//   const nameUser = user.name;
// }
// // Приведение типов
// let a: number = 1;
// let b: string = a.toString();
// let c="dfdfd";
// let e: string = new String(a).valueOf();
// let f: boolean = new Boolean(a).valueOf();
// let d: number=parseInt(c);
// interface Admin{
//   name: string;
//   email: string;
//   login: string;
// }
// //1
// const admin1: Admin={
//   name:"Admin",
//   email: "admin@oblpo.by",
//   login:"admin",
// }
// //2
// const admin2 = {
//   name:"Admin",
//   email: "admin@oblpo.by",
//   login:"admin",
// } as Admin
// //3 - нерекомендуется использовть, т.к. не валидно в Reactv
// const admin3 = <Admin> {
//   name:"Admin",
//   email: "admin@oblpo.by",
//   login:"admin",
// }
// // преобразование одного объекта к другому
// interface SuperAdmin{
//   name: string;
//   role: number
// }
// //1(не рекомендуется)
// const superAdmin: SuperAdmin = {
// ...admin1,
// role:1
// }
// //2 (рекомендуется)
// function adminToSuperAdmin(admin:Admin):SuperAdmin {
// return{
//   name:admin.name,
//   role:3
// }
// }
// //type guard
// function lodId(id:string | number){
//   if(isNumber(id) ){
//     console.log(id);
//   } else {
//     console.log(id);
//   }
// }
// // пример type guard
// function isNumber(x:string|number): x is number{
//   return typeof x === "number";
// }
// //1 !!! приоритетнее
// function isSuperAdmin(admin: SuperAdmin|Admin): admin is SuperAdmin{
//   return 'role' in admin;
// }
// //2 или можно так проверить тип
// function isSuperAdminAlternative(admin: SuperAdmin|Admin): admin is SuperAdmin{
//   return (admin as SuperAdmin).role!==undefined;
// }
// function setRole(admin: SuperAdmin|Admin){
//   if(isSuperAdmin(admin)){
//     admin.role = 1;
//   }
//   else{
//     throw new Error("Пользовтель просто админ");
//   }
// }
//  //Asserts
//  interface Student{
//   name:string;
//   }
//   const women ={};
//   assertStudent(women);
//   women.name="Sveta";
//   function assertStudent(obj: unknown): asserts obj is Student{
//     if(typeof obj ==="object" && !!obj && 'name' in obj){
//       return ;
//     }
//     throw new Error("Объект women  не Student!!!");
//   }
//   type Payment = number | {  sum: number  };
////////////////////////////////////////////////////////////////////////////////////////////////////
//Классы
//Создание класса
// class User {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// const user = new User("Vasya");
// console.log(user);
// user.name = "Katya";
// console.log(user);
// class Admin {
//   role: number;
// }
// const admin = new Admin();
// admin.role = 1;
// //Конструкторы
// //overload
// class Cat {
//   name: string;
//   age: number;
//   //конструкторы перезагрузки
//   constructor();
//   constructor(age: number);
//   constructor(name: string);
//   constructor(name: string, age: number);
//   //конструктор релизации или имплементации
//   constructor(ageOrName?: string | number, age?: number) {
//     if (typeof ageOrName === "string") {
//       this.name = ageOrName;
//     } else if (typeof ageOrName === "number") {
//       this.age = ageOrName;
//     }
//     if (typeof age === "number") {
//       this.age = age;
//     }
//   }
// }
// const cat = new Cat("Vasya");
// const cat2 = new Cat();
// const cat3 = new Cat(1);
// const cat4 = new Cat("Kula", 1);
// //методы
// enum PaymentStatus {
//   Holded,
//   Processed,
//   Reversed,
// }
// class Payment {
//   id: number;
//   status: PaymentStatus = PaymentStatus.Holded;
//   createdAt: Date = new Date();
//   updatedAt: Date;
//   constructor(id: number) {
//     this.id = id;
//   }
//   getPaymentLifeTime(): number {
//     return new Date().getTime() - this.createdAt.getTime();
//   }
//   unholdPayment(): void {
//     if (this.status == PaymentStatus.Processed) {
//       throw new Error("Платеж не может быть возврщен.");
//     }
//     this.status = PaymentStatus.Reversed;
//     this.updatedAt = new Date();
//   }
// }
// const payment = new Payment(1);
// payment.unholdPayment();
// console.log(payment);
// const time = payment.getPaymentLifeTime();
// console.log(time);
//перегрузка методов
/*class User1 {
  skills: string[];
  addSkill(skillOrSkills: string);
  addSkill(skillOrSkills: string[]);
  addSkill(skillOrSkills: string | string[]) {
    if (typeof skillOrSkills === "string") {
      this.skills.push(skillOrSkills);
    } else if (Array.isArray(skillOrSkills)) {
      this.skills.concat(skillOrSkills);
    }
  }
}
new User1().addSkill("TypeScript"); */
//перегрузка функций
// function run(distance: string): string;
// function run(distance: number): number;
// function run(distance: number | string): string | number {
//   if (typeof distance == "number") {
//     return 1;
//   } else {
//     return "";
//   }
// }
// //get/set
// class User2 {
//   _login: string;
//   _password: string;
//   createdAt:Date;
//   set login(l: string) {
//     this._login = "user-" + l;
//     this.createdAt = new Date();
//   }
//   get login() {
//     return "no login";
//   }
//   async getPassword(p:string){
//   }
// }
// const user2 = new User2();
// user2.login = "admin@gdd.com";
// console.log(user2);
// console.log(user2.login);
// //Implements
// interface ILogger{
//   log(...args):void;
//   error(...args):void;
// }
// class Logger implements ILogger{
//   log(...args: any[]): void {
//    console.log(...args);
//   }
//   async error(...args: any[]): Promise<void> {
//     throw new Error("Method not implemented.");
//   }
// }
// interface IDeletable{
//   delete():void;
// }
// interface IPayable{
//   pay(paymentID:number):void;
//   price?:number;
// }
// class Payable implements IPayable, IDeletable{
//   delete(): void {
//   }
//   pay(paymentID: number| string): void {
//   }
// }
// //extends
// type newPaymentType="new"| "paid"; 
// class newPayment{
//   id:number;
//   status:newPaymentType = "new";
//   constructor(id:number){
//     this.id = id;
//   }
//   pay(){
//     this.status='paid';
//   }
// }
// class PersistedPayment extends newPayment{
//   databaseId:number;
//   paidAt:Date;
//   constructor(){
//     const id=Math.random();
//     super(id);
//   }
//  save(){
// //сохранение в базу
//  }
// override pay(date?:Date){
//   this.status = "paid";
//   if(date){
//     this.paidAt=date;
//   }
//   super.pay();
//  }
// }
// new PersistedPayment();
// class Dog{
// name:string ="Pet";
// constructor(){
//   console.log(this.name);
// }  
// }
// class Friend extends Dog{
//   name:string ="Petty";
// constructor(){
//   super();
//   console.log(this.name);
// }
// }
// new Friend();
// class HttpError extends Error{
//   code:number;
//   constructor(message:string, code?:number){
//     super(message);
//     this.code=code??500;
//   }
// }
// //Композиция и наследование 
// class Student{
//   name:string;
//   constructor(name:string){
//     this.name=name;
//   }
// }
// //наследование
// class Students extends Array<Student>{
// searchByName(name:string){
//   return this.filter(u=>u.name === name);
// }
// override toString(): string {
//   return this.map(u=>u.name).join(', ');
// }
// }
// const students = new Students();
// students.push(new Student("Nina"));
// students.push(new Student("Tina"));
// console.log(students.toString());
// //композиция
// class StudentList{
//   students: Student[];
//   push(s:Student){
//     this.students.push(s);
//   }
// }
// class Lab{
//   date:Date;
// }
// //неправмильно (жесткие границы ухудчают) 
// class StudentWithLab extends Lab{
// name:string;
// }
// //компоозиция(правильно)
// class StudentWithLab2{
// student: Student;
// lab:Lab;
// constructor(student:Student, lab:Lab){
// this.lab=lab;
// this.student=student;
// }
// }
// //видимость свойств 
// class Vehicle{
//   public make:string;
//   private damages:string[];
//   private _model:string;
//   protected run:number;
//   #price:number;
// set model(m:string){
//   this._model=m;
//   this.#price = 78;
// }
// get model(){
//   return this._model;
// }
// isPriceEqual(v:Vehicle){
//   return this.#price===v.#price;
// }
// private addDamage(damage:string){
//     this.damages.push(damage);
//   }
// }
// class EuroTruck extends Vehicle{
//   setRun(km:number){
//     this.run = km/0.62;
//   }
// }
// new Vehicle().make ="d";
// //статические свойства
// class UserService{
//   private static db:any;
//   static async getUser(id:number){
//    // return UserService.db.findById(id);
//   }
//   create(){
//     UserService.db;
//   }
//   constructor(id:number){}
//   static{
//     UserService.db="dfdfd";
//   }
// }
// UserService.getUser(1);
// const inst = new UserService(1);
// inst.create();
// //Работа с this
// class mobilePayment{
//   private date: Date = new Date();
//   getDate(this:mobilePayment){
//     return this.date;
//   }
//   getDateArrow =()=>{
//     return this.date;
//   }
// }
// const mobile= new mobilePayment();
// const phone ={
//   id: 1,
//   paymentDate:mobile. getDate.bind(mobile),
//   paymentDateArrow:mobile.getDateArrow
// }
// //console.log(mobile.getDate());
// //console.log(phone.paymentDate());
// //console.log(phone.paymentDateArrow());
// class mobilePaymentPersistent extends mobilePayment{
//   save(){
//     return super.getDate()
//   }
// }
// console.log(new mobilePaymentPersistent().save());
// //типизация this
// class UserBuilder{
//   name:string;
//   setName(name:string):this{
//     this.name=name;
//     return this;
//   }
//   //TypeGuard
//   isAdmin():this is AdminBuilder{
//     return this instanceof AdminBuilder;
//   }
// }
// class AdminBuilder extends UserBuilder{
//   roles:string[];
// }
// const res = new UserBuilder().setName('Вася');
// const res2 = new UserBuilder().setName('Вася');
// let person: UserBuilder|AdminBuilder = new UserBuilder();
//  if(person.isAdmin()){
//   console.log(person);
//  }
//  else{
//   console.log(person);
//  }
//  //абстрактные методы и классы
//  abstract class Controller{
//   abstract handle(req:any):void;
//   handleWithLogs(req:any){
//     console.log("Start");
//     this.handle(req);
//     console.log("Erd");
//   }
//  }
//  class UserController extends Controller{
//   handle(req: any): void {
//     console.log(req);
//   }
//  }
// const c= new UserController();
// c.handleWithLogs("Request");
//generic
// const num1: Array<number> =[1,2,3];
// async function test(){
//   const a= await new Promise<number>((resolve, reject)=>{
//   resolve(1);
// })
// }
// const check: Record<string, boolean> = {
//   drive:true,
//   kpp:false
// }
// function LogMiddleware<T>(data:T):T{
//   console.log(data);
//   return data;
// }
// const res = LogMiddleware<string>('10');
// function getSplitHalf<T>(data:Array<T>):Array<T>{
//   const l= data.length / 2;
//   return data.splice(0, l);
// }
// getSplitHalf([1,2,5,6]);
/*Необходимо написать функцию toString, которая принимает любой тип
и возврщает его строковое представление. Если не може, то возвращает
undefined*/
// function toString<T>(data:T):string | undefined{
// if(Array.isArray(data)){
// return data.toString();
// }
// switch (typeof data){
//   case "string":
//     return data;
//   case "number":
//   case "symbol":
//   case "boolean":
//   case "bigint":
//   case "function":
//     return data.toString();
//   case 'object':
//     return JSON.stringify(data);
//   default:
//     return undefined; 
// }
// }
