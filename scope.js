var arr = [];
arr.number = 10;
arr.test = function(){/* 对象下面的函数叫做方法 */
    alert(123)
}
var commit = [];
commit.name = "XIn";/*commit下面的属性*/
commit.showName = function(){/* commit下面的方法 */
    /*这个时候this指向的是showName这个函数*/
    alert(this.name);
}
commit.showName();/* 区分属性跟方法区别就在于加没加()  */
  //arr.test();
//alert(arr.number)