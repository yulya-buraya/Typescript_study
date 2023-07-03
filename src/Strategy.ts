class Student {
  githubToken: string;
  jwtToken: string;
}
interface IAuthStrategy {
  auth(student: Student): boolean;
}
class Auth {
  constructor(private strategy: IAuthStrategy) {}
  setStrategy(strategy: IAuthStrategy) {
    this.strategy = strategy;
  }
  public authUser(student: Student): boolean {
    return this.strategy.auth(student);
  }
}

class JWTStrategy implements IAuthStrategy{
    auth(student: Student): boolean {
        if(student.jwtToken){
            return true;
        }
        return false;
    }
}
class GithubStrategy implements IAuthStrategy{
    auth(student: Student): boolean {
        if(student.githubToken){
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