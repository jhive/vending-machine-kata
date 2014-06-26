var vendor = require('./src/vendor'),
    inquirer = require('inquirer');

var inquire = function(message){
  clear();

  console.log(message);

  inquirer.prompt([{
    name: 'input',
    type: 'list',
    choices: vendor.inventory.map(function(item){
      return {
        name: "Buy " + item.product,
        value: vendor.dispense.bind(null, item.product)
      };
    }).concat({
      name: 'Insert quarter',
      value: vendor.insert.bind(null, 'quarter')
    }),
    message: 'What do you want to do: '
  }], handleInput);
};

function handleInput(data){
  inquire(data.input());
}

function clear() {
  return process.stdout.write('\033c');
};

clear();
inquire("Waiting on input..");
