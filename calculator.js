'use strict';

const returnSum = (fun) => {
    document.querySelector('.sum').textContent = fun;
}

const no1 = () => {
    return Number(document.querySelector('.no1').value);
}
const no2 = () => {
    return Number(document.querySelector('.no2').value);
}

const plus = () => {
    return no1() + no2();
}
const minus = () => {
    return no1() - no2();
}
const times = () => {
    return no1() * no2();
}
const devide = () => {
    return no1() / no2();
}

document.querySelector('.plus').addEventListener('click', () => {
    returnSum(plus());
});
document.querySelector('.minus').addEventListener('click', () => {
    returnSum(minus());
});
document.querySelector('.times').addEventListener('click', () => {
    returnSum(times());
});
document.querySelector('.devide').addEventListener('click', () => {
    returnSum(devide());
});