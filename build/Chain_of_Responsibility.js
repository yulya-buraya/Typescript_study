"use strict";
class AbstactMiddleware {
    next(mid) {
        this.nextMiddleware = mid;
        return mid;
    }
    handle(request) {
        if (this.nextMiddleware) {
            return this.nextMiddleware.handle(request);
        }
        return;
    }
}
class AuthMiddleware extends AbstactMiddleware {
    handle(request) {
        console.log("AuthMiddleware");
        if (request.userId === 1) {
            return super.handle(request);
        }
        return { error: "Пожалуйста, авторизуйтесь!" };
    }
}
class ValidateMiddleware extends AbstactMiddleware {
    handle(request) {
        console.log("ValidateMiddleware");
        if (request.body) {
            return super.handle(request);
        }
        return { error: "нет body" };
    }
}
class Controller extends AbstactMiddleware {
    handle(request) {
        console.log("Controller");
        return { success: request };
    }
}
const controller = new Controller();
const validate = new ValidateMiddleware();
const auth = new AuthMiddleware();
auth.next(validate).next(controller);
console.log(auth.handle({ userId: 1, body: 'Ok' }));
