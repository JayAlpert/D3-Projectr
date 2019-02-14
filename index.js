// javascript
var dataset = [0.590946,0.625577,0.626477,0.608001,0.621395,0.598911,0.585009,0.605992,0.597230,0.598279,0.616777,0.613176,0.603862 0.562218,0.547090,0.555713,0.536120,0.544251,0.552761,0.537689,0.535084,0.528030,0.515018,0.518084 ];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);


var svg = d3.select('svg')
   .attr("width", svgWidth)
   .attr("height", svgHeight);

var barChart = svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("y", function(d) {
        return svgHeight - d
   })
   .attr("height", function(d) {
       return d;
   })
   .attr("width", barWidth - barPadding)
   .attr("transform", function (d, i) {
       var translate = [barWidth * i, 0];
       return "translate("+ translate +")";
   });
