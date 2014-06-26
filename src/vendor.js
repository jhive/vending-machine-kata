var actions = [],
    numberOfQuartersInserted = 0;

var inventory = [
  {
    product: 'gum'
  },
  {
    product: 'twinkies'
  }
];

function insert(coin){
  coin = coin.toLowerCase();

  if( coin === 'quarter' ) {
    numberOfQuartersInserted++;
  }

  actions.push("Inserted " + coin);
  return processActions();
}

function getNumberOfQuartersInserted(){
  return numberOfQuartersInserted;
}

function dispense(productToDispense){
  if(productToDispense === 'gum'){
    processQuarterForGum();
  }

  finishVending();

  return processActions();
}

function processQuarterForGum(coin){
  if(numberOfQuartersInserted >= 1){
    actions.push('Dispensing gum');
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
