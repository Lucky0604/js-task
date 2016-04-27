/**
 * 另一种写法
 */

// 简单选择器
$ = function(el) {
    return document.querySelector(el);
};

var data = [];

// 渲染页面
function render() {
    $('#result').innerHTML = data.map(function(d) {
        return '<div>' + d + '</div>';
    }).join('');
}

function deal(func, succ) {
    var args = [].slice.call(arguments, 2);
    return function(e) {
        try {
            var arg = args.map(function(item) {
                return typeof item === 'function' ? item(e): item;
            })
            var result = func.apply(data, arg);

            if (succ !== null) {
                succ(result);
            }
        } catch (e) {
            alert(e.message);
        };
        render();
    }
}

function getInputValue() {
    var numStr = $('input').value;
    if (!validate(numStr)) {
        throw new Error('input error');
    }
}

function getClickIndex(e) {
    var node = e.target;
    return [].indexOf.call(node.parentNode.children, node);
}

function validate(str) {
    return /^\d+$/.test(str);
}

$('#left-in').onclick = deal([].unshift, null, getInputValue);
$('#right-in').onclick = deal([].push, null, getInputValue);
$('#left-out').onclick = deal([].shift, window.alert);
$('#right-out').onclick = deal([].pop, window.alert);
$('#result').onclick = deal([].splice, null, getClickIndex, 1);
