const textBox = document.getElementById('textBox');
const toFahr = document.getElementById('toFahr');
const toCel = document.getElementById('toCel');
const result = document.getElementById('result');
var temp;
function convert(){
    if(toFahr.checked){
        temp = Number(textBox.Value);
        temp = temp*9/5+32;
        result.textContent = temp + "F"


    }else if(toCel.checked){

    }else{
        result.textContent = 'Select a unit'
    }

}