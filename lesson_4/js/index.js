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

}

{
    const itemProduct = prompt('Наименование товара');
    const countProduct = +prompt('Количество товара');
    const categoryProduct = prompt('Категория товара');
    const priceProduct = +prompt('Цена товара');

    if (countProduct && priceProduct) {
        // const informationAboutProduct = (`На складе ${countProduct} единицы товара "${itemProduct}" на сумму ${countProduct * priceProduct} долларов`);
        console.log(`На складе ${countProduct} единицы товара "${itemProduct}" на сумму ${countProduct * priceProduct} долларов`);
    } else {
        console.log('Вы ввели некорректные данные');
    };

}