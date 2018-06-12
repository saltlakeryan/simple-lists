"use strict";

import foo from './testmodule.js';

var main = document.querySelector('main');
main.innerHTML = "HELLO";

main.innerHTML += foo;