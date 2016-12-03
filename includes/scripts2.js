  google.charts.load('current', {packages: ['corechart','line','table' , 'bar']});
google.setOnLoadCallback(drawVisualization);



      $(function() {
        // when document loads, grab the json
      $.get('data/grades-data.csv', function(txt) {
     var allTextLines = [];
      var fldHeading = [];
      var fldData =[];
      var dataName=[];
      var dataGrade=[];
      var _try;
      var name,grade;
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
        // once grabbed, we run this callback

        // setup the new map and its variables
        var map = new google.visualization.DataTable();
          map.addRows(dataGrade.length);  // length gives us the number of results in our returned data
          map.addColumn('string', 'name');
            map.addColumn('string', 'grade');

        // now we need to build the map data, loop over each result
        $.each(fldData, function(i,v) {
          // set the values for both the name and the population
          map.setValue(i, 0, String(dataName));
          map.setValue(i, 1, String(dataGrade));
        });
        // finally, create the map!
        var geomap = new google.visualization.GeoMap(
              document.getElementById('visualization'));
             geomap.draw(map, null);

      });
   });



















      /*window.onload=function() {

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
          /* for(var x=0; x<allTextLines.length ; x++)
            {
              for(var i=0; i<fldHeading.length; i++)
              {fldData[x][i] = allTextLines.split(',');
              console.log(fldData[x]);
             }
           }
        });

      }*/



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

      function drawStuff() {
      
        parse_csv();
         var i;
         var data = new google.visualization.arrayToDataTable();
        data.addColumn('string', 'dataName');                                              
        data.addColumn('string', 'dataGrade');

        for(i = 1; i < dataName.length; i++)
          {data.addRow([dataName[i], dataGrade[i]]);}


         var chart= new google.charts.Bar(document.getElementById('dual_y_div')).
          draw(data, {});


    }


  



      /*  var options = {
          width: 1000,
          chart: {
            title: 'Final-Grades by Name',
            subtitle: ''
          },
          series: {
            0: { axis: 'name' }, // Bind series 0 to an axis named 'distance'.
            1: { axis: 'grades' } // Bind series 1 to an axis named 'brightness'.
          },
          axes: {
            y: {
              name: {label: 'final grade' , showTextEvery: 1}, // Left y-axis.
              grades: {side: 'right', label: 'name'} // Right y-axis.
            }
          }
        };
*/    //----------
         //var chart= new google.charts.Bar(document.getElementById('dual_y_div')).
       //   draw(data, options);

    //  var chart = new google.charts.Bar(document.getElementById('dual_y_div'));
     // chart.draw(data, options);
   