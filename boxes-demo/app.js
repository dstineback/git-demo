function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*function StoreLocation (name){
  this.name = name;

};

hourlyData = [];
StoreLocation.prototype.setData = function(){
  this.pizzaSold = getRandom(min, max);
  this.deliveriesMade = getRandom(min, max);
};

StoreLocation.prototype.addHourlyData = function(time){
  this.hourlyData.push({time: time});
};

ballard.setData(2, 10);
eastlake.setData(5, 15);

var ballard = new StoreLocation('Ballard');
var eastlake = new StoreLocation('Eastlake');

var literal = {
  name: 'slug',
  getSomething: function(){
    console.log(this.name);
  }
//};*/



//create and Element
//Set its attiributes
//set it content
//add it to the dom

//create at table
// create a row
//creat th and add them to the row

function genorateRow(inputArray) {
  var row = document.createElement('tr');
  var col;
  for (var i = 0; i < inputArray.length; i++) {
    col = document.createElement('td');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
};


function genorateHeadingRow(inputArray) {
  var row = document.createElement('tr');
  var col;
  for (var i = 0; i < inputArray.length; i++) {
    col = document.createElement('th');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
};
var peopleTable = document.createElement('table');

var firstRow = genorateRow(['name', 'age', 'lang']);
var secondRow = genorateRow(['dun', '',]'jave');
peopleTable.appendChild(secondRow);
peopleTable.appendChild(firstRow);
//var rowOne = document.createElement('tr');
//peopleTable.appendChild(rowOne);
//var rowOneColOne = document.createElement('th');
//rowOneColOne.textContentent = "name";
//rowOne.appendChild(rowOneColOne);

//document.getElementById('table-demo').appendChild(peopleTable);
