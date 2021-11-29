const obj1 = new Object();
///OrdinaryObjectCreate호출
///빈객체 생성후 인수로 전달받은 프로퍼티 저장
///인수로 전달된 프로토타입을 생성된 객체의 [[prototype]] 내부슬롯에 바인딩
///생성된 객체 반환

const obj = { x: 1};

console.log(obj.constructor === Object);
///->단순히 obj의 constructor가 Object라는 말이 아닌
///obj.prototype으로부터 상속받은 constructor 프로퍼티를
///obj가 사용한 것이다.


function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function() {
    console.log(`Hello ${this.name}`);
};

const person1 = new Person('Lee');
const person2 = new Person('Kim');

person1.sayHi();
person2.sayHi();

console.log(person1.__proto__.__proto__ === Object.prototype);

console.log(person1.__proto__.hasOwnProperty('sayHi'));
///프로토타입에 프로퍼티를 추가한후 상속받았다는 증거
