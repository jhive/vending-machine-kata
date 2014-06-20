var actions = [],
inventory = [
    {
      product: 'gum'
    },
    {
      product: 'twinkies'
    }
];
function getCoinFromAction(action) {
  return action.split(' ').splice(1).join(' ');
}

function vend(action){
  return insert(getCoinFromAction(action));
}

function insert(coin){
  coin = coin.toLowerCase();
  actions.push("Inserted " + coin);
  return dispense(coin);
}

function dispense(coin){
  processQuarterForGum(coin);

  finishVending();

  return processActions();
}

function processQuarterForGum(coin){
  if( coin === 'quarter' ) {
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

module.exports = {
  inventory: inventory,
  insert: insert,
  vend: vend
};
