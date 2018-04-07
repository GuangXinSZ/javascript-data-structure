    function Set() {
        var items = {};
        this.has = function (value){
            //return value in items;
            return items.hasOwnProperty(value);
        }
        this.add = function (value){
            if(!this.has(value)){
                items[value] = value;
                return true;
            }
            return false;
        }
        this.remove = function (){
            if(this.has(value)){
                delete items[value];
                return true;
            }
            return false;
        }
        this.clear = function () {
            items = [];
        }
        this.print = function () {
            console.log(items);
        }
        this.size = function () {
            var count = 0;
            for(var prop in items){
                if(items.hasOwnProperty(prop)){
                    ++count;
                }
                return count;
            }
        }
        this.values = function () {
            return Object.keys(items);
        }
    }
    var set = new Set();
    set.add(1);
    console.log(set.values()); //输出["1"]
    console.log(set.has(1)); //输出true
    console.log(set.size()); //输出1