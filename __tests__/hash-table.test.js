'use strict';

const { HashTable, leftJoin } = require('../hash-table');

test('Setting a key/value to your hashtable results in the value being in the data structure', () => {
  let table = new HashTable(10);
  let result = table.set('link', 'rapib');
  console.log(result);
  expect(result).toBe(0);
});

test('Retrieving based on a key returns the value stored', () => {
  let table = new HashTable(10);
  table.set('link', 'rapib');
  let result = table.get('link');
  expect(result).toBe('rapib');
});

test('Successfully returns null for a key that does not exist in the hashtable', () => {
  let table = new HashTable(10);
  table.set('link', 'rapib');
  let result = table.get('tr');
  expect(result).toBe(null);
});

test('Successfully hash a key to an in-range value', () => {
  let table = new HashTable(10);
  let result = table.hash('link');
  expect(result).toBe(0);
});

test('Successfully handle a collision within the hashtable', () => {
  let table = new HashTable(10);
  table.set('name', 'Thomas');
  table.set('name2', 'tom');
  let result = table.get('name2');
  expect(result).toBe('tom');
});

test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
  let table = new HashTable(10);
  table.set('link', 'rapib');
  table.set('link2', 'thomas');
  let result = table.get('link2');
  expect(result).toBe('thomas');
});

test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
  let table = new HashTable(10);
  table.set('thomas', 'rapib');
  table.set('tom', 'thom');
  let result = table.keys();
  console.log(result);
  expect(result).toEqual(['tom', 'thomas']);
});

test('leftjoin', () => {
  let table1 = new HashTable(3);
  table1.set('name', 'Thomas');
  table1.set('name2', 'Tom');
  table1.set('name3', 'Tommy');
  let table2 = new HashTable(2);
  table2.set('name', '353534');
  table2.set('name2', 'dfgdffdgf');
  table2.set('45645', 'Tommy');
  let ans = leftJoin(table1, table2);
  expect(ans).toEqual([['name', 'Thomas', '353534'], ['name3', 'Tommy', null], ['name2', 'Tom', 'dfgdffdgf']]);
});
