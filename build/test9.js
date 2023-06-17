"use strict";
//Необходимо написать функцию сортировки любых
//объектов, которые имеют id по убыванию и по возрастанию
//js
const data = [
    { id: 2, name: "Петя" },
    { id: 1, name: "Вася" },
    { id: 3, name: "Надя" },
];
function sortById(data, type = "asc") {
    return data.sort((a, b) => {
        if (type == "asc") {
            return a.id - b.id;
        }
        else {
            return b.id - a.id;
        }
    });
}
console.log(sortById(data, "desc"));
console.log(sortById(data));
