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






const removeFromArray = function(arr1, num0, num1 = '', num2 = '', num3 = '') {
    const arr2 = [num0, num1, num2, num3];
    arr2.forEach(compareArray);
    function compareArray(arr2Value){
        arr1.forEach(removeValue);
        function removeValue(arr1Value, arr1Index){
            if (arr2Value === arr1Value){
                arr1.splice(arr1Index, 1);
            }
        }    
    }
    return arr1;
}
removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
