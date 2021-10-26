'use strict';


// 3 Объявить две переменные a и b и задать им целочисленные произвольные начальные
// значения.
// Затем написать скрипт, который работает по следующему принципу:
// - если a и b положительные, вывести их разность (ноль можно считать положительным числом);

let a = 3
let b = 2

/**
 * Функцция высвечивает результат функции в зависимости от аргументов.
 * @param {*} a first param
 * @param {*} b second param
 */
function tests(a, b) {
    function alerts(func) {
        alert(`a=${a}, b=${b}, res=${func(a, b)}, func=${func}`);
    }
    let sb = (i, j) => i + j;       // стрелочные
    let ml = (i, j) => i * j;       // объявления функций
    let pl = (i, j) => i + j;       // изящны и удобны
    let f;
    if (a * b < 0) f = pl;          // если разных знаков
    else if (a < 0 && b < 0) f = ml;  // если оба отрицательные
    else f = sb;                  // в остальных случаях))
    alerts(f);

}

// 4 Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
// параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
// и возвращать результат.
// Обязательно использовать оператор return.

let _add_ = function (a, b) { return a + b };           // императивный
let _sub_ = (a, b) => a - b;                            // стрелочный
function _mul_(a, b) { return a * b };                  // декларативный
function _div_(a, b) {                                  // декларативный
    if (!b) throw new Error('Деление на 0');
    return a / b
}


// 5 Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических
// операций
// (использовать функции из задания 4) и вернуть полученное значение.

function mathOperation(arg1, arg2, operation){
    switch (operation){
        case 'add':
            alert('ADD '+_add_(arg1,arg2));
            break;
        case 'sub':
            alert('SUB '+ _sub_(arg1, arg2));
            break;
        case 'div':
            alert('DIV '+_div_(arg1, arg2));
            break;
        case 'mul':
            alert('MUL '+_mul_(arg1, arg2));
            break;
        default:
            alert('UNKNOWN OPERATION');
    }
}



// 6**. (Это задание не является частью курса, можете его не делать, оно для тех кому мало
//     обычных заданий, требует времени и возможно гугления, делайте по желанию.)
//     Программа должна спросить у пользователя число, это будет количество денег, которое он хочет
//     положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
//     "Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101
//     "Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020
//     "Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104
//     То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного
//     числа.

function transaction_simulator() {
    let digit = parseInt(prompt('Введите сумму для взноса (ESC, чтобы закончить)?'));
    if (isNaN(digit)) {     // Определяем, что ничего не введено или ESC
        return              // заканчиваем рекурсию
    }
    let str = String(digit);                // обратно в строку
    let char = str.charAt(str.length-1)     // берем символ
    let word                                // объявляем переменную
    if (str.charAt(str.length-2) + char == '11' ||  // если заканчивается на "11"
        str.charAt(str.length-2) + char == '12') {  // или "12"
        word = 'рублей';                            // то это исключение
    } else {                                        // иначе стандартная схема: 
        switch (char) {
            case '1':
                word = 'рубль';
                break;
            case '2':
            case '3':
            case '4':
                word = 'рубля'
                break;
            default:
                word = 'рублей'
        }
    }
    alert(`Ваша сумма в ${str} ${word} успешно зачислена.`);   
    transaction_simulator();                        // на рекурсию
}



/**
 * Функция выводит на экран строки text 
 * @param {String} text Текст, который выводится на экран в виде пагарафа
 * @param {boolean} mode Если =true, то текст выводится жирным <b>
 */
function show(text, mode = false) {
    let b = { 'open': '<b>', 'close': '</b>' };
    let p = { 'open': '<p>', 'close': '</p>' };
    let o = `${p['open']}${mode ? b['open'] : ''}${text}${mode ? b['close'] : ''}${p['close']}`;
    document.write(o)
}

