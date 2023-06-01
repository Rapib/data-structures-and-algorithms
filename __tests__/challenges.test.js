'use strict';

const {validateBrackets} = require('../challenges');

test('validate Brackets -false', () => {

  expect(validateBrackets('[()')).toEqual(false);
});

test('validate Brackets -true', () => {

  expect(validateBrackets('()')).toEqual(true);
});

test('validate Brackets edgecase', () => {

  expect(validateBrackets('(){dfgdf[')).toEqual(false);
});