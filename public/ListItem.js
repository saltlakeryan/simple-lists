class ListItem {
    constructor(list, item, created_at, id) {
        this.list = list;
        this.item = item;
        this.created_at = created_at;
        this.id = id;
    }
}

var ListItemComponent =  Vue.component('list-item', {
    props: ['list', 'item'],
    template: `<div>{{list}} - {{item}}</div>`,
  });
  
export {ListItem, ListItemComponent} ;