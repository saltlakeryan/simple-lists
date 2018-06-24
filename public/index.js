"use strict";

var vue = new Vue({
    el: '#vue-app',
    data: {
        listItems: []
    },
    mounted() {
       this.getItems();
    },
    methods: {
        getItems() {
            this.$http.get('/getItems').then(response => {
                this.listItems = response.body;
            });
        },
        deleteItem(event) {
            var name = event.currentTarget.dataset.name;
            console.log(name);
            for (var i in this.listItems) {
                var li = this.listItems[i];
                console.log(li);
                if (li.item == name) {
                    this.listItems.splice(i, 1);
                }
            }
            this.$http.post('/deleteItem', {name}).then(response => {
            });
        }
    },
    computed: {
        byList() {
            var flat = [];
            let grps = _.groupBy(this.listItems, 'list');
            for(var g in grps) {
                flat.push({name: g, className: "item heading"});
                for (var l in grps[g]) {
                    var li = grps[g][l];
                    if (li.item) {
                        flat.push({name: li.item, className: "item"});
                    }
                }
            }
            return flat;
        }
    }
});

Vue.use(VueResource);