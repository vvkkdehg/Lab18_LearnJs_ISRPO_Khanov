console.log("Hello JavaScript!");

let age = 20;
let imya = "Denis";
let isStudent = true;

console.log("Name: ", imya);
console.log("Age: ", age);
console.log("Is student: ", isStudent)

let value = 10;
console.log(value);
value = "Теперь это строка";
console.log(value);
value = true;
console.log(value);

let userName = "Алексей";
console.log(`Привет, ${userName}!`);

let price = 99.99;
let temperature = -15;
let infinity = 1 / 0;
let notANumber = 0 / 0;
console.log(0.1 + 0.2);

let bigNumber = 9007199254740991n;
let huge = BigInt("123456789012345678901234567890");

let isAlive = true;
let isWorking = false;
let isAdult = age >= 18;

let x;
let y = undefined;

let userData = null;

let id = Symbol("id");

let person = {
    name: "Станислав",
    age: 30,
    isStudent: false,
    sayHello: function () {
        console.log("Привет!");
    },
};

console.log(person.name);

let fruits = ["яблоко", "банан", "апельсин"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["тест", 42, true, null];

function sum(a, b) {
    return a + b;
}

let multiply = function (x, y) {
    return x * y;
};

console.log(sum(5, 3));

let now = new Date();
let birthday = new Date("1995-12-17");

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(10 + "5");
console.log("10" - 5);

const numbersArray = [1, 2, 3];
numbersArray[0] = 10;
console.log(numbersArray);
// numbersArray = [5,6,7];

const persons = { name: "Denis", age: 18 };
persons.age = 50;
persons.city = "Volgograd";
console.log(persons);
// person = { name: "Stas" };



console.log(typeof "тект");
console.log(typeof 42);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});

let numberX = null;
console.log(numberX === null);

let newPrice = 50;
console.log("Значение:", newPrice, "Тип:", typeof newPrice);
newPrice = "пятьдесят рублей";
console.log("Значение:", newPrice, "Тип:", typeof newPrice);



let num = 42;
let str = String(num);
let str2 = num.toString();
let str3 = "" + num;

let strNum = "123";
let int = Number(strNum);
let int2 = parseInt("42.5");
let float = parseFloat("3.14");
let int3 = +"99";

let bool1 = Boolean(1);
let bool2 = !!1;
let bool3 = Boolean(0);
let bool4 = Boolean("");

console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "2");
console.log(true + 1);
console.log(false + 1);
console.log(null + 1);
console.log(undefined + 1);



console.log(5 == "5");
console.log(5 === "5");
console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);

let obj1 = { name: "John" };
let obj2 = { name: "John" };
console.log(obj1 == obj2);
console.log(obj1 === obj2);

let obj3 = obj1;
console.log(obj1 === obj3);

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 == arr2);


let x1 = 10;
let y1 = 2;

console.log(x1 + y1);
console.log(x1 - y1);
console.log(x1 * y1);
console.log(x1 / y1);

x1 = "10";

console.log(x1 + y1);
console.log(x1 - y1);
console.log(x1 * y1);
console.log(x1 / y1);