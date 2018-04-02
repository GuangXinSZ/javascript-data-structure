    function Stack(){
        /*首先定义一个数组*/
        var items = [];
        this.push = function (element){
            items.push(element);
        };
        /*删除并且return 顶部的数据*/
        this.pop = function (){
            return items.pop();
        };
        this.peek = function(){
            /*length-1 返回最后添加的数*/
         return items[items.length-1];
         };
        this.isEmpty = function(){
         return items.length == 0;
         };
        this.size = function(){
            return items.length;
         };
        this.clear = function(){
         items = [];
         };
        this.print = function(){
         console.log(items.toString());
         };
    }
    /*使用Stack*/
    var stack = new Stack();
    console.log(stack.isEmpty());/*true*/
    stack.push(5);
    stack.push(6);
    console.log(stack.peek());/*输出6 返回的是最后往里面添加的数值*/
    stack.push(7);
    console.log(stack.size());/*输出结果为3*/
    /*实现先进后出  后进先出的原理*/
    stack.pop();/*删除顶部的数并且返回*/
    stack.pop();
    console.log( stack.size());/*返回1*/
    stack.print();/*输出为5*/