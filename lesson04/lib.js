'use strict';

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