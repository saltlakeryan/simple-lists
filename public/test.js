"use strict";

import foo from './testmodule.js';
import {ListItem, ListItemComponent} from './ListItem.js';

var vue = new Vue({
    el: '#vue-app',
    template: `<list-item v-bind:listItem="listItem"/>`,
    data() {
        return {
            listItem: new ListItem("abc", "123")
        }
    }
});

window.vue = vue;
window.ListItem = ListItem;
