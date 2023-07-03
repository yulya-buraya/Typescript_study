"use strict";
class Student {
}
class Auth {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    authUser(student) {
        return this.strategy.auth(student);
    }
}
class JWTStrategy {
    auth(student) {
        if (student.jwtToken) {
            return true;
        }
        return false;
    }
}
class GithubStrategy {
    auth(student) {
        if (student.githubToken) {
            return true;
        }
        return false;
    }
}
const student = new Student();
student.jwtToken = "token";
const authJ = new Auth(new JWTStrategy());
console.log(authJ.authUser(student));
authJ.setStrategy(new GithubStrategy());
console.log(authJ.authUser(student));
