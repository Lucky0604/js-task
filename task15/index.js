/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组
 */
var src = document.getElementById('source');
var oLi = src.getElementsByTagName('li');
console.log(oLi[1].childNodes[1].innerHTML);
console.log(oLi[1].innerHTML.slice(0,2));
var oData = [];
function getData() {

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

/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(oData) {
    return data.sort(function(a, b) {
        return a[1] - b[1];
    })
}

/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {
}
