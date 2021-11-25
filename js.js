///!new.target은 new연산자와 함께 호출되었다면 함수를 가리키고
///일반 함수로 호출이 되었다면 undefined를 반환한다.

function add(number) {
    
    
    if(!new.target) {
        return new add(number);
    }
    
    this.number = number;
    console.log(this.number);
    this.doubling = function() {
        return 2*number;
    };
}


const add1 = new add(3);
console.log(add1.doubling());



const add2 = add(5);
console.log(add2.doubling());


///일급객체파트

const increase = function (num) {
    return ++num;
};///함수는 무명리터럴가능 변수에 저장가능

const decrease = function (num) {
    return --num;
};

const predicates = { increase, decrease };
///함수는 객체에 저장 가능

function makeCounter (predicate) {
    let num = 0;

    return function () {
        num = predicate(num);
        return num;
    };
}
///함수는 매개변수에 전달가능, 함수의 반환값으로 사용 가능

const increaser = makeCounter(predicates.increase);
console.log(increaser());
console.log(increaser());


function square(number) {
    return number * number;
}

console.dir(square);
console.log(Object.getOwnPropertyDescriptors(square));
console.log(Object.getOwnPropertyDescriptor(square, '__proto__'));


function multiply(x, y) {
    console.log(arguments);
    return x*y;
}
///arguments객체는 인수정보를 담고있고 지역변수성질을 가진다.
console.log(multiply());
console.log(multiply(1));
console.log(multiply(1,2));
console.log(multiply(1,2,3));

function mul(num1, num2) {
    if(arguments.length !==2) {
        //throw new Error("인수의 개수가 부족하거나 많습니다");
    }

    return num1 + num2;
}

console.log(mul(1,3));
console.log(mul(1,2,3));

function sum() {
    let res = 0;
    for(let i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }
    return res;
}
///인수를 전달받지 않고 arguments객체를 이용함.
console.log(sum(1,2,3,4,5));
///arguments객체는 유사배열 객체이고 유사배열 객체란 length프로퍼티를 가져
///for문으로 순회가 가능한 객체를 의미한다. ES6부터 arguments객체는 iterable객체이다.

function foo1(a,b,c) {
    console.log(foo1.length);
}
////length프로퍼티는 함수를 정의할 때 선언한 매개변수의 개수를 반환한다.
foo1();

function func1() {
    console.log(func1.name);
}

const funcMain = function () {
    console.log(funcMain.name);
};

func1();
funcMain();


const obj1 = { a: 1 }; 
console.log(obj1.__proto__ === Object.prototype);

console.log((function() {}).hasOwnProperty('prototype'));
console.log(({}.hasOwnProperty('prototype')));
///constructor는 prototype을 가지고 있고
///non-contructor는 prototype을 가지고 있지 않다.