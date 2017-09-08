(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var calculatorLogic = exports.calculatorLogic = function () {
  function calculatorLogic(birthDay, toDay) {
    _classCallCheck(this, calculatorLogic);

    this.birthDay = birthDay;
    this.toDay = toDay;
  }

  _createClass(calculatorLogic, [{
    key: "secondsConversion",
    value: function secondsConversion(birthDay, toDay) {
      var toDayTime = toDay.getTime();
      var birthDayTime = birthDay.getTime();
      var between = toDayTime - birthDayTime;
      var total = Math.floor(between / 1000);
      return total;
    }
  }]);

  return calculatorLogic;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _calculator = require("./../JS/calculator.js");

$(document).ready(function () {
    $("#calculateAge").submit(function (event) {
        event.preventDefault();

        var birthDay = new Date($("input#birthDay").val());
        console.log($("input#birthDay").val());
        var today = new Date();
        // let gender = $("input#gender").val();
        // let region = $("input#region").val();
        var age = new Age(birthDay, toDay);
        var totalEarthTime = age.secondsConversion(age.birthDay, age.toDay);

        $("#birthDay").text(birthDay);
        $("#toDay").text(toDay);
    });
});

},{"./../JS/calculator.js":1}]},{},[2]);
