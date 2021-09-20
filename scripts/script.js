const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
let para1 = document.getElementById('demo1');
let para2 = document.getElementById('demo2');

btn1.onclick = displayFizzBuzz;
btn2.onclick = resetPara;

function resetPara(){
    para1.innerHTML = '';
    para2.innerHTML = '';
}
function displayFizzBuzz(){
    let count = 100;
    para1.innerHTML = '<ul>';
    for (let i = 1; i <= count; i++){
        if (i % 3 === 0 && i % 5 === 0){
            para1.innerHTML += '<li>FizzBuzz</li>';
        } else if (i % 3 === 0){
            para1.innerHTML += '<li>Fizz</li>';
        } else if (i % 5 === 0){
            para1.innerHTML += '<li>Buzz</li>';
        } else {
            para1.innerHTML += `<li>${i}</li>`;
        }
    }
    para1.innerHTML += '</ul>';
}