/*switch case使用*/
    var num = 4;
    switch(num){
        case 1:
        console.log("1");
        break;
        case 2:
        console.log("2");
        break;
        case 3:
        console.log("3");
        break;
        case 4:
        console.log("4");
        break;
        default:
        console.log("您不在我的范围内");
    }
/*简单oop*/
    function Book(title,page,isBin){
        this.title = title;
        this.page = page;
        this.isBin = isBin;
        this.dbFun = function(){
            console.log("i am dbFun");
        }
    }
    let persion = new Book('hello',"10","js");
    console.log(persion.title)
    console.log(persion.page);
    console.log(persion.isBin)

   function printMatrix(myMatrix){
    for(var i=0;i<myMatrix.length;i++){
        for(j=0;j<myMatrix[i].length;j++){
            console.log(myMatrix[i][j]);
        }
    }
   }
   /*合并数组*/
   var zero = [1,2,3];
   var two = [4,5,6];
   var cons = [7,8,9];
   var three = zero.concat(two,cons);
   console.log(three);
   function compontens(arr){
        console.log(arr);
        return (arr % 2==0) ?'true' : false;
   }
   console.log(compontens(4));