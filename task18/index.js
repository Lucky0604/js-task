/**
 * 为DOM节点增加元素：
 * appendChild()方法，添加到目标节点中（最后一个元素）， node.appendChild(childNode)
 * insertBefore(childNode, targetNode)方法，传入两个参数，targetNode为目标节点
 *
 * 删除DOM节点：
 * removeChild()方法
 * node.removeChild(node.childNodes[0])或者node.removeChild(node.getElementsByTagName(childNodes)[0])
 */

var input = document.getElementById('input-value'),
    leftInBtn = document.getElementById('left-in'),
    rightInBtn = document.getElementById('right-in'),
    leftOutBtn = document.getElementById('left-out'),
    rightOutBtn = document.getElementById('right-out'),
    valueList = document.getElementById('value-list'),
    list = valueList.getElementsByTagName('li');

function addRight() {
    var value = input.value;
    // 创建新的li节点
    var newLi = document.createElement('li');
    // 将新的li节点文本内容设置为用户输入的值
    newLi.innerHTML = value;
    // 使用appendChild方法添加到ul中（最后）
    valueList.appendChild(newLi);
    console.log(value);
    console.log(list);
}
function addLeft() {
    var value = input.value;
    var newLi = document.createElement('li');
    newLi.innerHTML = value;
    valueList.insertBefore(newLi, valueList.childNodes[0]);
    console.log(value);
    console.log(list);
}
function removeLeft() {
    var value = input.value;
    var newLi = document.createElement('li');
    // valueList.removeChild(valueList.firstChild); 此写法当删除默认节点时需要点击两下，也可能是浏览器差异问题
    valueList.removeChild(list[0]);
}
function removeRight() {
    var value = input.value;
    var newLi = document.createElement('li');
    // valueList.removeChild(valueList.lastChild); 此写法当删除默认节点时需要点击两下，也可能是浏览器差异问题
    valueList.removeChild(list[list.length - 1]);
}
leftInBtn.addEventListener('click', addLeft);
rightInBtn.addEventListener('click', addRight);
leftOutBtn.addEventListener('click', removeLeft);
rightOutBtn.addEventListener('click', removeRight);
