var actions = [],
    numberOfQuartersInserted = 0;

var inventory = [
  {
    product: 'gum',
    price: 1
  },
  {
    product: 'twinkie',
    price: 3
  }
];

function insert(coin){
  coin = coin.toLowerCase();

  incrementQuartersIfValidCoinInserted(coin);

  actions.push("Inserted " + coin);
  return processActions();
}

function incrementQuartersIfValidCoinInserted(coin){
  if( coin === 'quarter' ) {
    numberOfQuartersInserted++;
  }
}

function getNumberOfQuartersInserted(){
  return numberOfQuartersInserted;
}

function dispense(productToDispense){
  if(productToDispense === 'gum'){
    purchaseProduct(0);
  }
  if(productToDispense === 'twinkie'){
    purchaseProduct(1);
  }

  finishVending();

  return processActions();
}

function purchaseProduct(inventoryIndex){
  if(numberOfQuartersInserted >= inventory[inventoryIndex].price){
    actions.push('Dispensing ' + inventory[inventoryIndex].product);
  }
}


function finishVending(){
  actions.push("Done.");

}

function processActions(){
  var output = actions.join('\n');
  if(actionsArrayContainsDone()){
    actions = [];
  }
  return output;
}
function actionsArrayContainsDone(){
  return actions[actions.length-1] === 'Done.';
}
function initializeMachine(){
  actions = [];
  numberOfQuartersInserted = 0;
}

module.exports = {
  inventory: inventory,
  insert: insert,
  getNumberOfQuartersInserted:getNumberOfQuartersInserted,
  initializeMachine: initializeMachine,
  dispense:dispense
};
