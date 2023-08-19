"use strict";
//declairing the varibales
let g = 10;
let b = "saman";
let c = true;
//arrays
let arr = [1, 2.8, 2];
//enum
var Roles;
(function (Roles) {
    Roles[Roles["superAdmin"] = 0] = "superAdmin";
    Roles[Roles["admin"] = 1] = "admin";
    Roles[Roles["user"] = 2] = "user";
    Roles[Roles["all"] = 3] = "all";
})(Roles || (Roles = {}));
