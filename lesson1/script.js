'use strict';

var money = prompt("Ваш бюджет на месяц?"); //бюджет
var time = prompt("Введите дату в формате YYYY-MM-DD"); //дата
var essential = prompt("Введите обязательную статью расходов в этом месяце");
var essential = prompt("Введите обязательную статью расходов в этом месяце");
var cost = prompt("Во сколько обойдется?"); // траты
var cost = prompt("Во сколько обойдется?");



var appData = {
    budget: money,
    timeData: time,
    expenses: {
        essential : cost
    },
    optionalExpenses: "",
    income: [],
    savings: false
};
var result = appData["budget"] / 30;
document.write("<h2> Ваш доход на один день состовляет = <u>" + result.toFixed(2) + "</u> </h2>");
