'use strict';

var upperCase = function upperCase(str) {
  return str.toUpperCase();
};

var lowerCase = function lowerCase(str) {
  return str.toLowerCase();
};

var isUpperCase = function isUpperCase(str) {
  return str === upperCase(str);
};

var isLowerCase = function isLowerCase(str) {
  return str === lowerCase(str);
};

var upperCaseFirst = function upperCaseFirst(str) {
  return str.replace(/^(.)/, upperCase);
};

var lowerCaseFirst = function lowerCaseFirst(str) {
  return str.replace(/^(.)/, lowerCase);
};

var prependSeperator = function prependSeperator(separator, converter, str) {
  return separator + converter(str);
};

var sentenceCase = function sentenceCase(str) {
  var separator = ' ';

	return str
    .replace(/([A-Z])/g, prependSeperator.bind(null, separator, lowerCase))
    .replace(/([\s-_])/g, separator)
    .replace(/^\s+/, '')
    .replace(/\s+$/, '')
    .replace(/^(.)/, upperCase);
};

var titleCase = function titleCase(str) {
	return sentenceCase(str)
    .replace(/\s(.)/g, upperCase);
};

var camelCase = function camelCase(str) {
  return str
    .replace(/[\s-_](.)/g, upperCase)
    .replace(/[\s-_]/g, '')
    .replace(/^(.)/, lowerCase);
};

var pascalCase = function pascalCase(str) {
  return str
    .replace(/[\s-_](.)/g, upperCase)
    .replace(/[\s-_]/g, '')
    .replace(/^(.)/, upperCase);
};


exports.upper = exports.upperCase = upperCase;
exports.lower = exports.lowerCase = lowerCase;
exports.isUpper = exports.isUpperCase = isUpperCase;
exports.isLower = exports.isLowerCase = isLowerCase;

exports.upperCaseFirst = exports.upperFirst = upperCaseFirst;
exports.lowerCaseFirst = exports.lowerFirst = lowerCaseFirst;

exports.sentence = exports.sentenceCase = sentenceCase;
exports.title = exports.titleCase = titleCase;
exports.camel = exports.camelCase = camelCase;
exports.pascal = exports.pascalCase = pascalCase;
