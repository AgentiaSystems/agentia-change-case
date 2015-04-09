'use strict';

var chai = require('chai');
var expect = chai.expect;

var changeCase = require('../');

describe('agentia-change-case', function() {

  describe('upperCase', function() {

    it('should convert strings to uppercase', function() {
      expect(changeCase.upperCase('abcdefghij')).to.equal('ABCDEFGHIJ');
    });

    it('should throw an error, when called with non-string', function() {
      expect(changeCase.upperCase.bind(null, 1)).to.throw;
      expect(changeCase.upperCase.bind(null, false)).to.throw;
      expect(changeCase.upperCase.bind(null, {})).to.throw;
      expect(changeCase.upperCase.bind(null, [])).to.throw;
      expect(changeCase.upperCase.bind(null, null)).to.throw;
      expect(changeCase.upperCase.bind(null, undefined)).to.throw;
    });

  });

  describe('lowerCase', function() {

    it('should convert strings to lowercase', function() {
      expect(changeCase.lowerCase('ABCDEFGHIJ')).to.equal('abcdefghij');
    });

    it('should throw an error, when called with non-string', function() {
      expect(changeCase.lowerCase.bind(null, 1)).to.throw;
      expect(changeCase.lowerCase.bind(null, false)).to.throw;
      expect(changeCase.lowerCase.bind(null, {})).to.throw;
      expect(changeCase.lowerCase.bind(null, [])).to.throw;
      expect(changeCase.lowerCase.bind(null, null)).to.throw;
      expect(changeCase.lowerCase.bind(null, undefined)).to.throw;
    });

  });

  describe('isUpperCase', function() {

    it('should return true when entire string is uppercase', function() {
      expect(changeCase.isUpperCase('ABCDEFGHIJ')).to.be.true;
    });

    it('should return false when entire string is not uppercase', function() {
      expect(changeCase.isUpperCase('ABCDEFGHIj')).to.be.false;
    });

    it('should throw an error, when called with non-string', function() {
      expect(changeCase.isUpperCase.bind(null, 1)).to.throw;
      expect(changeCase.isUpperCase.bind(null, false)).to.throw;
      expect(changeCase.isUpperCase.bind(null, {})).to.throw;
      expect(changeCase.isUpperCase.bind(null, [])).to.throw;
      expect(changeCase.isUpperCase.bind(null, null)).to.throw;
      expect(changeCase.isUpperCase.bind(null, undefined)).to.throw;
    });

  });

  describe('isLowerCase', function() {

    it('should return true when entire string is uppercase', function() {
      expect(changeCase.isLowerCase('abcdefghij')).to.be.true;
    });

    it('should return false when entire string is not uppercase', function() {
      expect(changeCase.isLowerCase('abcdefghiJ')).to.be.false;
    });

    it('should throw an error, when called with non-string', function() {
      expect(changeCase.isLowerCase.bind(null, 1)).to.throw;
      expect(changeCase.isLowerCase.bind(null, false)).to.throw;
      expect(changeCase.isLowerCase.bind(null, {})).to.throw;
      expect(changeCase.isLowerCase.bind(null, [])).to.throw;
      expect(changeCase.isLowerCase.bind(null, null)).to.throw;
      expect(changeCase.isLowerCase.bind(null, undefined)).to.throw;
    });

  });

  describe('upperCaseFirst', function() {

    it('should convert first character to uppercase', function() {
      expect(changeCase.upperCaseFirst('abcdefghij')).to.equal('Abcdefghij');
    });

    it('should throw an error, when called with non-string', function() {
      expect(changeCase.upperCaseFirst.bind(null, 1)).to.throw;
      expect(changeCase.upperCaseFirst.bind(null, false)).to.throw;
      expect(changeCase.upperCaseFirst.bind(null, {})).to.throw;
      expect(changeCase.upperCaseFirst.bind(null, [])).to.throw;
      expect(changeCase.upperCaseFirst.bind(null, null)).to.throw;
      expect(changeCase.upperCaseFirst.bind(null, undefined)).to.throw;
    });

  });

  describe('lowerCaseFirst', function() {

    it('should convert first character to uppercase', function() {
      expect(changeCase.lowerCaseFirst('ABCDEFGHIJ')).to.equal('aBCDEFGHIJ');
    });

    it('should throw an error, when called with non-string', function() {
      expect(changeCase.lowerCaseFirst.bind(null, 1)).to.throw;
      expect(changeCase.lowerCaseFirst.bind(null, false)).to.throw;
      expect(changeCase.lowerCaseFirst.bind(null, {})).to.throw;
      expect(changeCase.lowerCaseFirst.bind(null, [])).to.throw;
      expect(changeCase.lowerCaseFirst.bind(null, null)).to.throw;
      expect(changeCase.lowerCaseFirst.bind(null, undefined)).to.throw;
    });

  });

  describe('sentenceCase', function() {

    it('should convert to sentence case', function() {
      expect(changeCase.sentenceCase('ThisIsOnlyATest')).to.equal('This is only a test');
      expect(changeCase.sentenceCase('this-is-only-a-test')).to.equal('This is only a test');
      expect(changeCase.sentenceCase('this_is_only_a_test')).to.equal('This is only a test');
      expect(changeCase.sentenceCase('  ThisIsOnlyATest  ')).to.equal('This is only a test');
      expect(changeCase.sentenceCase('  this-is-only-a-test  ')).to.equal('This is only a test');
      expect(changeCase.sentenceCase('  this_is_only_a_test  ')).to.equal('This is only a test');
    });

    it('should throw an error, when called with non-string', function() {
      expect(changeCase.sentenceCase.bind(null, 1)).to.throw;
      expect(changeCase.sentenceCase.bind(null, false)).to.throw;
      expect(changeCase.sentenceCase.bind(null, {})).to.throw;
      expect(changeCase.sentenceCase.bind(null, [])).to.throw;
      expect(changeCase.sentenceCase.bind(null, null)).to.throw;
      expect(changeCase.sentenceCase.bind(null, undefined)).to.throw;
    });

  });

  describe('titleCase', function() {

    it('should convert to sentence case', function() {
      expect(changeCase.titleCase('ThisIsOnlyATest')).to.equal('This Is Only A Test');
      expect(changeCase.titleCase('this-is-only-a-test')).to.equal('This Is Only A Test');
      expect(changeCase.titleCase('this_is_only_a_test')).to.equal('This Is Only A Test');
      expect(changeCase.titleCase('  ThisIsOnlyATest  ')).to.equal('This Is Only A Test');
      expect(changeCase.titleCase('  this-is-only-a-test  ')).to.equal('This Is Only A Test');
      expect(changeCase.titleCase('  this_is_only_a_test  ')).to.equal('This Is Only A Test');
    });

    it('should throw an error, when called with non-string', function() {
      expect(changeCase.titleCase.bind(null, 1)).to.throw;
      expect(changeCase.titleCase.bind(null, false)).to.throw;
      expect(changeCase.titleCase.bind(null, {})).to.throw;
      expect(changeCase.titleCase.bind(null, [])).to.throw;
      expect(changeCase.titleCase.bind(null, null)).to.throw;
      expect(changeCase.titleCase.bind(null, undefined)).to.throw;
    });

  });

  describe('camelCase()', function() {

    it('should convert to sentence case', function() {
      expect(changeCase.camelCase('This Is Only A Test')).to.equal('thisIsOnlyATest');
      expect(changeCase.camelCase('this is only a test')).to.equal('thisIsOnlyATest');
      expect(changeCase.camelCase('ThisIsOnlyATest')).to.equal('thisIsOnlyATest');
      expect(changeCase.camelCase('this-is-only-a-test')).to.equal('thisIsOnlyATest');
      expect(changeCase.camelCase('this_is_only_a_test')).to.equal('thisIsOnlyATest');
      expect(changeCase.camelCase('  This Is Only A Test  ')).to.equal('thisIsOnlyATest');
      expect(changeCase.camelCase('  this is only a test  ')).to.equal('thisIsOnlyATest');
      expect(changeCase.camelCase('  ThisIsOnlyATest  ')).to.equal('thisIsOnlyATest');
      expect(changeCase.camelCase('  this-is-only-a-test  ')).to.equal('thisIsOnlyATest');
      expect(changeCase.camelCase('  this_is_only_a_test  ')).to.equal('thisIsOnlyATest');
    });

    it('should throw an error, when called with non-string', function() {
      expect(changeCase.camelCase.bind(null, 1)).to.throw;
      expect(changeCase.camelCase.bind(null, false)).to.throw;
      expect(changeCase.camelCase.bind(null, {})).to.throw;
      expect(changeCase.camelCase.bind(null, [])).to.throw;
      expect(changeCase.camelCase.bind(null, null)).to.throw;
      expect(changeCase.camelCase.bind(null, undefined)).to.throw;
    });

  });

  describe('pascalCase()', function() {

    it('should convert to sentence case', function() {
      expect(changeCase.pascalCase('This Is Only A Test')).to.equal('ThisIsOnlyATest');
      expect(changeCase.pascalCase('this is only a test')).to.equal('ThisIsOnlyATest');
      expect(changeCase.pascalCase('ThisIsOnlyATest')).to.equal('ThisIsOnlyATest');
      expect(changeCase.pascalCase('this-is-only-a-test')).to.equal('ThisIsOnlyATest');
      expect(changeCase.pascalCase('this_is_only_a_test')).to.equal('ThisIsOnlyATest');
      expect(changeCase.pascalCase('  This Is Only A Test  ')).to.equal('ThisIsOnlyATest');
      expect(changeCase.pascalCase('  this is only a test  ')).to.equal('ThisIsOnlyATest');
      expect(changeCase.pascalCase('  ThisIsOnlyATest  ')).to.equal('ThisIsOnlyATest');
      expect(changeCase.pascalCase('  this-is-only-a-test  ')).to.equal('ThisIsOnlyATest');
      expect(changeCase.pascalCase('  this_is_only_a_test  ')).to.equal('ThisIsOnlyATest');
    });

    it('should throw an error, when called with non-string', function() {
      expect(changeCase.pascalCase.bind(null, 1)).to.throw;
      expect(changeCase.pascalCase.bind(null, false)).to.throw;
      expect(changeCase.pascalCase.bind(null, {})).to.throw;
      expect(changeCase.pascalCase.bind(null, [])).to.throw;
      expect(changeCase.pascalCase.bind(null, null)).to.throw;
      expect(changeCase.pascalCase.bind(null, undefined)).to.throw;
    });

  });

});
