var splitLoot = require('../split-loot');
var assert = require('assert');

describe('Loot Splitter', function() { 
  it('should split the loot up correctly', function() {
    assert.equal({larry: 90, curly: 90, moe: 180}, splitLoot(360.0, {larry: 3, curly: 3, moe: 6}) );
    assert.equal({larry: 50, curly: 50, moe: 50}, splitLoot(150.0, {larry: 1, curly: 1, moe: 1}) );
  });  

  it('should be able to handle one person with zero hours', function() {
    assert.equal({larry: 50, curly: 50, moe: 0}, splitLoot(100.0, {larry: 1, curly: 1, moe: 0}) );
  });  

  it('should not allow the total number of hours to be zero', function() {
    assert.equal('Total number of hours cannot be zero', splitLoot(100.0, {larry: 0, curly: 0, moe: 0}) );
  });

  it('should not allow a negative number of hours', function() {
    assert.equal('Number of hours cannot be negative', splitLoot(100.0, {larry: -3, curly: 3, moe: 6}) );
  });

  it('should not allow the total loot to be zero', function() {
    assert.equal('Amount of loot cannot be zero', splitLoot(0.0, {larry: 3, curly: 3, moe: 6}) ); 
  });

  it('should not allow the total loot to be a negative number', function() {
    assert.equal('Amount of loot cannot be negative', splitLoot(-360.0, {larry: -3, curly: 3, moe: 6}) );  
  });

  it('should not allow the hours object to be empty', function() {
    assert.equal('Hours object cannot be empty', splitLoot(100.0, {}) );
  });

  it('should not allow the hours to be stated as other than an object', function() {
    assert.equal('Hours must be stated as an object', splitLoot(100.0, 'larry: 3, curly: 3, moe: 6') );
  });

  it('should not allow the hours to be given as other than a number', function() {
    assert.equal('House must be given as numbers', splitLoot(100,0, 'larry: three, curly: 3, moe: six') );
  });
});











