"use strict";
const students = [
    { group: 1, name: "a" },
    { group: 2, name: "b" },
    { group: 1, name: "c" },
    { group: 3, name: "cdsd" },
];
function group(students, key) {
    return students.reduce((map, item) => {
        const itemKey = item[key];
        let curEl = map[itemKey];
        if (Array.isArray(curEl)) {
            curEl.push(item);
        }
        else {
            curEl = [item];
        }
        map[itemKey] = curEl;
        return map;
    }, {});
}
const res1 = group(students, "group");
console.log(res1);
