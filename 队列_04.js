 /*队列*/
    function Queue(){
        var items = [];
        this.enqueue = function (element){
        /*添加一个值*/
            items.push(element);
        };
        this.dequeue = function (){
        /*删除第数组里面的第一个并且返回*/
            return items.unshift();
        };
        this.font = function (){
        /*返回第一个参数*/
            return items[0];
        };
        this.isEmpty = function(){
        /*判断数组是否为空*/
            return items.length ==0;
        };
        this.clear = function(){
        /*清空数组*/
            items = [];
        };
        this.size = function(){
        /*返回数组的长度*/
            return items.length;
        };
        this.print = function (){
        /*返回全部的结果*/
            console.log(items.toString())
        }
        }
        var queue = new Queue();
        queue.enqueue("1");
        queue.enqueue("2");
        /*实现先进先出 后进后出的效果*/
        queue.dequeue();
        queue.dequeue();
        queue.print();