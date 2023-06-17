"use strict";
const key = "age";
function getValue(obj, key) {
    return obj[key];
}
const user = {
    name: "Sacha",
    age: 18
};
const username = getValue(user, "name");
//typeof с его помощью можно переиспользовать типы
let strOrNum;
if (Math.random() > 0.5) {
    strOrNum = 5;
}
else {
    strOrNum = "string";
}
//пример
let str2OrNum = typeof strOrNum;
//keyof + typeof
const teacher = {
    name: "Mariya"
};
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
})(Direction || (Direction = {}));
const userT = {
    name: "dskdsd",
    roles: [],
    permission: {
        endDate: new Date()
    }
};
const nameUser = user["name"];
const rolesName = 'roles'; //string литеральнвй тип(со строкой не будет работать )
let roles2 = "roles"; //string литеральнвй тип
const roles = ["admin", 'user', 'super-user'];
const ok = {
    code: 200,
    data: "done",
    additionalData: "Good Response"
};
const err = {
    code: 401,
    data: new Error(),
    additionalData: 401
};
class Bird {
}
class ProtectedBird extends Bird {
}
function getBird(dbIdorID) {
    if (typeof dbIdorID === 'number') {
        return new Bird();
    }
    else {
        return new ProtectedBird();
    }
}
function getBird2(id) {
    if (typeof id === 'number') {
        return new Bird();
    }
    else {
        return new ProtectedBird();
    }
}
const bird1 = getBird2(1);
//infer 
function runTransaction(transaction) {
    console.log(transaction);
}
const transaction = {
    fromTo: ["1", '2']
};
runTransaction(transaction);
const a = {
    result: "httpError"
};
