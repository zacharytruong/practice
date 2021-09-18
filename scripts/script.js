const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
let para1 = document.getElementById('demo1');
let para2 = document.getElementById('demo2');

btn1.onclick = changePara;
btn2.onclick = resetPara;
function changePara(){

    para1.innerHTML = '';

}
function resetPara(){
    para1.innerHTML = '';
    para2.innerHTML = '';
}