var batteryPath = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(batteryPath));
});

test('returns path to battery', function(t) {
  t.plan(1);
  t.equal(batteryPath('BAT0'), '/sys/class/power_supply/BAT0');
});