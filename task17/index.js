/**
 * 数据格式演示
 */
// var aqiData = {
//     "北京": {
//         "2016-01-01": 10,
//         "2016-01-02": 20,
//         "2016-01-03": 30
//     }
// }

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
    var y = dat.getFullYear();
    var m = dat.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = dat.getDate();
    d = d < 10 ? '0' + d : d;
    return y + '-' + m + '-' + d;
}
console.log(getDateStr(new Date("2015-1-3")));
function randomBuildData(seed) {
    var returnData = {};
    var dat = new Date('2016-01-01');
    var datStr = '';
    for (var i = 1; i < 92; i ++) {
        datStr = getDateStr(dat);
        returnData[datStr] = Math.ceil(Math.random() * seed);
        dat.setDate(dat.getDate() + 1);
    }

    return returnData;
}
