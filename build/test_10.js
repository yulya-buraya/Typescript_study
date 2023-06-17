"use strict";
const form = {
    name: "Vasya",
    password: "12345678",
};
const formValidation = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: "Должен быть длиннее 5 символов" },
};
