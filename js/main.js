'use strict';

const nameGoods = prompt('Наименование товара: ');
let quantityGoods = prompt('Количество товара: ');
const categoryGoods = prompt('Категория товара: ');
let priceGoods = prompt('Цена товара: ');

quantityGoods = +quantityGoods;
priceGoods = +priceGoods;


console.log('Тип данных поля "Наименование товара"', typeof nameGoods);
console.log('Тип данных поля "Количество товара"', typeof quantityGoods);
console.log('Тип данных поля "Категория товара"', typeof categoryGoods);
console.log('Тип данных поля "Цена товара"', typeof priceGoods);

console.log(`На складе ${quantityGoods} единицы товара "${nameGoods}" на сумму ${quantityGoods * priceGoods} деревянных`);
