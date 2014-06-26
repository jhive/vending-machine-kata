var actions = [],
    numberOfQuartersInserted = 0;

var inventory = [
  {
    product: 'gum'
  },
  {
    product: 'twinkie'
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
  if(numberOfQuartersInserted >= 1){
    actions.push('Dispensing gum');
  }
}

function processQuartersForTwinkie(){
  if(numberOfQuartersInserted >= 1){
    actions.push('Dispensing twinkie');
  }
}


function finishVending(){
  actions.push("Done.");

}

function processActions(){
  var output = actions.join('\n');
  // actions = [];
  return output;
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
