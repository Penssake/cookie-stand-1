'use strict';

// var store = {
//   location: 'Location',
//   minCust: x,
//   maxCust: y,
//   avgCookies: z,
//   cookiesPerHr: function (){
//     return Math.round((Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust) * avgCookies);
//   }
// };

var firstAndPike = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  hourlySales: [],
  totalCookies: 0,
  cookiesPerHr: function() {
    for (i = 0; i <= 14; i++) {
      var randomNum = Math.round((Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust) * this.avgCookies);
      this.hourlySales.push(randomNum);
    }
    for (var j = 0; j < this.hourlySales.length; j++) {
      this.totalCookies += this.hourlySales[j];
    }
  }
};

var seaTac = {
  location: 'SeaTac AirPort',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  hourlySales: [],
  totalCookies: 0,
  cookiesPerHr: function() {
    for (i = 0; i <= 14; i++) {
      var randomNum = Math.round((Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust) * this.avgCookies);
      this.hourlySales.push(randomNum);
    }
    for (var j = 0; j < this.hourlySales.length; j++) {
      this.totalCookies += this.hourlySales[j];
    }
  }
};

var seattleCenter = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  hourlySales: [],
  totalCookies: 0,
  cookiesPerHr: function() {
    for (i = 0; i <= 14; i++) {
      var randomNum = Math.round((Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust) * this.avgCookies);
      this.hourlySales.push(randomNum);
    }
    for (var j = 0; j < this.hourlySales.length; j++) {
      this.totalCookies += this.hourlySales[j];
    }
  }
};

var capitolHill = {
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  hourlySales: [],
  totalCookies: 0,
  cookiesPerHr: function() {
    for (i = 0; i <= 14; i++) {
      var randomNum = Math.round((Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust) * this.avgCookies);
      this.hourlySales.push(randomNum);
    }
    for (var j = 0; j < this.hourlySales.length; j++) {
      this.totalCookies += this.hourlySales[j];
    }
  }
};

var alki = {
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  hourlySales: [],
  totalCookies: 0,
  cookiesPerHr: function() {
    for (i = 0; i <= 14; i++) {
      var randomNum = Math.round((Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust) * this.avgCookies);
      this.hourlySales.push(randomNum);
    }
    for (var j = 0; j < this.hourlySales.length; j++) {
      this.totalCookies += this.hourlySales[j];
    }
  }
};

function salesByStore(store) {
  store.cookiesPerHr();
  for (var k = 0; k < store.hourlySales.length; k++) {
    var newListItem = document.createElement('li');
    var newListText = document.createTextNode(store.hourlySales[k] + ' cookies');
    newListItem.appendChild(newListText);
    var position = document.getElementById('firstAndPike')[0];
    position.appendChild(newListItem);
  }
}

salesByStore(firstAndPike);
