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

    this.cities = [["San Francisco", 0], ["Chicago", 0], ["Atlanta", 0], ["Washington", 0], ["New York", 0], ["London", 0], ["Madrid", 0], ["Paris", 0], ["Essen", 0], ["Milan", 0], ["St Petersburg", 0], ["Montreal", 0], ["Los Angeles", 0], ["Mexico City", 0], ["Miami", 0], ["Bogota", 0], ["Lima", 0], ["Santiago", 0], ["Buenos Aires", 0], ["Sao Paulo", 0], ["Lagos", 0], ["Kinshasa", 0], ["Johannesburg", 0], ["Khartoum", 0], ["Algiers", 0], ["Istanbul", 0], ["Cairo", 0], ["Riyadh", 0], ["Baghdad", 0], ["Moscow", 0], ["Tehran", 0], ["Karachi", 0], ["Delhi", 0], ["Kolkata", 0], ["Chennai", 0], ["Mumbai", 0], ["Beijing", 0], ["Seoul", 0], ["Tokyo", 0], ["Shanghai", 0], ["Hong Kong", 0], ["Osaka", 0], ["Taipei", 0], ["Bangkok", 0], ["Ho Chi Minh", 0], ["Jakarta", 0], ["Manila", 0], ["Sydney", 0]];
    this.infectedCities = 0;
    this.outbreaks = 0;
  }

  _createClass(Pandemic, [{
    key: "start",
    value: function start(difficulty) {
      for (var i = 0; i < 8; i++) {
        var index = this.getRandomInt(0, 49);
        if (this.cities[index][1] == 0) {
          this.cities[index][1] += 3;
        } else {
          i--;
        }
      }
      this.difficulty = difficulty;
      this.infectedCities += 8;
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
      var index = this.getRandomInt(0, 49);
      this.cities[index][1] += 1;
      this.infectedCities += 1;
    }
  }, {
    key: "cureCity",
    value: function cureCity(city) {
      var cureCity = this.findIndex(city);
      this.cities[cureCity][1] = 0;
      this.infectedCities -= 1;
    }
  }, {
    key: "outbreak",
    value: function outbreak(city) {
      var outbreakCity = this.findIndex(city);
      this.cities[outbreakCity][1] = 5;
      this.cities[outbreakCity - 1][1] += 1;
      this.cities[outbreakCity + 1][1] += 1;
    }
  }, {
    key: "loser",
    value: function loser() {}
    //
    // winner() {
    //
    // }

  }]);

  return Pandemic;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _pandemic = require("./../js/pandemic.js");

$(document).ready(function () {
  $("#go").submit(function (e) {
    e.preventDefault();
    var difficulty = $("input:radio[name=difficulty]:checked").val();
    $("#go").addClass("hide");
    $(".stats").show();

    var pandemic = new _pandemic.Pandemic();
    pandemic.start(difficulty);

    for (var i = 0; i < 48; i++) {
      var city = pandemic.cities[i][0].replace(/[^A-Z0-9]/ig, "-");
      $("#" + city.toLowerCase()).text("Infection rate: " + pandemic.cities[i][1]);
    }

    var refreshInfectionRate = setInterval(function () {
      pandemic.infectCity();
      for (var _i = 0; _i < 48; _i++) {
        var _city = pandemic.cities[_i][0].replace(/[^A-Z0-9]/ig, "-");
        if (pandemic.cities[_i][1] > 5) {
          pandemic.outbreak(pandemic.cities[_i][0]);
          $("#" + _city.toLowerCase()).text("Infection rate: " + pandemic.cities[_i][1]);
        } else {

          $("#" + _city.toLowerCase()).text("Infection rate: " + pandemic.cities[_i][1]);
        }
      }
    }, difficulty);

    var _loop = function _loop(_i2) {
      $("#" + (_i2 + 1).toString()).click(function () {
        pandemic.cureCity(pandemic.cities[_i2][0]);
        var city = pandemic.cities[_i2][0].replace(/[^A-Z0-9]/ig, "-");
        $("#" + city.toLowerCase()).text("Infection rate: " + pandemic.cities[_i2][1]);
      });
    };

    for (var _i2 = 0; _i2 < 48; _i2++) {
      _loop(_i2);
    }
  });
});

},{"./../js/pandemic.js":1}]},{},[2]);
