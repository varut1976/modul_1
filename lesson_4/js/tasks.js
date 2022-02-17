'use strict';

{
    const rain = Math.random();

    if (Math.round(rain)) {
        console.log('rain = 1', 'Пошёл дождь. Возьмите зонт!');
    } else {
        console.log('rain = 0','Дождя нет!');
    }
}

{
    const mathScore = +prompt('Введите кол-во баллов по математике');
    console.log('Колличество баллов по математике: ', mathScore);
    const languageScore = +prompt('Введите кол-во баллов по русскому языку');
    console.log('Колличество баллов по русскому языку: ', languageScore);
    const computerScienceScore = +prompt('Введите кол-во баллов по информатике');
    console.log('Колличество баллов по информатике: ', computerScienceScore);

    const totalResult = mathScore + languageScore + computerScienceScore;
    console.log('Суммарно колличество баллов: ', totalResult);

    if (totalResult >= 265) {
        console.log('Поздравляю, вы поступили на бюджет!');
    } else {
        console.log('Поздравляю, вы поступили на контракт!');
    }
}

{
    const countMoney = +prompt('Какую сумму вы хотите снять');

    if ((countMoney) % 100 === 0) {
        console.log(`Получите деньги: ${countMoney} руб`);
    } else {
        console.log(`Бакномат не может выдать указанную сумму. Пожалуйста введите сумму кратную 100 руб.`);
    }
}