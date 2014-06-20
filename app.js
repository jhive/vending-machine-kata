var vendor = require('./src/vendor'),
    inquirer = require('inquirer');

var inquire = function(message){
  console.reset();

  console.log(message);

  inquirer.prompt([{
    name: 'input',
    type: 'list',
    choices: vendor.inventory.map(function(item){
      return "Buy " + item.product;
    }).concat('Insert quarter'),
    message: 'What do you want to do: '
  }], handleInput);
};

function handleInput(data){
  inquire(vendor.vend(data.input));
}

console.reset = function () {
  return process.stdout.write('\033c');
};

console.reset();
inquire("Waiting on input..");
