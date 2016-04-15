(function() {
    // 根据ID获取相应节点
    var input = document.getElementById('api-input'),
        output = document.getElementById('api-display'),
        btn = document.getElementById('button');

    btn.onclick = function() {
        // 获取节点文本 使用innerHTML
        // 获取input的text值，使用value属性
        output.innerHTML = input.value;
    }
})()
