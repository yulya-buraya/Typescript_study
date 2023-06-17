"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const really_relaxed_json_1 = require("really-relaxed-json");
const json = '["one", "two", "three", {"foo": "bar"}]';
const rjson = (0, really_relaxed_json_1.toRJson)(json);
console.log(json);
