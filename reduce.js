

var array = [1, 2, 3, 4, 5];

var total = array.reduce(function(reduction, value){
  console.log(reduction, value);
  return  reduction || value === 3;
}, false);

console.log(total);
