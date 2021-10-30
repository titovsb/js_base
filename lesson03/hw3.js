'use strict';

// 1 С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10
// включительно, чтобы результат выглядел так:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

console.info('Первое задание:');
function first(el) {
    if (!el) return 'это ноль';
    else
        switch (el % 2) {
            case 0: return 'четное число';
            case 1: return 'нечетное число';
        };
}

for (let i = 0; i < 10; i++) {
    console.log(`${i} - ${first(i)}`)
}

// 2. Выведите в консоль значения, указанные рядом с комментариями:

console.info('Второе задание:');
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};
console.log(post.author);
console.log(post['comments'][0].rating.dislikes);
console.log(post.comments[1]['userId']);
console.log(post.comments[1].text);


// 3 Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
// 15%, можете использовать метод forEach:

console.info('Третье задание:');

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

let newProducts = products.forEach(function (el) {
    Object.assign({}, { price: el.price *= 0.85 });
})
console.log(products);


// 4 Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
// 1 Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
// 2 Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort,
// как устроен sort можно посмотреть например здесь или в
// дополнительных видео в материалах урока.

console.info('Четвертое задание:');

const products2 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

// let picturedProducts = products2.filter(function (el) {
//     return 'photos' in el && el.photos.length
// });
let picturedProducts = products2.filter((el) => 'photos' in el && el.photos.length);
console.log(picturedProducts);

let sortedProducts = products2.sort(function (fe, se) {
    if (fe.price == se.price) return 0;
    return fe.price - se.price > 0 ? 1 : -1;
});
console.log(sortedProducts);


// 5 (По желанию, т.к. такая особенность практически не используется) 
// Вывести с помощью цикла for числа от 0 до 9,
// НЕ используя тело цикла. То есть выглядеть должно примерно так:
// for(…){/* здесь пусто */}

console.info('Пятое задание вариант1:');
for (let i = 0; i < 10; console.log(i++)) { }

console.info('Пятое задание вариант2:');
let ar = Array();
for (let i = 0; i < 10; ar.push(i++)) { }
console.log(ar.join());


// 6 Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
// только у вашей горки должно быть 20 рядов, а не 5:

console.info('Шестое задание:');
for (let i = 1; i <= 20; ++i) console.log(i + 'x'.repeat(i))