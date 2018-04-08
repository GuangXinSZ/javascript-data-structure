<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Document</title>
</head>
<body>
    <script>
     function Queue() {
         var items = [];
         this.enqueue = function(element){
             /*push一个参数*/
            items.push(element);
         };
          this.dequeue = function(){
          /*注意使用unshift跟 shift的区别在于一个是删除 一个是添加到数组的前面*/
         return items.shift();
         };
         this.front = function(){
         return items[0];
         };
         this.isEmpty = function(){
         return items.length == 0;
         };
         this.clear = function(){
         items = [];
         };
         this.size = function(){
         return items.length;
         };
         this.print = function(){
         console.log(items.toString());
         };
        }
         function hotPotato(nameList,num){
            var queue = new Queue();
             /*全部遍历添加到item数组里面*/
            for(var i=0;i<nameList.length;i++){
                 queue.enqueue(nameList[i]);
            }
             /*定义保存的赢家*/
            var eliminated = '';
             /*之所以是大于1是因为数组的下标*/
            while (queue.size() > 1){
             for (var i=0; i<num; i++){
                queue.enqueue(queue.dequeue()); // {3}
             }
             eliminated = queue.dequeue();// {4}
             console.log(eliminated + '在击鼓游戏中失败');
            }
            return queue.dequeue();
        }
        var names = ['John','Jack','Camila','Ingrid','Carl'];
        var winner = hotPotato(names,7);
        console.log('胜利者' + winner)

    </script>
</body>
</html>
