const $graphic = d3.select('.first-neg');
const $first = $graphic.select('.graphic');

let data = null

function setupChart(){
    let formatted = []
    let groups = ["5", "7", "10"]
    let title = ""

    data.forEach(function(d){
        title = d.variable_harness.split("_")[0]
        for (var i = 0; i < 3; i++){
            var subdata = [
                {category: "filler0", value: 90},
                {category: "filler1", value: Math.abs(d["mean_" + groups[i]]) - d["sd_" + groups[i]]},
                {category: "sd1", value: d["sd_" + groups[i]]},
                {category: "mean", value: 1},
                {category: "sd2", value: d["sd_" + groups[i]]},
                {category: "filler2", value: 5, mean: d["mean_" + groups[i]], sd: d["sd_" + groups[i]]},
        	    {category: "filler3", value: 85 - Math.abs(d["mean_" + groups[i]]) - d["sd_" + groups[i]], mean: d["mean_" + groups[i]], sd: d["sd_" + groups[i]]},
        		{category: "whitespace", value: 180},
            ];
            formatted.push(subdata)
        }
    })

    var width = 300
    var height = 300;

    var color_old = d3.scaleOrdinal()
        .domain([0,1,2,3,4,5,6,7])
        .range(["none", "#f2e5f2", "#cab2d6", "#6a3d9a", "#cab2d6", "#f6f6f6", "#f6f6f6","none"]);

    var color_new = d3.scaleOrdinal()
        .domain([0,1,2,3,4,5,6,7])
        .range(["none","#ffedcc", "#fdbf6f","#ff7f00", "#fdbf6f", "#f6f6f6","#f6f6f6","none"]);

    let svg = $first.append("svg")
      .attr('width', width + 20)
      .attr('height', height + 60)
      .style("overflow", "visible")

    svg.append("text")
        .at("class", "title")
        .at("x", 0)
        .at("y", 20)
        .text(title)

    svg.append("text")
        .at("class", "walking-grade")
        .at("x", 90)
        .at("y", 60)
        .text("5%")

    svg.append("path")
        .at("class", "walking-grade")
        .at("d", "M62 70 L62 68 L 118 68 L118 70")

    svg.append("text")
        .at("class", "walking-grade")
        .at("x", 150)
        .at("y", 60)
        .text("7.5%")

    svg.append("path")
        .at("class", "walking-grade")
        .at("d", "M122 70 L122 68 L 178 68 L178 70")

    svg.append("text")
        .at("class", "walking-grade")
        .at("x", 210)
        .at("y", 60)
        .text("10%")

    svg.append("text")
        .at("class", "walking-grade")
        .at("x", 150)
        .at("y", 45)
        .text("Walking Grade")

    svg.append("path")
        .at("class", "walking-grade")
        .at("d", "M182 70 L182 68 L 238 68 L238 70")

    var radius = 90;
    formatted.forEach(function(d, i){
        var dataset = d
        var donutWidth = 30;

        var arc = d3.arc()
          .innerRadius(radius - donutWidth)
          .outerRadius(radius);

        var pie = d3.pie()
          .value(function(d) { return d.value; })
          .sort(null);

        var path = svg.selectAll('path.arc')
          .data(pie(dataset))
          .enter()
          .append('path')
          .attr('d', arc)
          .attr('fill', function(d) {
            if (i%2 == 1){
                return color_old(d.data.category);
            } else {
                return color_new(d.data.category);
            }
          })
          .at("transform", "translate(0, 80)");

          svg.selectAll('text.arc')
            .data(pie(dataset))
            .enter()
            .append("text")
               .at("class", "donut-labels")
        	   .attr("transform", function(d) {
                    var midAngle = d.endAngle < Math.PI ? d.startAngle/2 + d.endAngle/2 : d.startAngle/2  + d.endAngle/2 + Math.PI ;
                    var td = arc.centroid(d);
                    td[0] *= 1;	//multiply by a constant factor
                    td[1] *= 1;	//multiply by a constant factor
                    return "translate(" + td[0] + "," + (td[1] + 80) + ") rotate(" + (midAngle * 180/Math.PI) + ")";
                  })
                  .attr("dy", ".50em")
                  .style("text-anchor", "start")
                  .html(function(d) {
                    if (d.data.category == "filler2"){
                    return d.data.mean + " &plusmn; " + d.data.sd}
                });

          radius += 30
    })



}

function updateCharts(){

}

function updateDimensions() {
}

function resize() {
	updateDimensions();
	updateCharts()
}

function init() {
	const path = 'assets/data';
	const files = ['measurements_negative'].map(d => `${path}/${d}.csv`);

	d3.loadData(...files, (err, response) => {
        for (var i = 0; i < 10; i += 2){
            data = [response[0][i], response[0][i+1]]
            setupChart();
        }

		resize();
	})

}

export default { init, resize };
