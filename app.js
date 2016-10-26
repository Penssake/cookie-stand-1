'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Location(location, minCust, maxCust, avgCookies) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.hourlySales = [];
  // Non-functioning staffing code stuff
  // this.staffingNeeds = [];
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
    var table = document.getElementsByTagName('table')[0];
    table.insertBefore(newRow, document.getElementById('footer-row'));
    // document.getElementsByTagName('table')[0].appendChild(newRow);
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
  // Non-functioniing staffing code stuff.
  // this.calcStaffing = function() {
  //   for (var i = 0; i < this.hourlySales.length; i++) {
  //     var staffNumber = Math.round(this.hourlySales[i] / 20);
  //     if (staffNumber < 2) {
  //       staffNumber = 2;
  //     }
  //     this.staffingNeeds.push(staffNumber);
  //   }
  // };
  // this.renderStaffing = function() {
  //   this.calcStaffing();
  //   var newRow = document.createElement('tr');
  //   document.getElementsByTagName('table')[0].appendChild(newRow);
  //   var rowTitle = document.createElement('td');
  //   rowTitle.innerText = this.location;
  //   newRow.appendChild(rowTitle);
  //   for (var i = 0; i < this.hourlySales.length; i++) {
  //     var td = document.createElement('td');
  //     td.innerText = this.hourlySales[i];
  //     newRow.appendChild(td);
  //   }
  // };
  locationArray.push(this);
};

var locationArray = [];

// Begin old code
//
// function createTableAndTitle() {
//   var section = document.getElementById('content');
//   var tableTitle = document.createElement('p');
//   tableTitle.innerText = 'Cookies Needed By Location Each Day';
//   section.appendChild(tableTitle);
//   var newTable = document.createElement('table');
//   section.appendChild(newTable);
// }
//
// function createHeaderRow() {
//   var headerRow = document.createElement('tr');
//   document.getElementsByTagName('table')[0].appendChild(headerRow);
//   var blankSpace = document.createElement('th');
//   headerRow.appendChild(blankSpace);
//   for (var i = 0; i < hours.length; i ++) {
//     var th = document.createElement('th');
//     th.innerText = hours[i];
//     headerRow.appendChild(th);
//   }
//   var totalSales = document.createElement('th');
//   totalSales.innerText = 'Total';
//   headerRow.appendChild(totalSales);
// }
//
// function renderSalesData() {
//   for (var j = 0; j < locationArray.length; j++){
//     locationArray[j].renderSales();
//   }
// }
//
// function createFooterRow() {
//   var footerRow = document.createElement('tr');
//   document.getElementsByTagName('table')[0].appendChild(footerRow);
//   var totalRow = document.createElement('td');
//   totalRow.innerText = 'Totals';
//   footerRow.appendChild(totalRow);
//   for (var k = 0; k < hours.length; k++) {
//     var l = 0;
//     var sum = document.createElement('td');
//     sum.innerText = locationArray[l].hourlySales[k];
//     footerRow.appendChild(sum);
//     l++;
//   }
//   var grandTotal = document.createElement('td');
//   var sumOfSums = 0;
//   for (var m = 0; m < locationArray.length; m++) {
//     sumOfSums += locationArray[m].totalCookies;
//   }
//   grandTotal.innerHTML = sumOfSums;
//   footerRow.appendChild(grandTotal);
// }
//
// function listAllSales() {
//   createTableAndTitle();
//   createHeaderRow();
//   renderSalesData();
//   createFooterRow();
// }
//
// End old code

function createTableTitle(title) {
  var section = document.getElementById('sales-table');
  var tableTitle = document.createElement('p');
  tableTitle.innerText = title;
  section.appendChild(tableTitle);
}

function createTable(tableID) {
  var section = document.getElementById('sales-table');
  var newTable = document.createElement('table');
  newTable.id = tableID;
  section.appendChild(newTable);
}

function createHeaderRow(tableID) {
  var headerRow = document.createElement('tr');
  // document.getElementsByTagName('table')[0].appendChild(headerRow);
  document.getElementById(tableID).appendChild(headerRow);
  var blankSpace = document.createElement('th');
  headerRow.appendChild(blankSpace);
  for (var i = 0; i < hours.length; i++) {
    var th = document.createElement('th');
    th.innerText = hours[i];
    headerRow.appendChild(th);
  }
}

function addLocationTotals() {
  var totalSales = document.createElement('th');
  totalSales.innerText = 'Total';
  document.getElementsByTagName('tr')[0].appendChild(totalSales);
}

function renderSalesData() {
  for (var i = 0; i < locationArray.length; i++) {
    locationArray[i].renderSales();
  }
}

// Non-fucntioning staff table code
// function renderStaffingData() {
//   for (var i = 0; i < locationArray.length; i++) {
//     locationArray[i].renderStaffing();
//   }
// }

function createFooterRow(tableID) {
  var footerRow = document.createElement('tr');
  footerRow.id = 'footer-row';
  // document.getElementsByTagName('table')[0].appendChild(footerRow);
  document.getElementById(tableID).appendChild(footerRow);
  var totalRow = document.createElement('td');
  totalRow.innerText = 'Totals: ';
  footerRow.appendChild(totalRow);
  // Not sure why this doesn't work when the next block does.
  // for (var i = 0; i < locationArray.length; i++) {
  //   for (var j = 0; j < hours.length; j++) {
  //     var sum = document.createElement('td');
  //     sum.innerText = locationArray[i].hourlySales[j];
  //     footerRow.appendChild(sum);
  //     console.log(sum.innerText);
  //   }
  // }
  for (var i = 0; i < hours.length; i++) {
    var j = 0;
    var sum = document.createElement('td');
    sum.innerText = locationArray[j].hourlySales[i];
    footerRow.appendChild(sum);
    j++;
  }
  var grandTotal = document.createElement('td');
  var sumOfSums = 0;
  for (var k = 0; k < locationArray.length; k++) {
    sumOfSums += locationArray[k].totalCookies;
  }
  grandTotal.innerHTML = sumOfSums;
  footerRow.appendChild(grandTotal);
}

function renderAllSales(title, tableID) {
  createTableTitle(title);
  createTable(tableID);
  createHeaderRow(tableID);
  addLocationTotals();
  renderSalesData();
  createFooterRow(tableID);
}
// Non-functioniing staffing code
// function renderAllStaffing(title, tableID) {
//   createTableTitle(title);
//   createTable(tableID);
//   createHeaderRow(tableID);
//   renderStaffingData();
//   createFooterRow();
// }

new Location('1st and Pike', 23, 65, 6.3);
new Location('SeaTac Airport', 3, 24, 1.2);
new Location('Seattle Center', 11, 38, 3.7);
new Location('Capitol Hill', 20, 38, 2.3);
new Location('Alki', 2, 16, 4.6);

// listAllSales(); Old code

renderAllSales('Cookies Needed By Location Per Day', 'sales');
// renderAllSales('Staffing Needed By Hour'); Non-functioning staffing stuff
function harvest(event){
  event.preventDefault();
  var newLocation = document.getElementById('new-location').value;
  var newMinCust = parseInt(document.getElementById('new-min-cust').value);
  var newMaxCust = document.getElementById('new-max-cust').value;
  var newAvgCookie = document.getElementById('new-avg-cookies').value;
  new Location(newLocation, newMinCust, newMaxCust, newAvgCookie);
  console.log(newLocation);
  locationArray[locationArray.length - 1].renderSales();
  document.getElementById('new-location').value = '';
  document.getElementById('new-min-cust').value = '';
  document.getElementById('new-max-cust').value = '';
  document.getElementById('new-avg-cookies').value = '';
}

document.getElementById('submit-button').addEventListener('click', harvest);
