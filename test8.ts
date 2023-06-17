/*Необходимо написать функцию группировки, которая принимает массив объектов
и его ключ, производит группировку по указанному ключу и возращает
сгруппированный объект.
Пример:
``` js
[
	{ group: 1, name: 'a' },
	{ group: 1, name: 'b' },
	{ group: 2, name: 'c' },
];
```

При группироке по 'group' ---->

``` js

{
	'1': [ { group: 1, name: 'a' }, { group: 1, name: 'b' } ],
	'2': [ { group: 2, name: 'c' } ]
}
```
*/
interface IData{
	group:number;
	name:string;
}

const students: IData[] = [
	{group:1, name:"a"},
	{group:2, name:"b"},
	{group:1, name:"c"},
	{group:3, name:"cdsd"},
]
interface IGroup<T>{
	[key:string]:T[];
}

type key = string|symbol|number;

function group <T extends Record<key, any>>(students:T[], key:keyof T):IGroup<T>{
return students.reduce<IGroup<T>>((map:IGroup<T>,item )=>{
	const itemKey = item[key];
	let curEl = map[itemKey];
	if(Array.isArray(curEl)){
		curEl.push( item);
	}
	else{
		curEl=[item];
	}
	map[itemKey]=curEl;
	return map;
},{});
}

const res1 = group<IData>(students, "group");
console.log(res1);