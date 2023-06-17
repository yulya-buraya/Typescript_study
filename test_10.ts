interface IForm{
    name:string;
    password: string;
}

const form: IForm = {
    name: "Vasya",
    password:"12345678"
};

const formValidation: formValidation<IForm> ={
    name: {isValid: true},
    password:{isValid:false, errorMessage:"Должен быть длиннее 5 символов"}
}

type formValidation<T> = {[P in keyof T ]:{
    isValid:true
}|{
    isValid: false;
    errorMessage:string
}
}