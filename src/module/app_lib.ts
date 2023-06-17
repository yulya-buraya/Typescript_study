import {toJson} from 'really-relaxed-json'
const json = '["one", "two", "three", {"foo": "bar"}]'
const rjson = toJson(json)
console.log(json);