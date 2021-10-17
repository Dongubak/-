const $subject1 = document.querySelector("#subject1");
const $subject2 = document.querySelector("#subject2");
const $subject3 = document.querySelector("#subject3");
const $result = document.querySelector(".result");

var value1 = 0;
var value2 = 0;
var value3 = 0;


function newRegistersubject1() {
    value1 = $subject1.value;
    value1 *= 1;
    
}

function newRegistersubject2() {
    value2 = $subject2.value;
    value2 *= 1;
    
}

function newRegistersubject3() {
    value3 = $subject3.value;
    value3 *= 1;
    
    for(let i = 0; i < value3 + 1; i++) {
        $result.innerText = value1*(1+value2)**i;
    }
}


