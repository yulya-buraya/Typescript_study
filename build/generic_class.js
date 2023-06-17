"use strict";
class Resp {
    constructor(data, error) {
        if (data) {
            this.data = data;
        }
        if (error) {
            this.erorr = error;
        }
    }
}
const resp = new Resp("jdsdksdjsk");
class HttpResp extends Resp {
    setCode(code) {
        this.code = code;
    }
}
const resp2 = new HttpResp("ewewewe");
