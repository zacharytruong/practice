const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const form1 = document.getElementById('form1');
const div = document.querySelector('#demo-div');
const buttons = document.querySelectorAll('button');

btn1.addEventListener('click', addNode);
function addNode(){
    const node = document.createElement('li');
    const nodeText = document.createTextNode('Mlem');
    node.appendChild(nodeText);
    div.appendChild(node);
}

btn2.addEventListener('click', resetNode);
function resetNode(){
    while (div.firstChild){
        div.removeChild(div.firstChild);
    }
}