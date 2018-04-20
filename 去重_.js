 var arr1 = [1,2,3,44,44,11,2,3,333,3,3];
    function removeRepeat(arr){
        var removeArr = [],obj = {};
        for(var i = 0, l = arr.length; i < l; i++){
            if(!obj[arr[i]]){
                removeArr.push(arr[i]);
                obj[arr[i]] = 1;
            }
        };
        return removeArr;
    }
    var singleArr = removeRepeat(arr1);
    console.log(singleArr); //[1, 2, 3, 44, 11, 333]