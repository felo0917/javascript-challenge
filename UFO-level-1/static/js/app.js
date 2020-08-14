// from data.js
var tableData = data;

// console.log(tableData);
// Step 1: Loop Through `data` and console.log each UFO sighting
var tbody = d3.select("tbody");


// For loop for all the entries
data.forEach(function(ufoSighting) {
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(function([key, value]) {
    // Append a cell to the row for each value
    var cell = row.append("td");
    cell.text(value);
  });
});


//Loop over entries and create click button to select date
function handleClick() {
  var date = d3.select('#datetime').property('value');
  console.log(date);
  if (!date) return;
  tbody.html('');
  var filterData = tableData;
  var filterDate = filterData.filter(row => row.datetime == date);
  console.log(filterDate);
  filterDate.forEach(function(ufoSighting) {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

d3.select('#filter-btn').on('click', handleClick)