"use strict";

import foo from './testmodule.js';
import {ListItem, ListItemComponent} from './ListItem.js';

var vue = new Vue({
    el: '#vue-app',
    template: `<list-item :list="list" :item="item"/>`,
    data() {
        return new ListItem("todo", "buy milk");
    },
    mounted() {
    },
});

