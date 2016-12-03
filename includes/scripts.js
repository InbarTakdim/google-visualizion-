google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);
var allTextLines = [];
var fldHeading = [];
var fldData =[];
var dataName=[];
var dataGrade=[];
var _try;
var name,grade;

function parse_csv(){
        jQuery.get("data/grades-data.csv" , function(txt){
          _try=txt.trim();
          allTextLines= _try.split(/\r\n|\n/);
          fldHeading = allTextLines[0].split(',');
          console.log(">>>>>"+ (allTextLines.length));

          for(var i=0; i<allTextLines.length; i++)
          {
          fldData = allTextLines[i].split(',');
          name=fldData[0];
          grade=fldData[6];
          //console.log("name>>"+name+"  grade>>"+grade);
          dataName.push(name);
          dataGrade.push(grade);
          }

        console.log("--------");
        //for(var i=0; i<allTextLines.length-1; i++)
        console.log(dataName);
          });
}

function drawBasic() {
      parse_csv();
      var ar=[10,20,30,40,50,60];
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'name');
      data.addColumn('number', 'grade');
        for(var j=0; j<19 ; j++)
         { data.addRows([
              ["shai"+j , dataGrade[j]]
                ]);
         }   
      var options = {
        width: 1500,
        title: 'Motivation Level Throughout the Day',
        hAxis: {
          title: 'Time of Day',
          format: 'h:mm a',
          viewWindow: {
            min: [7, 30, 0],
            max: [17, 30, 0]
          }
        },
        vAxis: {
          title: 'Rating (scale of 1-10)'
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

      chart.draw(data, options);
    }