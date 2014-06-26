var should = require('chai').should(),
    vendor = require('./vendor.js');

describe('kata.js', function () {
  describe('Inserting things', function () {
    it('should recognize when the shopper has inserted a quarter ', function(){
      output = vendor.insert('quarter');
      var lines = output.split('\n');
      lines[0].should.equal('Inserted quarter');
    });

    it('should have an initial balance of zero quarters', function(){
      vendor.getNumberOfQuartersInserted().should.equal(0);
    });

    it('should have a balance of one quarter after inserting a quarter', function(){
      vendor.insert('quarter');
      vendor.getNumberOfQuartersInserted().should.equal(1);
    });

    it("should dispense nothing if it doesn't see any quarters", function(){
      vendor.insert('sticky thing').should.equal('Inserted sticky thing\nDone.');
    });

  });
  describe('Purchasing gum', function () {

    it('should dispense gum when the shopper has inserted a quarter', function(){
      vendor.insert('quarter').should.equal('Inserted quarter\nDispensing gum\nDone.');
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

