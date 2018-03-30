var arrList = [];//定义的数组 tyoeof 是一个object
arrList[0] = 1;//赋予2个值
arrList[1] = 2;
for(var i=3;i<20;i++){
    /*当前i=3  i-1就等于2 ||  i-2=1 所以得出下面*/
    arrList[i] = arrList[i-1] + arrList[i-2];
}
/*输出结果arrList[19]*/
console.log(arrList);