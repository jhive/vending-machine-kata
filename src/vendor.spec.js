var should = require('chai').should(),
    vendor = require('./vendor.js');

describe('kata.js', function () {
  describe('Purchasing gum', function () {
    it('should recognize when the shopper has inserted a quarter ', function(){
      output = vendor.vend('Insert quarter');
      var lines = output.split('\n');
      lines[0].should.equal('Inserted quarter');
    });

    it('should dispense gum when the shopper has inserted a quarter', function(){
      vendor.vend('Insert Quarter').should.equal('Inserted quarter\nDispensing gum\nDone.');
    });

    it("should dispense nothing if it doesn't see any quarters", function(){
      vendor.vend('Inserted sticky thing').should.equal('Inserted sticky thing\nDone.');
    });
  });

  describe('View inventory', function () {

    it("should have gum listed in inventory", function(){
      productExists(vendor.inventory, 'gum').should.be.true;
    });

    it("should have twinkies in inventory", function(){
      productExists(vendor.inventory, 'twinkies').should.be.true;
    });

    it("should give a string with a list of all products", function(){
      vendor.getProducts
    });

    function productExists(inventory, product){
      return inventory.reduce(function(productExists, item){
          return  productExists || item.product === product;
      }, false);
    }
  });
});

