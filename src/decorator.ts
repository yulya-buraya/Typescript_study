//Декоратор
// паттерн  декоратора
import "reflect-metadata";

const POSITIVE_METADATA_KEY = Symbol("POSITIVE_METADATA_KEY");
interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}
//@setUserAdvenced(66)
//@nullUser
//@nullUserAdvenced
@AddDate(new Date())
class UserService implements IUserService {
  users: number;
  private _city: string;
  @LogSetter()
  set city(city: string) {
    this._city = city;
  }

  get city() {
    return this._city;
  }
  @Catch({ rethrow: true })
  getUsersInDatabase(): number {
    return this.users;
  }
  @Validate()
  setUsersInDatabase(@Positive() value: number): void {
    this.users = value;
  }
}
//декоратор класса
function nullUser(target: Function) {
  target.prototype.users = 0;
}

function setUserAdvenced(param: number) {
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      users = param;
    };
  };
}

function nullUserAdvenced<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    users = 0;
  };
}

function setUsers(param: number) {
  return (target: Function) => {
    target.prototype.users = param;
  };
}

/*Создать декоратор, который добавляет свойство 
createdAt в класс, фиксируя дату создания*/

function AddDate(date: Date) {
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      users: 1;
      createdAt: Date = date;
    };
  };
}

type createdAt = {
  createdAt: Date;
};

console.log(
  (new UserService() as unknown as IUserService & createdAt).createdAt
);

//декортор методов
function Log() {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
    descriptor.value = () => {
      console.log("not error");
    };
  };
}
//декортор методов
function Catch({ rethrow }: { rethrow: boolean } = { rethrow: false }) {
  return (
    target: Object,
    _: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
    const oldMethod = descriptor.value;
    descriptor.value = async (...args: any[]) => {
      try {
        return await oldMethod?.apply(target, args);
      } catch (e) {
        if (e instanceof Error) {
          console.log(e);
          if (rethrow) {
            throw e;
          }
        }
      }
    };
  };
}

//декоратор свойств
function Max(max: number) {
  return (target: Object, propertyKey: string | symbol) => {
    let value: number;

    const setter = function (newValue: number) {
      if (newValue > max) {
        console.log(`Нельзя задать значение больше ${max}`);
      } else {
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
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const oldSetValue = descriptor.set;
    descriptor.set = (...args: any) => {
      console.log(args);
      oldSetValue?.apply(target, args);
    };
  };
}

//декоратор параметра метода

//metadata
function Positive() {
  return (
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
  ) => {
    console.log(Reflect.getOwnMetadata("design:type", target, propertyKey));
    console.log(
      Reflect.getOwnMetadata("design:returnType", target, propertyKey)
    );
    console.log(
      Reflect.getOwnMetadata("design:paramtypes", target, propertyKey)
    );

    let existParams: number[] =
      Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
    existParams.push(parameterIndex);
    Reflect.defineMetadata(
      POSITIVE_METADATA_KEY,
      existParams,
      target,
      propertyKey
    );
  };
}

function Validate() {
  return (
    target: object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(args: any) => any>
  ) => {
    let method = descriptor.value;
    descriptor.value = function (...args: any) {
      let positiveParams: number[] =
        Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) ||
        [];
      if (positiveParams) {
        for (let index of positiveParams) {
          if (args[index] < 0) {
            throw new Error("Число должно быть больше нуля");
          }
        }
      }
      return method?.apply(this, args);
    };
  };
}
const userService = new UserService();
userService.city = "Batumy";
console.log(userService.setUsersInDatabase(10));
//console.log(userService.setUsersInDatabase(-1));

//порядок декораторов
function Uni(name: string): any {
  console.log(`Инициализация ${name}`);
  return function () {
    console.log(`Вызов: ${name}`);
  };
}

@Uni("Класс")
class MyClass {
  @Uni("Свойство")
  props?: string;
  @Uni("Статическое свойство")
  static prop2: string;
  @Uni("Метод")
  method(@Uni("Параметр методов") s: string) {}
  constructor(@Uni("Параметр constructor") s: string) {}

  @Uni("Метод static")
  static method(@Uni("Параметр методов") s: string) {}
}
