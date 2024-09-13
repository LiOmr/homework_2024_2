'use strict'

/**
 * Функция для сжатия строки с использованием алгоритма Run-Length Encoding (RLE).
 * Если строка содержит последовательные одинаковые символы, они заменяются одним символом
 * и количеством повторений.
 *
 * @param {string} str - Входная строка для сжатия.
 *
 * @returns {string} - Сжатая строка.
 *
 * @throws {Error} - Если входная строка пуста.
 *
 */

function rle(str) {
    if (!str) throw new Error('Входная строка не должна быть пустой');

    let res = [];
    let cnt = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            cnt++;
        } else {
            res.push(str[i] + (cnt > 1 ? cnt : ''));
            cnt = 1;
        }
    }

    return res.join('');
}

// const rle = str => str.replace(/(.)\1*/g, (match, char) => char + (match.length > 1 ? match.length : ''));