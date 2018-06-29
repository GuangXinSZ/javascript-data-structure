/**
 * [获取id]
 */
function getEle(id){
    return document.getElementById(id);
}
/**
 * [getFirstNode description]
 * @param  {[type]} ele [description]
 * @return {[type]}     [description]
 */
function getFirstNode(ele){
    var node = ele.firstElementChild || ele.firstChild;
    return node
}
/**
 * [getLastNode description]
 * @param  {[type]} ele [description]
 * @return {[type]}     [description]
 */
function getLastNode(ele){
    var node = ele.lastElementChild || ele.lastChild;
    return node;
}
/**
 * [获取下一个兄弟节点]
 * @param  {[type]} ele [description]
 * @return {[type]}     [description]
 */
function getNextNode(ele){
    return ele.nextElementSibling || ele.nextSibling;
}
/**
 * [获取上一个兄弟节点]
 * @param  {[type]} ele [description]
 * @return {[type]}     [description]
 */
function getPrevNode(ele){
    /*兼容*/
    return ele.previousElementSibling || ele.previousSibling;
}

/**
 * [获取指定的兄弟节点元素 并返回]
 */
function getEleOfIndex(ele,index){
    return ele.parentNode.children[index];
}
/**
 * [获取每一个子元素]
 */
 function getAllSiblingNode(ele){
        var newArr = [];
        var arr = ele.parentNode.children;
        for(var i=0;i<arr.length;i++){
            if(ele!==arr[i]){
                 newArr.push(arr[i]);
            }
        }
        return newArr;
}
}
/*加一个函数 返回id class 属性*/
function $(str){
    var alone = str.charAt(0);
    if(alone === '#'){
        return document.getElementById(str.slice(1));
    }else id(alone === '.'){
        return document.getElementsByClassName(str.slice(1));
    }else{
        return document.getElementsByTagName(str)
    }
}
function XMLHttp(){
    var hr = XMLHttpRequest();
    hr.open("GET","API",false);
    hr.onreadystatechange = function () {
        if(hr.readyState == 4){
            if(hr.status == 200){
                console.log(hr.responseText)
            }
        }
    }
}

