/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组
 */
var src = document.getElementById('source');
var oLi = src.getElementsByTagName('li');
console.log(oLi[1].childNodes[1].innerHTML);
console.log(oLi[1].innerHTML.slice(0,2));
function getData() {
    var oData = [];
    // 获取城市名
    for (var i = 0; i < oLi.length; i ++) {
        var data = []
        var score = oLi[i].childNodes[1].innerHTML;
        var city = oLi[i].innerHTML.slice(0, 2);
        oData.push([city, score]);
    }
    console.log(oData);
    return oData;
}
getData();
