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
            // get body data
                this.listItems = response.body;
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