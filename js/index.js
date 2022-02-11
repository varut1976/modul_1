// Наименование товара
// Количество товара
// Категория товара
// Цена товара

'use strict';

const nameOfProduct = 'Bike';
let numberOfProduct = 6;
const productCategory = 'vehicle';
let priceOfProduct = 30;

const costProduct = numberOfProduct * priceOfProduct + '$';

const item = 'TV';
const count = 4;
const category = 'video';
const price = 700;

const cost = count * price + '$';

console.log(item);
console.log(`Общая сумма товара: ${cost}`);