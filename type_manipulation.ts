//keyof - позволяет вытащить ключи из класса, интерфнйс или объекта.
interface User{
    name: string;
    age:number;
}

type keyOfUser= keyof User;

const key:keyOfUser= "age";

function getValue<T, K extends keyof T>(obj:T, key:K){
    return obj[key];
}

const user: User = { 
    name: "Sacha",
    age: 18
}

const username = getValue(user, "name");

//typeof с его помощью можно переиспользовать типы
let strOrNum: string|number;

if(Math.random() >0.5){
    strOrNum = 5 
}
else{
    strOrNum = "string";
}
//пример
let str2OrNum = typeof strOrNum;

//keyof + typeof
const teacher={
    name: "Mariya"
}
type keyOfTeacher = keyof typeof teacher;


enum Direction{
    Up,
    Down 
}

type d = keyof typeof Direction;

//indexed access types
interface Role{
    name:string;
}

interface IUser{
    name: string;
    roles: Role[];
    permission:Permission;
}

interface Permission{
    endDate: Date;
}

const userT: IUser = {
name: "dskdsd",
roles:[],
permission:{
    endDate: new Date()
}

}

const nameUser = user["name"];
const rolesName = 'roles';//string литеральнвй тип(со строкой не будет работать )
let roles2: "roles"="roles"//string литеральнвй тип
type rolesType = IUser['roles'];//indexed access types
type rolesType2 = IUser[typeof rolesName];//indexed access types

type roleType = IUser["roles"][number];

const roles = [ "admin", 'user', 'super-user'] as const;
type roleTypes = typeof roles[number]; //получение ролей как строковое представление

type dateType = IUser['permission']['endDate'];

//conditiotinal types

interface HTTPResponse<T extends "success" | "failed">{
    code:number;
    data: T extends "success"? string: Error;
    additionalData: T extends "success"? string : number;
}

const ok: HTTPResponse<"success"> = {
    code: 200, 
    data: "done",
    additionalData: "Good Response"
}
const err: HTTPResponse<"failed"> = {
    code: 401, 
    data: new Error(),
    additionalData: 401
}

class Bird{
    id: number;
    name: string
}

class ProtectedBird extends Bird{
    dbId: string;
}

function getBird(dbIdorID: number): ProtectedBird 
function getBird(dbIdorID: string): Bird 
function getBird(dbIdorID: string| number): Bird | ProtectedBird{
if(typeof dbIdorID ==='number'){
    return new Bird();
}
else{
    return new ProtectedBird();
}
}

type BirdOrProtectedBird<T extends number | string>=T extends "number"? Bird :ProtectedBird;

function getBird2<T extends  number | string >(id:T):BirdOrProtectedBird<T>{
    if(typeof id ==='number'){
        return new Bird() as BirdOrProtectedBird<T>;
    }
    else{
        return new ProtectedBird() as BirdOrProtectedBird<T>;
    }
}

const bird1 = getBird2(1);

//infer 
function runTransaction(transaction:{
    fromTo: [string, string]
}){
    console.log(transaction);
}

const transaction:GetFirstArg<typeof runTransaction> ={
    fromTo: ["1", '2'] 
}
runTransaction(transaction);

type GetFirstArg<T> = T extends (first:infer First, ...args:any[])=> any? First:never
//mapped types 
type Modifier = "read"| "update"|"create";
type UserRoles ={
    customers?: Modifier,
    projects?:Modifier, 
    adminPanel?:Modifier,
}
type ModifierToAccess<Type> ={
+ readonly[Property in keyof Type ]-?: boolean;
}
type UserAccess2 = ModifierToAccess<UserRoles>;

type UserAccesss ={
    customers?: boolean,
    projects?:boolean, 
    adminPanel?:boolean,
}

//template literal types

type ReadOrWrite = "read" | "write";
type Bulk = "bulk" |""

type Access =`can ${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`;

type ReadOrWriteBulk<T> = T extends `can${infer R}`? R: never;

type T = ReadOrWriteBulk<Access>;

type ErrorOrSuccess = "error" |"success";

type ResponseT = {
result: `http${Capitalize<ErrorOrSuccess>}`
}

const a: ResponseT = {
    result:"httpError"
}