google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawColColors);
      var allTextLines = [];
      var fldHeading = [];
      var fldData =[];
     var dataName=[];
      var dataGrade=new Array();
      var _try=null;
      var name=0, grade=0;

    function parseData(){
       $.get('./data/grades-data.csv', function(txt) {
      
          _try=txt.trim();
          allTextLines= _try.split(/\r\n|\n/);
          fldHeading = allTextLines[0].split(',');
          //console.log(">>>>>"+ (allTextLines.length));

          for(var i=0; i<allTextLines.length; i++)
          {
          fldData = allTextLines[i].split(',');
          name=fldData[0].toString();
          grade=fldData[6].toString();
          //console.log("name>>"+name+"  grade>>"+grade);
          dataName[i]=String(name);
          console.log("in array data name: "+dataName);
          dataGrade.push(grade);
          console.log("in array data grade: "+dataGrade);
        }
        

    
              

var data = google.visualization.arrayToDataTable([
         ['Element', 'Density'],
         [String(dataName[2]), 80],            // RGB value
         ['Silver', 11],            // English color name
         ['Gold', 65],

       ['Platinum', 21.45 ], // CSS-style declaration
      ]);

      var options = {
        title: 'Motivation and Energy Level Throughout the Day',
        colors: ['#9575cd', '#33ac71'],
        hAxis: {
          title: 'Time of Day',
          format: 'h:mm a',
          viewWindow: {
            min: [7, 30],
            max: [17, 30]
          }
        },
        vAxis: {
          title: 'Rating (scale of 1-10)'
        }
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);

});




  }




function drawColColors() {
      parseData();
      

     // ar=parseData();
    //  ar= ar.toString();
      //console.log("ar >> "+ dataName[1]);
     /*  var data = google.visualization.arrayToDataTable([
         ['Element', 'Density'],
         [String(ar[2]), 80],            // RGB value
         ['Silver', 11],            // English color name
         ['Gold', 65],

       ['Platinum', 21.45 ], // CSS-style declaration
      ]);

      var options = {
        title: 'Motivation and Energy Level Throughout the Day',
        colors: ['#9575cd', '#33ac71'],
        hAxis: {
          title: 'Time of Day',
          format: 'h:mm a',
          viewWindow: {
            min: [7, 30],
            max: [17, 30]
          }
        },
        vAxis: {
          title: 'Rating (scale of 1-10)'
        }
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);
      */
    }

function shsh(){
  //var x=["100" , "200" , "300"];
 // console.log("in susususususu: "+ dataName[1]);
}

