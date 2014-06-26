var actions = [],
    numberOfQuartersInserted = 0;

// name
// price
// functionToPurchase


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
    processQuarterForGum();
  }
  if(productToDispense === 'twinkie'){
    processQuartersForTwinkie();
  }

  finishVending();

  return processActions();
}

function processQuarterForGum(){
  if(numberOfQuartersInserted >= inventory[0].price){
    actions.push('Dispensing gum');
  }
}

function processQuartersForTwinkie(){
  if(numberOfQuartersInserted >= inventory[1].price){
    actions.push('Dispensing twinkie');
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
