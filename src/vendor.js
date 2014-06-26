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
  actions.push("Inserted " + coin);
  return dispense(coin);
}

function getNumberOfQuartersInserted(){
  return numberOfQuartersInserted;
}

function dispense(coin){
  processQuarterForGum(coin);

  finishVending();

  return processActions();
}

function processQuarterForGum(coin){
  if( coin === 'quarter' ) {
    numberOfQuartersInserted++;
    actions.push('Dispensing gum');
  }
}

function finishVending(){
  actions.push("Done.");
}

function processActions(){
  var output = actions.join('\n');
  actions = [];
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
  initializeMachine: initializeMachine
};
