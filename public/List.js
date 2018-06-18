import {ListItem, ListItemComponent} from './ListItem.js';

class List {
    constructor(name, items) {
        this.name = name;
        this.items = items;
    }
}

var ListComponent =  Vue.component('list', {
    props: ['name', 'items'],
    template: `<div>
                <list-item v-for="item in items" :listItem="item"/>
            </div>`,
  });
  
export {List, ListComponent} ;