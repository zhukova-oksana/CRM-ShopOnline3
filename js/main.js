'use strict';

const nameGoods = prompt('Наименование товара: ');
const quantityGoods = prompt('Количество товара: ');
const categoryGoods = prompt('Категория товара: ');
const priceGoods = prompt('Цена товара: ');


console.log('Тип данных поля "Наименование товара"', typeof(nameGoods));
console.log('Тип данных поля "Количество товара"', typeof(Number(quantityGoods)));
console.log('Тип данных поля "Категория товара"', typeof(categoryGoods));
console.log('Тип данных поля "Цена товара"', typeof(Number(priceGoods)));

console.log(`На складе ${quantityGoods} единицы товара "${nameGoods}" на сумму ${quantityGoods * priceGoods} деревянных`);
