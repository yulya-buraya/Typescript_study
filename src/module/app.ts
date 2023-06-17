import run, {a,Obj} from './namespace';//импортируем что-то конкретное
import running from './namespace';//импортируем дефолт только 
import * as all from './namespace';// импортируем всё + дефолт
import {Test as C1} from './namespace';//дать псевдоним
import  {type MyType } from './namespace';//импорт только типа

console.log(a);
running();
console.log(all.Test);