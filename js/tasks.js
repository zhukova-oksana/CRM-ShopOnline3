'use strict';

const rain = Math.round(Math.random());

if (rain === 1) {
  console.log('Пошёл дождь. Возьмите зонт!');
} else {
  console.log('Дождя нет!');
}

const scoresMath = +prompt('Введите кол-во баллов по математике:');
const scoresRussian = +prompt('Введите кол-во баллов по русскому языку:');
const scoresComputerScience = +prompt('Введите кол-во баллов по информатике:');

const summ = scoresMath + scoresRussian + scoresComputerScience;

if (summ >= 256) {
  console.log('Поздравляю, вы поступили на бюджет!');
}

const amountMoney = +prompt('Какую сумму вы хотите снять?');

if ((amountMoney % 100) === 0) {
  console.log('Поздравляем! Вы получите всю сумму на руки.');
} else {
  console.log('Увы! В банкомате нет купюр.')
}
