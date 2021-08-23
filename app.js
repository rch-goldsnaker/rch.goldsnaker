//efecto el boton hamburgesa

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function() {
  sidebar.classList.toggle("active");
  if(sidebar.classList.contains("active")){
  sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
}else
  sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}

// gauge temperature 1 google

google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart_1);

function drawChart_1() {

  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Temp[°C]', 0]
  ]);

  var options = {
    width: 250, height: 250,
    redFrom: 140, redTo: 180,
    yellowFrom:130, yellowTo: 140,
    minorTicks: 10,
    max:180,
    min:0,

  };

  var chart = new google.visualization.Gauge(document.getElementById('chart_div_1'));

  chart.draw(data, options);

  setInterval(function() {
    data.setValue(0, 1, 80 + Math.round(5 * Math.random()));
    chart.draw(data, options);
  }, 1000);
}

// gauge temperature 2 google

google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart_2);

function drawChart_2() {

    var data = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['Temp[°C]', 0]
    ]);
  
    var options = {
      width: 250, height: 250,
      redFrom: 100, redTo: 250,
      yellowFrom:90, yellowTo: 100,
      minorTicks: 10,
      max:250,
      min:-40,
    };
  
    var chart = new google.visualization.Gauge(document.getElementById('chart_div_2'));
  
    chart.draw(data, options);
  
    setInterval(function() {
      data.setValue(0, 1, 35 + Math.round(5 * Math.random()));
      chart.draw(data, options);
    }, 1000);
  }

  // gauge temperature 3 google

  google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart_3);

function drawChart_3() {

    var data = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['Temp[°C]', 0]
    ]);
  
    var options = {
      width: 250, height: 250,
      redFrom: 110, redTo: 250,
      yellowFrom:100, yellowTo: 110,
      minorTicks: 10,
      max:250,
      min:-40,
    };
  
    var chart = new google.visualization.Gauge(document.getElementById('chart_div_3'));
  
    chart.draw(data, options);
  
    setInterval(function() {
      data.setValue(0, 1, 60 + Math.round(5 * Math.random()));
      chart.draw(data, options);
    }, 1000);
  }

  // guage line chart google

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawLogScales);

function drawLogScales() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'T-1');
      data.addColumn('number', 'T-4');
      data.addColumn('number', 'T-6');

      data.addRows([
        [0, 80, 37,64], 
        [1, 81, 33,63], 
        [2, 83, 35,65], 
        [3, 79, 40,62], 
        [4, 85, 36,67], 
        [5, 80, 37,64], 
        [6, 81, 33,63], 
        [7, 83, 35,65], 
        [8, 79, 40,62], 
        [9, 85, 36,67], 
        [10, 80, 37,64], 
        [11, 81, 33,63], 
        [12, 83, 35,65], 
        [13, 79, 40,62], 
        [14, 85, 36,67], 
        [15, 80, 37,64], 
        [16, 81, 33,63], 
        [17, 83, 35,65], 
        [18, 79, 40,62], 
        [19, 85, 36,67], 
        [20, 80, 37,64], 
        [21, 81, 33,63], 
        [22, 83, 35,65], 
        [23, 79, 40,62], 
        [24, 85, 36,67], 
        [25, 80, 37,64], 
        [26, 81, 33,63], 
        [27, 83, 35,65], 
        [28, 79, 40,62], 
        [29, 85, 36,67], 
        [30, 85, 36,67], 
      ]);

      var options = {
        hAxis: {
          title: 'Time[hr]',
          logScale: false
        },
        vAxis: {
          title: 'Temperature[°C]',
          logScale: false
        },
        colors: ['#a52714', '#097138'],
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div_4'));
      chart.draw(data, options);
    }

     // guage table chart google

    google.charts.load('current', {'packages':['table']});
    google.charts.setOnLoadCallback(drawTable);

    function drawTable() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'TAG');
      data.addColumn('string', 'Description');
      data.addColumn('string', 'Location');
      data.addColumn('string', 'Range');
      data.addColumn('number', 'Alarm');
      data.addColumn('number', 'Trip');
      data.addRows([
        ['T-1','STATOR WINDING RTD PHASE U','STATOR','0 to 180°C',  {v: 130, f: '130°C'}, {v: 140, f: '140°C'}],
        ['T-2','STATOR WINDING RTD PHASE V','STATOR','0 to 180°C',  {v: 130, f: '130°C'}, {v: 140, f: '140°C'}],
        ['T-3','STATOR WINDING RTD PHASE W','STATOR','0 to 180°C',  {v: 130, f: '130°C'}, {v: 140, f: '140°C'}],
        ['T-4','BEARING RTD','NON DRIVE END','-40 to 250°C',  {v: 95, f: '90°C'}, {v: 100, f: '100°C'}],
        ['T-5','BEARING RTD','DRIVE END','-40 to 250°C',  {v: 95, f: '90°C'}, {v: 100, f: '100°C'}],
        ['T-6','HOT AIR RTD','CASING','-40 to 250°C',  {v: 100, f: '100°C'}, {v: 110, f: '110°C'}],
        ['T-7','COLD AIR RTD','CASING','-40 to 250°C',  {v: 55, f: '55°C'}, {v: 65, f: '65°C'}],
      ]);

      var table = new google.visualization.Table(document.getElementById('table_div'));

      table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
    }