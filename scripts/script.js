const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const form1 = document.getElementById('form1');
const div = document.querySelector('#demo-div');
const buttons = document.querySelectorAll('button');

function time(name, action){
  let start = Date.now();
  action();
  console.log(`${name} took ${Date.now() - start} ms.`);
}
time('naive', () => {
  const one = document.getElementById('one');
  while (one.offsetWidth < 2000){
    let target = document.createTextNode('X');
    one.appendChild(target);
  }
})

time('clever', () => {
  const two = document.getElementById('two');
  two.appendChild(document.createTextNode('XXXXXXXXXX'));
  let total = Math.ceil(2000 / (two.offsetWidth / 10))
  two.firstChild.nodeValue = 'X'.repeat(total);
})