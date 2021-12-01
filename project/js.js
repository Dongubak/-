function init() {
    const $btn = document.querySelector("#input__btn");
    $btn.addEventListener("click", function(event) {
        event.preventDefault();
        secinit();


    });
}

function secinit() {
    const $input_2 = document.querySelector("#input__2").value;
    const $input_3 = document.querySelector("#input__3").value;
    const $input_4 = document.querySelector("#input__4").value;
    console.log($input_4);
    console.log("secinit");
    ///원금은 필수 임
    ///1.이율을 입력하지않은경우
    ///2.횟수를 입력하지 않은 경우
    ///3.목표금액을 입력하지 않은 경우
    if($input_4 == "") {
        nonInput4();
    } else {
        if($input_2 == "") {
            nonInput2();
        }

    }

    /*
    if($input_2.value == undefined) {
        nonInput2();
    }
    */

}



function nonInput4() {
    const $input_1 = parseInt(document.querySelector("#input__1").value);
    const $input_2 = parseFloat(document.querySelector("#input__2").value);
    const $input_3 = parseInt(document.querySelector("#input__3").value);
    console.log("nonInput4");
    const $input_list = document.querySelector("#input__list");
    const result = $input_1*(1+$input_2)**$input_3;
    const $input_text = document.createTextNode(result);
    $input_list.appendChild($input_text);
}


function nonInput2() {  
    const $input_1 = parseInt(document.querySelector("#input__1").value);
    const $input_3 = parseInt(document.querySelector("#input__3").value);
    const $input_4 = parseInt(document.querySelector("#input__4").value);
    console.log("nonInput2");
    let i = 1;
    let result;
    while(true) {
        result = $input_1*(1+i*0.001)**$input_3;
        if(i === 1000) {
            alert("이율이 100%이상입니다.");
            break;
        }

        if($input_4 < result) {
            break;
        }
        i++;
        console.log(result);
    }
}


init();