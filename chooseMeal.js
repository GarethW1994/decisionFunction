const assert = require('assert');

var Menu = ['Burger and Chips', 'Steak and Chips', 'Fish and Chips'];

var Price = [60, 130, 80];

console.log('This is our Menu:');

for (var i = 0; i < Menu.length && Price.length; i++) {
    console.log(i + ':' + Menu[i] + '- R'+Price[i]);
  }

console.log('Please choose an option: 0, 1 or 2');

////////////////////////////////////////////////////////////

var myMenu = function(option, budget) {

    if (option === 0 && budget >= Price[option]) {
      return 'You chose ' + Menu[option] + ' - ' + 'Your order was successful!';
    }
    else if (option === 1 && budget >= Price[option]) {
      return 'You chose ' + Menu[option] + ' - ' + 'Your order was successful!';
    }
    else if (option === 2 && budget >= Price[option]) {
      return 'You chose ' + Menu[option] + ' - ' + 'Your order was successful!';
    }
    else {
      return 'Your order was unsuccessful!';
    }
}

////////////////////////////////////////////////////////////

var moneyLeft = function(option, budget) {

  if (budget > Price[option]) {
      var change = budget - Price[option];
      return 'Change(R): ' + change;
    }
    else {
      return 'No Change!';
    }
}
//console.log(myMenu());

assert.equal(myMenu(0, 60), 'You chose ' + Menu[0] + ' - ' + 'Your order was successful!');
assert.equal(moneyLeft(0, 60), 'No Change!');
assert.equal(myMenu(1, 120), 'Your order was unsuccessful!');
assert.equal(moneyLeft(0, 60), 'No Change!');
assert.equal(myMenu(2, 200), 'You chose ' + Menu[2] + ' - ' + 'Your order was successful!');
assert.equal(moneyLeft(2, 200), 'Change(R): ' + 120);


console.log(myMenu(0, 60));
console.log(moneyLeft(0, 50));

//////////////////////////////////

console.log(myMenu(1, 120));
console.log(moneyLeft(1, 120));

//////////////////////////////////

console.log(myMenu(2, 200));
console.log(moneyLeft(2, 200))
