const data = require('./food.json');
// import data from './food.json
// console.log(data);

//1. list all the food items
let fooditems = data.map(function (food) {
    return food.protiens + 1
})
// console.log(fooditems);

//2. list all the food items with category vegetables
let vegetables = data.filter((food) => {
    return food.category == 'Vegetable'
})
// console.log(vegetables);

// 3.list all the food items with category fruit
let fruits = data.filter((food) => {
    return food.category == 'Fruit'
})
// console.log(fruits)
//4. list all the food items with category protien  
let protien = data.filter((food) => {
    return food.category == 'protien'
})
// 5.list all the food items with category nuts
let nuts = data.filter((food) => {
    return food.category == 'nuts'
})
// 6.list all the food items with category grains
let grains = data.filter((food) => {
    return food.category == 'grains'
})
// 7.list all the food items with category dairy
let dairy = data.filter((food) => {
    return food.category == 'dairy'
})

//8.list all the food items with calorie above 100
let calorieabove90 = data.filter((food) => {
    return food.calorie > 100
})
// 9.list all the food items with calorie below 100
let caloriebelow90 = data.filter((food) => {
    return food.calorie < 100
})
// 10.list all the food items with highest protien content to lowest
let protienhightolow=data.sort((a,b)=>{
    return b.protiens-a.protiens
})


// 11.list all the food items with lowest cab content to highest
let lowtohigh = data.sort((a, b) => {
    return a.cab - b.cab
})


