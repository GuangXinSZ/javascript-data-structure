 /*constructor代表创建对象的指向  直接赋值可以不改变函数的指向*/
 var myVaribale = 'global';
    myOtherVar = 'global';
    function myFunction(){
        /*作用域*/
        var myVaribale = 'local';
        return myVaribale;
    }
    function myOtherFunction(){
        var myOtherVar = 'local';
        return myOtherVar;
    }
    console.log(myVaribale);
    console.log(myFunction());

    console.log(myOtherVar);

    console.log(myOtherFunction());

    console.log(myOtherVar);
