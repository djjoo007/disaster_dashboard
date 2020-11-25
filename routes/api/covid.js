//puts the data into a google column chart
google.charts.load("current", {"packages":["bar"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  const data = google.visualization.arrayToDataTable([
    ["State", "New Cases", "New Deaths"],
    [state, newCases, newDeaths]
  ]);

  var options = {
    chart: {
      title: 'New Cases and New Deaths by State'
    }
  };

  // var chart = new google.charts.Bar(document.getElementById('INSERT DIV ID NAME HERE'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
};

function newCasesByState() {

const queryURL = "https://data.cdc.gov/resource/9mfq-cb36.json?submission_date=" + dateAsOf + "T00:00:00.000&state=" + state

//sets the date to the previous day when covid data was submitted to CDC
const date = new Date();
const prevDate = date.setDate(date.getDate() - 1);
const yyyy = prevDate.getFullYear();
const mm = prevDate.getMonth();
const dd = prevDate.getDate();
const dateAsOf = yyyy + "-" + mm + "-" + dd;

// console.log(dateAsOf);

//create a dropdown of state names with abbreviations
const state = $("#state-input");

//capture the total number of new cases per given state
$.ajax({
  url: queryURL,
  type: "GET",

}).then(function(response) {

  const newCases = response.new_case;
  // console.log(newCases);

  const newDeaths = response.new_death;
  // console.log(newDeaths);

});
};

newCasesByState;
