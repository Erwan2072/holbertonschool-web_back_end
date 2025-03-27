const assert = require('assert');
const calculaTenumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return the sum of rounded integers', function() {
    assert.strictEqual(calculaTenumber(1, 3), 4);
  });

  it('should round up b when decimal is >= 0.5', function() {
    assert.strictEqual(calculaTenumber(1, 3.7), 5);
  });

  it('should round down a and round up b', function() {
    assert.strictEqual(calculaTenumber(1.2, 3.7), 5);
  });

  it('should round up both a and b', function() {
    assert.strictEqual(calculaTenumber(1.5, 3.7), 6);
  });

  it('should round down both a and b', function() {
    assert.strictEqual(calculaTenumber(1.4, 3.4), 4);
  });

  it('should handle negative numbers', function() {
    assert.strictEqual(calculaTenumber(-1.5, -3.5), -4);
  });

  it('should handle zero values', function() {
    assert.strictEqual(calculaTenumber(0, 0), 0);
  });
});
