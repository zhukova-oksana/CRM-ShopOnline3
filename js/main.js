'use strict';

const nameGoods = prompt('Наименование товара: ');
const quantityGoods = +prompt('Количество товара: ');
const categoryGoods = prompt('Категория товара: ');
const priceGoods = +prompt('Цена товара: ');

if (quantityGoods && priceGoods) {
  console.log('Тип данных поля "Наименование товара"', typeof nameGoods);
  console.log('Тип данных поля "Количество товара"', typeof quantityGoods);
  console.log('Тип данных поля "Категория товара"', typeof categoryGoods);
  console.log('Тип данных поля "Цена товара"', typeof priceGoods);

  console.log(`На складе ${quantityGoods} единицы товара "${nameGoods}" на сумму ${quantityGoods * priceGoods} деревянных`);

} else {
  console.log('Вы ввели некорректные данные');
}

