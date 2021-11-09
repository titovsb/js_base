'use strict';

// 1. Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
// - единицы (в свойстве units)
// - десятки (в свойстве tens)
// - сотни (в свойстве hundereds)
// Например, для числа 45 мы должны получить следующий объект:
// {
// units: 5, //это единицы
// tens: 4, //это десятки
// hundreds: 0, //это сотни
// }
// Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
// необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.


/**
 * Функция получает значение и возвращает разбор его на разряды
 * вместо математических методов работаем со строкой.
 * @param {*} num - число
 * @returns {units:единицы, tens:десятки, hundreds:сотни}
 */
function getNumbers(num) {
    let myObj = new Object();
    if (num !== '' && num >= 0 && num <= 999) {
        let s = String(num).split('').reverse().join('');
        myObj.units = s[0] ? Number(s[0]) : 0;
        myObj.tens = s[1] ? Number(s[1]) : 0;
        myObj.hundreds = s[2] ? Number(s[2]) : 0;
    } else console.log('Wrong input..');
    return myObj;
}

console.log('Задание 1');
let testArray = [0, 12, 345, 4444, '', 'qwerty'];
for (let el of testArray) {
    // console.log(`Для значения "${el}" результат ${getNumbers(el).toString()} `);
    console.log(getNumbers(el));
}


// 1.1 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
// видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name
// и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
// make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод
// make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
// объект-прототип (как объект transport в уроке).

console.log('Задание 1.1 (ES5)')

function Product(price) {
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price *= 0.75;
}

Product.prototype.getPrice = function () { return this.price };

let prod1 = new Product(100);
prod1.make25PercentDiscount();
console.log(prod1.getPrice());
console.log(prod1);

console.log('Задание 1.1 (ES6)')

class Product2 {
    constructor(price) {
        this.price = price;
    };
    make25PercentDiscount() {
        this.price *= 0.75;
    };
    get getPrice() {
        return this.price;
    }
}

let prod2 = new Product2(200);
prod2.make25PercentDiscount();
console.log(prod2.getPrice);
console.log(prod2);

// 1.2 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
// видео -> 3 примеры наследования -> механика наследования),
// а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
// типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
// б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
// помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
// свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
// highlighted значение true.

console.log('Задание 1.2 (ES5)')
function Post1(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post1.prototype.edit = function (text) {
    this.text = text;
}

function AttachedPost1(author, text, date) {
    Post1.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost1.prototype = Object.create(Post1.prototype);
AttachedPost1.prototype.constructor = AttachedPost1;
AttachedPost1.prototype.makeTextHighLighted = function () { this.highlighted = true };

let postObj1 = new AttachedPost1('First', 'Hello World', new Date());
console.log(postObj1);
postObj1.edit('Привет Мир');
console.log(postObj1);
postObj1.makeTextHighLighted();
console.log(postObj1);

console.log('Задание 1.2 (ES6)')

class Post2 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    set edit(text) {
        this.text = text;
    }
}
class AttachedPost2 extends Post2 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighLighted() {
        this.highlighted = true;
    }
}

let postObj2 = new AttachedPost2('Second', 'Letter for test', new Date());
console.log(postObj2);
postObj2.edit = 'Письмо для тестирования';  // применили сеттер
console.log(postObj2);
postObj2.makeTextHighLighted();             // собственный метод
console.log(postObj2);


// 2 (это задание не является частью учебной программы, делайте его по желанию). 
// Для игры бродилка (котораяесть в дополнительных видео), добавить возможность 
// ходить по диагонали цифрами 1, 3, 7, 9. Также необходимо сделать так, чтобы 
// пользователь не мог совершить шаг в стенку, т.е. при направлении в стенку
// и игрок оставался на том же месте где стоял.

console.log('Задание 2, если успею, сделаю в отдельном файле');

// 3 (это задание не является частью учебной программы, делайте его по желанию). 
// На базе игры (приняв за пример), созданной в дополнительных видео, реализовать 
// игру «Кто хочет стать миллионером?». Т.е. у вас должен быть главный объект, 
// содержащий всю логику игры, который будет иметь методы, например метод run, 
// возможно метод init и т.д.
// В игре должны быть заранее подготовлены список вопросов и ответов 
// (как минимум 5 вопросов). Игра должна приветствовать пользователя, после чего 
// задавать вопросы пользователю и предлагать варианты ответов в виде теста, например:
// Сколько букв в слове "привет":
// a. Пять.
// b. Шесть.
// c. Семь.
// d. Куда я попал?
// Проверять правильный вариант выбрал пользователь или нет, необходимо вести счет.
// По окончании игры, когда было задано 5 вопросов, вы должны сообщить пользователю 
// его счет и предложить сыграть снова.
// Также должна быть возможность выхода из игры заранее, если пользователю надоело играть.

console.log('Задание 3, если успею, сделаю в отдельном файле');
