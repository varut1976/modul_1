'use strict';

{
    const nameOfProduct = 'Bike';
    let numberOfProduct = 6;
    const productCategory = 'vehicle';
    let priceOfProduct = 30;

    const costProduct = numberOfProduct * priceOfProduct + '$';
}

{
    const item = 'TV';
    const count = 4;
    const category = 'video';
    const price = 700;

    const cost = count * price + '$';

    // console.log(item);
    // console.log(`Общая сумма товара: ${cost}`);
}

{
    const itemProduct = prompt('Наименование товара');
    const countProduct = +prompt('Количество товара');
    const categoryProduct = prompt('Категория товара');
    const priceProduct = +prompt('Цена товара');

    const informationAboutProduct = (`На складе ${countProduct} единицы товара "${itemProduct}" на сумму ${countProduct * priceProduct} долларов`);

    // console.log(typeof itemProduct);
    // console.log(typeof countProduct);
    // console.log(typeof categoryProduct);
    // console.log(typeof priceProduct);

    console.log(informationAboutProduct);
}