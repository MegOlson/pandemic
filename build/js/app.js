(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pandemic = exports.Pandemic = function () {
  function Pandemic() {
    _classCallCheck(this, Pandemic);

    this.cities = [["Atlanta", 0], ["Cairo", 0], ["Berlin", 0], ["Beijing", 0], ["Santiago", 0], ["Lagos", 0]];
    this.infectedCities = 0;
  }

  _createClass(Pandemic, [{
    key: "start",
    value: function start() {
      for (var i = 0; i < 3; i++) {
        var index = this.getRandomInt(0, 6);
        if (this.cities[index][1] == 0) {
          this.cities[index][1] += 3;
        } else {
          i--;
        }
      }
      this.infectedCities += 3;
    }
  }, {
    key: "getRandomInt",
    value: function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }, {
    key: "findIndex",
    value: function findIndex(city) {
      for (var i = 0; i < this.cities.length; i++) {
        if (this.cities[i][0] === city) {
          return i;
        }
      }
    }
  }, {
    key: "infectCity",
    value: function infectCity() {
      var _this = this;

      setInterval(function () {
        var index = _this.getRandomInt(0, 6);
        _this.cities[index][1] += 1;
        _this.infectedCities += 1;
      }, 3000);
    }
  }, {
    key: "cureCity",
    value: function cureCity(city) {
      var cureCity = this.findIndex(city);
      this.cities[cureCity][1] = 0;
      this.infectedCities -= 1;
    }
  }]);

  return Pandemic;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _pandemic = require("./../js/pandemic.js");

$(document).ready(function () {
  $("#start-game").click(function (e) {
    e.preventDefault();

    $("#start-game").addClass("hide");
    $(".stats").show();

    var pandemic = new _pandemic.Pandemic();
    pandemic.start();

    $("#atlanta").text("Infection rate: " + pandemic.cities[0][1]);
    $("#cairo").text("Infection rate: " + pandemic.cities[1][1]);
    $("#berlin").text("Infection rate: " + pandemic.cities[2][1]);
    $("#beijing").text("Infection rate: " + pandemic.cities[3][1]);
    $("#santiago").text("Infection rate: " + pandemic.cities[4][1]);
    $("#lagos").text("Infection rate: " + pandemic.cities[5][1]);

    pandemic.infectCity();

    $("#1").click(function () {
      pandemic.cureCity("Atlanta");
      $("#atlanta").text("Infection rate: " + pandemic.cities[0][1]);
    });
    $("#2").click(function () {
      pandemic.cureCity("Cairo");
      $("#cairo").text("Infection rate: " + pandemic.cities[1][1]);
    });
    $("#3").click(function () {
      pandemic.cureCity("Berlin");
      $("#berlin").text("Infection rate: " + pandemic.cities[2][1]);
    });
    $("#4").click(function () {
      pandemic.cureCity("Beijing");
      $("#beijing").text("Infection rate: " + pandemic.cities[3][1]);
    });
    $("#5").click(function () {
      pandemic.cureCity("Santiago");
      $("#santiago").text("Infection rate: " + pandemic.cities[4][1]);
    });
    $("#6").click(function () {
      pandemic.cureCity("Lagos");
      $("#lagos").text("Infection rate: " + pandemic.cities[5][1]);
    });
  });
});

},{"./../js/pandemic.js":1}]},{},[2]);
