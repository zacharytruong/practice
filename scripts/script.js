const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const form1 = document.getElementById('form1');
const div = document.querySelector('#demo-div');

const para = document.createElement('p');
para.style.color = 'red';
para.innerText = `Hey I'm red`;
div.appendChild(para);

const heading3 = document.createElement('h3');
heading3.style.color = 'blue';
heading3.innerText = `I'm a blue h3!`;
div.appendChild(heading3);

const content = document.createElement('div');
content.style.border = '1px black solid';
content.style.backgroundColor = 'pink';
const heading1 = document.createElement('h1');
heading1.innerText = `I'm a div`;
content.appendChild(heading1);
const para2 = document.createElement('p');
para2.innerText = `MEE TOO!`;
content.appendChild(para2);
div.appendChild(content);

btn1.addEventListener('click', function(e){
    e.target.style.backgroundColor = 'indianRed';
})