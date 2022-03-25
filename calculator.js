'use strict';


const plus = () => {
    let no1 = Number(document.querySelector('.no1').value);
    let no2 = Number(document.querySelector('.no2').value);
    return no1 + no2;
}
const minus = () => {
    let no1 = Number(document.querySelector('.no1').value);
    let no2 = Number(document.querySelector('.no2').value);
    return no1 - no2;
}
const times = () => {
    let no1 = Number(document.querySelector('.no1').value);
    let no2 = Number(document.querySelector('.no2').value);
    return no1 * no2;
}
const devide = () => {
    let no1 = Number(document.querySelector('.no1').value);
    let no2 = Number(document.querySelector('.no2').value);
    return no1 / no2;
}

document.querySelector('.plus').addEventListener('click', () => {
    document.querySelector('.sum').textContent = plus();
});
document.querySelector('.minus').addEventListener('click', () => {
    document.querySelector('.sum').textContent = minus();
});
document.querySelector('.times').addEventListener('click', () => {
    document.querySelector('.sum').textContent = times();
});
document.querySelector('.devide').addEventListener('click', () => {
    document.querySelector('.sum').textContent = devide();
});