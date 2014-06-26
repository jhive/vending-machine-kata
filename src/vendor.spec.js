var should = require('chai').should(),
    vendor = require('./vendor.js');

describe('kata.js', function () {

  beforeEach(function () {
    vendor.initializeMachine();
  });

  describe('Intializing a machine', function () {
    it('should have an initial balance of zero quarters', function(){
      vendor.insert("quarter");
      vendor.initializeMachine();
      vendor.getNumberOfQuartersInserted().should.equal(0);
    });
   });

  describe('Inserting things', function () {
    it('should recognize when the shopper has inserted a quarter ', function(){
      output = vendor.insert('quarter');
      var lines = output.split('\n');
      lines[0].should.equal('Inserted quarter');
    });


    it('should have a balance of one quarter after inserting a quarter', function(){
      vendor.insert('quarter');
      vendor.getNumberOfQuartersInserted().should.equal(1);
    });

    it('should keep track of the balance of multiple quarters', function(){
      vendor.insert('not a quarter');
      vendor.insert('quarter');
      vendor.insert('quarter');

      vendor.getNumberOfQuartersInserted().should.equal(2);
    });

    it("should dispense nothing if it doesn't see any quarters", function(){
      vendor.insert('sticky thing').should.equal('Inserted sticky thing');
    });

  });

  describe('Purchasing things', function () {

    it('should dispense gum when the shopper has inserted a quarter and asked for gum', function(){
      vendor.insert('quarter')
      vendor.dispense('gum').should.equal('Inserted quarter\nDispensing gum\nDone.');
    });

    it('should NOT dispense a twinkie when the shopper doesn\'t have enough quarters and asks for twinkies', function(){
      vendor.insert('quarter');
      vendor.insert('quarter');
      vendor.dispense('twinkie').should.equal('Inserted quarter\nInserted quarter\nDone.');
    });

    it('should dispense a twinkie when the shopper enters three quarters and asks for twinkies', function(){
      vendor.insert('quarter')
      vendor.insert('quarter')
      vendor.insert('quarter')
      vendor.dispense('twinkie').should.equal('Inserted quarter\nInserted quarter\nInserted quarter\nDispensing twinkie\nDone.')
    });


  });

  describe('View inventory', function () {

    it("should have gum listed in inventory", function(){
      productExists(vendor.inventory, 'gum').should.be.true;
    });

    it("should have twinkies in inventory", function(){
      productExists(vendor.inventory, 'twinkie').should.be.true;
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

