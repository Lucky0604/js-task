/**
 * aqiData, 存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 * 		"北京": 90,
 * 		"上海": 40
 * }
 */
var aqiData = {};
var city = document.getElementById('aqi-city-input');
var aqiValue = document.getElementById('aqi-value-input');
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    // 通过.value属性获取input的值
    var cityValue = city.value;
    var scoreValue = aqiValue.value;

    // 增加判断
    if(!cityValue.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
        alert("城市名必须为中英文字符！")
        return;
    }
    if(!scoreValue.match(/^\d+$/)) {
        alert("空气质量指数必须为整数！")
        return;
    }
    // cityValue为对象属性，scoreValue为对象属性值
    aqiData[cityValue] = scoreValue;
}

function renderAqiList() {
    // 初始化html标签
    var items = '<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>';
    for (var city in aqiData) {

        // 此处用到dataset，为html5 自定义标签，更多可见
        // http://www.zhangxinxu.com/wordpress/2011/06/html5%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B1%9E%E6%80%A7%E5%AF%B9%E8%B1%A1dataset%E7%AE%80%E4%BB%8B/
        items += '<tr><td>' + city + '</td><td>' + aqiData[city] + "</td><td><button data-city='" + city + "'>删除</button></td></tr>";

    }
    // document.getElementById('aqi-table').innerHTML = items;

    // 若有city值，则输出items，否则输出为空
    document.getElementById('aqi-table').innerHTML = city ? items: '';
}

function addBtnHandler() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候处理逻辑
 * 获取哪个城市数据被删，输出数据，更新表格显示
 */

function delBtnHandle(city) {
    delete aqiData[city];
    renderAqiList();
}

function init() {
    // 给addBtn绑定事件
    document.getElementById('add-btn').addEventListener('click', addBtnHandler);
    // 给aql-table中所有的delete按钮绑定事件，出发delBtnHandle()
    document.getElementById('aqi-table').addEventListener('click', function(event) {
        if (event.target.nodeName.toLowerCase() === 'button') {
            delBtnHandle.call(null, event.target.dataset.city);
        }
    })
}

init();
