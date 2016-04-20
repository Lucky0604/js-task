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
    var pos = ['一', '二', '三', '四', '五', '六', '七'];
    var str = '';
    data.forEach(function(value, index) {
        str += '<li>第' + pos[index] + '名：' + value[0] + '空气质量:<b>' + value[1] + '</b></li>';
    });
    document.getElementById('resort').innerHTML;
}


function btnHandle() {
    getData();
    aqiData = sortAqiData(aqiData));
    render(aqiData);
}

function init() {
    // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
    document.getElementById('sort-btn').addEventListener('click', btnHandle);
}

init();
