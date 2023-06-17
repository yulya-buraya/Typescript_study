class Resp<D, E>{
    data?: D;
    erorr?:E;

    constructor(data?:D, error?:E){
    if(data){
        this.data=data;
    }
    if(error){
        this.erorr=error;
    }
    }
}

const resp= new Resp <string, number>("jdsdksdjsk");

class HttpResp <F> extends Resp<string, number>{
code:F;
setCode(code:F){
    this.code = code;

}
}

const resp2 = new HttpResp("ewewewe");
