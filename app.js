'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  hourlySales: [],
  totalCookies: 0,
  cookiesPerHr: function() {
    for (var i = 0; i < hours.length; i++) {
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
    for (var i = 0; i < hours.length; i++) {
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
    for (var i = 0; i < hours.length; i++) {
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
    for (var i = 0; i < hours.length; i++) {
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
    for (var i = 0; i < hours.length; i++) {
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
  var storeName = document.createElement('p');
  var newList = document.createElement('ul');
  storeName.innerHTML = store.location;
  var section = document.getElementsByTagName('section');
  section[0].appendChild(storeName);
  section[0].appendChild(newList);
  for (var k = 0; k < store.hourlySales.length; k++) {
    var newItem = document.createElement('li');
    newItem.innerHTML = hours[k] + ': ' + store.hourlySales[k] + ' cookies.';
    newList.appendChild(newItem);
  }
  var dailyTotal = document.createElement('li');
  dailyTotal.innerHTML = 'Total: ' + store.totalCookies + ' cookies.' ;
  newList.appendChild(dailyTotal);
}

salesByStore(firstAndPike);
salesByStore(seaTac);
salesByStore(seattleCenter);
salesByStore(capitolHill);
salesByStore(alki);
