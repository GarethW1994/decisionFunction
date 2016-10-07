//var assert = require('require');
var Menu = [
  'Burger and Chips',
  'Steak and Chips',
  'Fish and Chips'
];

var Price = [
  60,
  130,
  80
];


  for (var i = 0; i < Menu.length && Price.length; i++) {
    console.log(i + ':' + Menu[i] + '- R'+Price[i]);
  }

var myMenu() = function(option, budget) {
  if isNAN(option && budget) {
    return 'Please enter a number next to the meal!';
  }
}
//console.log(myMenu());
