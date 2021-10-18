const $input = document.querySelector(".input");
const $submit = document.querySelector(".submit");
const $info = document.querySelector(".info");


function addlist() {
    var value1 = $input.value;
    var creatli = document.createElement("li");
    var creattext = document.createTextNode(value1);
    creatli.appendChild(creattext);
    $info.appendChild(creatli);
    $input.value = "";

}
