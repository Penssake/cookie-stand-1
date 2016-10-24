'use strict';

// var store = {
//   location: 'Location',
//   minCust: x,
//   maxCust: y,
//   avgCookies: z,
//   avgPerHr: function (){
//     return Math.round((Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust) * avgCookies);
//   }
// };

var firstAndPike = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  avgPerHr: function() {
    return Math.round((Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust) * this.avgCookies);
  }
};

var seaTac = {
  location: 'SeaTac AirPort',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  avgPerHr: function() {
    return Math.round((Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust) * this.avgCookies);
  }
};

var seattleCenter = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  avgPerHr: function() {
    return Math.round((Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust) * this.avgCookies);
  }
};

var capitolHill = {
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  avgPerHr: function() {
    return Math.round((Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust) * this.avgCookies);
  }
};

var alki = {
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  avgPerHr: function() {
    return Math.round((Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust) * this.avgCookies);
  }
};
