interface IMiddleware {
  next(mid: IMiddleware): IMiddleware;
  handle(request: any): any;
}

abstract class AbstactMiddleware implements IMiddleware {
  private nextMiddleware: IMiddleware;
  next(mid: IMiddleware): IMiddleware {
    this.nextMiddleware = mid;
    return mid;
  }
  handle(request: any) {
    if (this.nextMiddleware) {
      return this.nextMiddleware.handle(request);
    }
    return;
  }
}

class AuthMiddleware extends AbstactMiddleware {
  override handle(request: any) {
    console.log("AuthMiddleware");
    if (request.userId === 1) {
      return super.handle(request);
    }
    return { error: "Пожалуйста, авторизуйтесь!" };
  }
}

class ValidateMiddleware extends AbstactMiddleware {
  override handle(request: any) {
    console.log("ValidateMiddleware");
    if (request.body) {
      return super.handle(request);
    }
    return { error: "нет body" };
  }
}

class Controller extends AbstactMiddleware {
  override handle(request: any) {
    console.log("Controller");
    return { success: request };
  }
}

const controller = new Controller();
const validate = new ValidateMiddleware();
const auth = new AuthMiddleware();

auth.next(validate).next(controller);

console.log(auth.handle({ userId: 1, body: 'Ok' }));
