'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Location(location, minCust, maxCust, avgCookies) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.hourlySales = [];
  this.totalCookies = 0;
  this.randomCookieGen = function() {
    for (var i = 0; i < hours.length; i++) {
      var randomNum = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + minCust);
      var randomSales = Math.round(randomNum * this.avgCookies);
      this.hourlySales.push(randomSales);
      this.totalCookies += this.hourlySales[i];
    }
  };
  this.renderSales = function() {
    this.randomCookieGen();
    var newRow = document.createElement('tr');
    document.getElementsByTagName('table')[0].appendChild(newRow);
    var rowTitle = document.createElement('td');
    rowTitle.innerText = this.location;
    newRow.appendChild(rowTitle);
    for (var i = 0; i < this.hourlySales.length; i++) {
      var td = document.createElement('td');
      td.innerText = this.hourlySales[i];
      newRow.appendChild(td);
    }
    var tally = document.createElement('td');
    tally.innerText = this.totalCookies;
    newRow.appendChild(tally);
  };
  locationArray.push(this);
};

var locationArray = [];

function createTableAndTitle() {
  var section = document.getElementById('content');
  var tableTitle = document.createElement('p');
  tableTitle.innerText = 'Cookies Needed By Location Each Day';
  section.appendChild(tableTitle);
  var newTable = document.createElement('table');
  section.appendChild(newTable);
}

function createHeaderRow() {
  var headerRow = document.createElement('tr');
  document.getElementsByTagName('table')[0].appendChild(headerRow);
  var blankSpace = document.createElement('th');
  headerRow.appendChild(blankSpace);
  for (var i = 0; i < hours.length; i ++) {
    var th = document.createElement('th');
    th.innerText = hours[i];
    headerRow.appendChild(th);
  }
  var totalSales = document.createElement('th');
  totalSales.innerText = 'Total';
  headerRow.appendChild(totalSales);
}

function renderSalesData() {
  for (var j = 0; j < locationArray.length; j++){
    locationArray[j].renderSales();
  }
}

function createFooterRow() {
  var footerRow = document.createElement('tr');
  document.getElementsByTagName('table')[0].appendChild(footerRow);
  var totalRow = document.createElement('td');
  totalRow.innerText = 'Totals';
  footerRow.appendChild(totalRow);
  for (var k = 0; k < hours.length; k++) {
    var l = 0;
    var sum = document.createElement('td');
    sum.innerText = locationArray[l].hourlySales[k];
    footerRow.appendChild(sum);
    l++;
  }
  var grandTotal = document.createElement('td');
  var sumOfSums = 0;
  for (var m = 0; m < locationArray.length; m++) {
    sumOfSums += locationArray[m].totalCookies;
  }
  grandTotal.innerHTML = sumOfSums;
  footerRow.appendChild(grandTotal);
}

function listAllSales() {
  createTableAndTitle();
  createHeaderRow();
  renderSalesData();
  createFooterRow();
}

function staffingRequirements() {
  var locationIndex = 0;
  for (var i = 0; i < locationArray[locationIndex].hourlySales.length; i++) {
    var staff = locationArray[locationIndex].hourlySales[i] / 20;
    locationIndex++;
    console.log(staff);
  }
}

new Location('1st and Pike', 23, 65, 6.3);
new Location('SeaTac Airport', 3, 24, 1.2);
new Location('Seattle Center', 11, 38, 3.7);
new Location('Capitol Hill', 20, 38, 2.3);
new Location('Alki', 2, 16, 4.6);

listAllSales();

staffingRequirements();
