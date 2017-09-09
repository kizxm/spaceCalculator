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
    this.region = region;
    this.gender = gender;
    this.life = 0;
  }

  _createClass(calculatorLogic, [{
    key: "secondsConversion",
    value: function secondsConversion() {
      var toDayTime = this.toDay.getTime();
      var birthDayTime = this.birthDay.getTime();
      var between = toDayTime - birthDayTime;
      var total = Math.floor(between / 1000);
      return total;
    }
  }, {
    key: "mercuryConversion",
    value: function mercuryConversion(total) {
      var earthSeconds = 31536000;
      var ageFill = total / (earthSeconds * .24);
      var age = parseFloat(ageFill.toFixed(2));
      return age;
    }
  }, {
    key: "venusConversion",
    value: function venusConversion(total) {
      var earthSeconds = 31536000;
      var ageFill = total / (earthSeconds * .62);
      var age = parseFloat(ageFill.toFixed(2));
      return age;
    }
  }, {
    key: "marsConversion",
    value: function marsConversion(total) {
      var earthSeconds = 31536000;
      var ageFill = total / (earthSeconds * 1.88);
      var age = parseFloat(ageFill.toFixed(2));
      return age;
    }
  }, {
    key: "jupiterConversion",
    value: function jupiterConversion(total) {
      var earthSeconds = 31536000;
      var ageFill = total / (earthSeconds * 11.86);
      var age = parseFloat(ageFill.toFixed(2));
      return age;
    }
  }, {
    key: "mercuryDeathConversion",
    value: function mercuryDeathConversion(regionAge) {
      var mercuryDeath = regionAge * (1 / 0.62);
      return mercuryDeath;
    }

    //why won't it go through this loop?

  }, {
    key: "regionOut",
    value: function regionOut() {
      var regionAge = 0;
      age = number(document.getElementById("age").value);
      if (gender === "female" && region === "Africa") {
        regionAge = 74;
      } else if (gender === "male" && region === "Africa") {
        regionAge = 71;
      } else if (gender === "female" && region === "Asia") {
        regionAge = 79;
      } else if (gender === "male" && region === "Asia") {
        regionAge = 76;
      } else if (gender === "female" && region === "America") {
        regionAge = 81;
      } else if (gender === "male" && region === "America") {
        regionAge = 76;
      } else if (gender === "female" && region === "Europe") {
        regionAge = 82;
      } else if (gender === "male" && region === "Europe") {
        regionAge = 77;
      } else if (gender === "female" && region === "Latin") {
        regionAge = 74;
      } else if (gender === "male" && region === "Latin") {
        regionAge = 74;
      } else if (gender === "female" && region === "Middle") {
        regionAge = 76;
      } else if (gender === "male" && region === "Middle") {
        regionAge = 76;
      } else if (gender === "male" && region == "South") {
        regionAge = 76;
      } else if (gender === "female" && region == "South") {
        regionAge = 79;
      } else {
        regionAge = 74;
      }return regionAge;
    }

    // death(region, gender)
    // secondsConversion(birthDay) {
    //   const number = 31536000;
    //   let total = birthDay * number;
    //   return total;
    // }

  }]);

  return calculatorLogic;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _calculator = require('./../js/calculator.js');

$(function () {
    $("#calculateAge").submit(function (event) {
        event.preventDefault();

        var birthDay = new Date($('#birthDay').val());
        var toDay = new Date();
        var gender = $("#gender").val();
        var region = $("#region").val();

        //need help here regionOut is not a constructor/method/defined
        // let regionAge = calculatorLogic.regionOut();

        var age = new _calculator.calculatorLogic(birthDay, toDay);

        var totalEarthTime = age.secondsConversion();

        var marsAge = age.marsConversion(totalEarthTime);
        var mercuryAge = age.mercuryConversion(totalEarthTime);
        var venusAge = age.venusConversion(totalEarthTime);
        var jupiterAge = age.jupiterConversion(totalEarthTime);

        // let marsDeath = (regionAge - marsAge);
        // let mercuryDeath = age.mercuryDeathConversion(regionAge);
        // let venusDeath = (regionAge - venusAge);
        // let jupiterDeath = (regionAge - jupiterAge);


        // $("#output").append('<li>' + birthDay + '<br>');
        $("#output").append('<li>' + "your age in Earth Seconds: " + totalEarthTime + '<br>');
        $("#output").append('<li>' + "your Mercury age: " + marsAge + '<br>');
        $("#output").append('<li>' + "your Venus age: " + mercuryAge + '<br>');
        $("#output").append('<li>' + "your Mars age: " + venusAge + '<br>');
        $("#output").append('<li>' + "your Jupiter age: " + jupiterAge + '<br>');
        // $("#output").append('<li>' + toDay + '<br>');
        $("#output").append('<hr noshade>');
        // $("#output").append('<li>' + "remaining years on Mercury: " + mercuryDeath +'<br>');

    });
});

},{"./../js/calculator.js":1}]},{},[2]);
