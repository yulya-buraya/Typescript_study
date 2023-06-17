"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//Декоратор
// паттерн  декоратора
require("reflect-metadata");
const POSITIVE_METADATA_KEY = Symbol("POSITIVE_METADATA_KEY");
//@setUserAdvenced(66)
//@nullUser
//@nullUserAdvenced
let UserService = class UserService {
    set city(city) {
        this._city = city;
    }
    get city() {
        return this._city;
    }
    getUsersInDatabase() {
        return this.users;
    }
    setUsersInDatabase(value) {
        this.users = value;
    }
};
__decorate([
    LogSetter(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], UserService.prototype, "city", null);
__decorate([
    Catch({ rethrow: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], UserService.prototype, "getUsersInDatabase", null);
__decorate([
    Validate(),
    __param(0, Positive()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserService.prototype, "setUsersInDatabase", null);
UserService = __decorate([
    AddDate(new Date())
], UserService);
//декоратор класса
function nullUser(target) {
    target.prototype.users = 0;
}
function setUserAdvenced(param) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.users = param;
            }
        };
    };
}
function nullUserAdvenced(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.users = 0;
        }
    };
}
function setUsers(param) {
    return (target) => {
        target.prototype.users = param;
    };
}
/*Создать декоратор, который добавляет свойство
createdAt в класс, фиксируя дату создания*/
function AddDate(date) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.createdAt = date;
            }
        };
    };
}
console.log(new UserService().createdAt);
//декортор методов
function Log() {
    return (target, propertyKey, descriptor) => {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        descriptor.value = () => {
            console.log("not error");
        };
    };
}
//декортор методов
function Catch({ rethrow } = { rethrow: false }) {
    return (target, _, descriptor) => {
        const oldMethod = descriptor.value;
        descriptor.value = (...args) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (oldMethod === null || oldMethod === void 0 ? void 0 : oldMethod.apply(target, args));
            }
            catch (e) {
                if (e instanceof Error) {
                    console.log(e);
                    if (rethrow) {
                        throw e;
                    }
                }
            }
        });
    };
}
//декоратор свойств
function Max(max) {
    return (target, propertyKey) => {
        let value;
        const setter = function (newValue) {
            if (newValue > max) {
                console.log(`Нельзя задать значение больше ${max}`);
            }
            else {
                value = newValue;
            }
        };
        const getter = function () {
            return value;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    };
}
//декоратор accessor
function LogSetter() {
    return (target, propertyKey, descriptor) => {
        const oldSetValue = descriptor.set;
        descriptor.set = (...args) => {
            console.log(args);
            oldSetValue === null || oldSetValue === void 0 ? void 0 : oldSetValue.apply(target, args);
        };
    };
}
//декоратор параметра метода
//metadata
function Positive() {
    return (target, propertyKey, parameterIndex) => {
        console.log(Reflect.getOwnMetadata("design:type", target, propertyKey));
        console.log(Reflect.getOwnMetadata("design:returnType", target, propertyKey));
        console.log(Reflect.getOwnMetadata("design:paramtypes", target, propertyKey));
        let existParams = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
        existParams.push(parameterIndex);
        Reflect.defineMetadata(POSITIVE_METADATA_KEY, existParams, target, propertyKey);
    };
}
function Validate() {
    return (target, propertyKey, descriptor) => {
        let method = descriptor.value;
        descriptor.value = function (...args) {
            let positiveParams = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) ||
                [];
            if (positiveParams) {
                for (let index of positiveParams) {
                    if (args[index] < 0) {
                        throw new Error("Число должно быть больше нуля");
                    }
                }
            }
            return method === null || method === void 0 ? void 0 : method.apply(this, args);
        };
    };
}
const userService = new UserService();
userService.city = "Batumy";
console.log(userService.setUsersInDatabase(10));
//console.log(userService.setUsersInDatabase(-1));
//порядок декораторов
function Uni(name) {
    console.log(`Инициализация ${name}`);
    return function () {
        console.log(`Вызов: ${name}`);
    };
}
let MyClass = class MyClass {
    method(s) { }
    constructor(s) { }
    static method(s) { }
};
__decorate([
    Uni("Свойство"),
    __metadata("design:type", String)
], MyClass.prototype, "props", void 0);
__decorate([
    Uni("Метод"),
    __param(0, Uni("Параметр методов")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MyClass.prototype, "method", null);
__decorate([
    Uni("Статическое свойство"),
    __metadata("design:type", String)
], MyClass, "prop2", void 0);
__decorate([
    Uni("Метод static"),
    __param(0, Uni("Параметр методов")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MyClass, "method", null);
MyClass = __decorate([
    Uni("Класс"),
    __param(0, Uni("Параметр constructor")),
    __metadata("design:paramtypes", [String])
], MyClass);
