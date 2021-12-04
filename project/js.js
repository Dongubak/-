function init() {
    const $btn = document.querySelector("#container__btn");
    $btn.addEventListener("click", function(event) {
        event.preventDefault();
        secinit();
    });
}
function secinit() {
    const container_2 = document.querySelector("#container__2").value;
    const container_4 = document.querySelector("#container__4").value;
    console.log("secinit");
    if(container_4 == "") {
        nonInput4();
    } else {
        if(container_2 == "") {
            nonInput2();
        } else {
            nonInput3();
        }
    }
}
function nonInput2() {  
    const container_1 = parseInt(document.querySelector("#container__1").value);
    const container_3 = parseInt(document.querySelector("#container__3").value);
    const container_4 = parseInt(document.querySelector("#container__4").value);
    console.log("nonInput2");
    
    let i = 1;
    let result;
    
    while(true) {
        result = container_1*(1+i*0.001)**container_3;
        if(i === 1000) {
            alert("이율이 100%이상입니다.");
            break;
        }

        if(container_4 < result) {
            addLi(result);
            break;
        }
        addLi(result);
        i++;
        
    }
}
function nonInput3() {
    const container_1 = parseInt(document.querySelector("#container__1").value);
    const container_2 = parseFloat(document.querySelector("#container__2").value);
    const container_4 = parseInt(document.querySelector("#container__4").value);
    console.log("nonInput3");
    let i =1;
    let result;
    while(true) {
        result = container_1*(1+container_2)**i;
        if(container_4 < result) {
            addLi(result);
            console.log("넘는 순간의", i);
            break;
        }
        i++;
        addLi(result);
    }
}
function nonInput4() {
    const container_1 = parseInt(document.querySelector("#container__1").value);
    const container_2 = parseFloat(document.querySelector("#container__2").value);
    const container_3 = parseInt(document.querySelector("#container__3").value);
    console.log("nonInput4");
    const result = container_1*(1+container_2)**container_3;
    addLi(result);
}
init();

function addLi(value) {
    let container2__ul = document.querySelector("#container2__ul");
    let createText = document.createTextNode(value);
    let createLi = document.createElement("li");

    createLi.appendChild(createText);
    container2__ul.appendChild(createLi);
}

function clear() {
    let c1 = document.querySelector("#containter2__ul").childNodes;
    let i = 0;
    while(true) {
        document.querySelector("#container2__ul").removeChild(c1[i]);
        i++;

        if(c1 === 0) break;
    }
    ///////clear 만지기
}