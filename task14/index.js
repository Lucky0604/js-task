var apiData = [
    ["北京", 90],
    ["上海", 50],
    ["福州", 10],
    ["广州", 50],
    ["成都", 90],
    ["西安", 100]
];

(function() {

    var list = document.getElementById('api-list');
    var str = "";
    var data = [];
    // 序号为文字
    var indexNum = ["一", "二", "三", "四", "五", "六"];
    // 将value > 60的item放入data中
    apiData.forEach(function(element) {
        if (element[1] > 60) {
            data.push(element)
        }
    })
    // 根据value值排序
    data.sort(function(a, b) {
        // console.log(a);
        // console.log(b);
        return b[1] - a[1];
    //利用map拼接出字符串
    }).map(function(key, index) {
        str += '<li>第' + indexNum[index] + '名：' + key[0] + key[1] + '</li>';
    })
    list.innerHTML = str;
})()
