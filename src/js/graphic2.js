const $graphic = d3.select('.second');
const $first = $graphic.select('.graphic');

let data = null

function setupChart(){
    let formatted = []
    let groups = ["5", "7", "10"]
    let title = data[1].variable_harness.split("_")[0]

    var width = 300
    var height = 300;

    var color_old = d3.scaleOrdinal()
        .domain([0,1,2,3,4,5])
        .range(["#f6f6f6", "#cab2d6", "#6a3d9a", "#cab2d6", "#f2e5f2", "none"]);

    var color_new = d3.scaleOrdinal()
        .domain([0,1,2,3,4,5])
        .range(["#f6f6f6", "#fdbf6f", "#ff7f00", "#fdbf6f", "#ffedcc", "none"]);

    let svg = $first.append("svg")
      .attr('width', width + 20)
      .attr('height', height + 60)
      .style("overflow", "visible")

    svg.append("text")
        .at("class", "title")
        .at("x", 0)
        .at("y", 10)
        .text(title)

    svg.append("text")
        .at("class", "walking-grade")
        .at("x", -150)
        .at("y", 0)
        .at("transform", "rotate(-90)")
        .text("(" + data[1].metric + ")")

    svg.append("text")
        .at("class", "walking-grade")
        .at("x", 90)
        .at("y", 270)
        .text("5%")

    svg.append("path")
        .at("class", "walking-grade")
        .at("d", "M62 258 L62 260 L 118 260 L118 258")

    svg.append("text")
        .at("class", "walking-grade")
        .at("x", 150)
        .at("y", 270)
        .text("7.5%")

    svg.append("path")
        .at("class", "walking-grade")
        .at("d", "M122 258 L122 260 L 178 260 L178 258")

    svg.append("text")
        .at("class", "walking-grade")
        .at("x", 210)
        .at("y", 270)
        .text("10%")

    svg.append("text")
        .at("class", "walking-grade")
        .at("x", 150)
        .at("y", 288)
        .text("Walking Grade")

    svg.append("path")
        .at("class", "walking-grade")
        .at("d", "M182 258 L182 260 L 238 260 L238 258")

    data.forEach(function(d, i){
        var dataset = d
        var r = data[1] //reference point
        var old_new = d.variable_harness.split("_")[1]

        var xScale = d3.scaleLinear()
            .domain([5, 7, 10])
            .range([90, 150, 210])

        var yScale = d3.scaleLinear()
            .domain([0, Math.ceil(+d3.max([r.mean_5, r.mean_7, r.mean_10]) + +(r.mean_10/10))])
            .range([210, 0])

        var yAxis = d3.axisLeft(yScale)

        var yG = svg.append("g")
            .at("transform", "translate(40,40)")
            .call(yAxis)

        let groups = ["5", "7", "10"]
        for (var i = 0; i < 3; i++){
            svg.append("rect")
                .at("width", 24)
                .at("height", 2 * (210-yScale(d["sd_" + groups[i]])))
                .at("x", function(){
                    if (old_new == "old") { return xScale(groups[i]) - 25}
                    else return xScale(groups[i]) + 1
                })
                .at("y", yScale(+d["mean_" + groups[i]] + +d["sd_" + groups[i]]) + 40)
                .style("fill",function(){
                    if (old_new == "old") { return "#fdbf6f"}
                    else return "#cab2d6"
                })

            svg.append("rect")
                .at("width", 24)
                .at("height", 2)
                .at("x", function(){
                    if (old_new == "old") { return xScale(groups[i]) - 25}
                    else return xScale(groups[i]) + 1
                })
                .at("y", yScale(d["mean_" + groups[i]]) -1  + 40)
                .style("fill",function(){
                    if (old_new == "old") { return "#ff7f00"}
                    else return "#6a3d9a"
                })

            svg.append("text")
                .at("class", "bar-labels")
                .at("x", function(){
                    if (old_new == "old") { return xScale(groups[i]) - 25 + 12}
                    else return xScale(groups[i]) + 1 + 12
                })
                .at("y", function(){
                    if (old_new == "old") { return yScale(+d["mean_" + groups[i]] + +d["sd_" + groups[i]]) + 30}
                    else return yScale(+d["mean_" + groups[i]] - +d["sd_" + groups[i]]) + 48
                })
                .html("<b>" + d["mean_" + groups[i]] + " </b>&plusmn; " + d["sd_" + groups[i]])
                .call(wrap, 30)
        }

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
	const files = ['measurements_bars'].map(d => `${path}/${d}.csv`);

	d3.loadData(...files, (err, response) => {
        for (var i = 0; i < 20; i += 2){
            data = [response[0][i], response[0][i+1]]
            setupChart();
        }

		resize();
	})

}

function wrap(text, width) {
    text.each(function () {
           var text = d3.select(this),
           	words = text.text().split(/\s+/).reverse(),
               word,
               line = [],
               lineNumber = 0,
               lineHeight = 1.1, // ems
               x = text.attr("x"),
               y = text.attr("y"),
               dy = 0, //parseFloat(text.attr("dy")),
               tspan = text.text(null)
                           .append("tspan")
                           .attr("x", x)
                           .attr("y", y)
                           .attr("dy", dy + "em");
           while (word = words.pop()) {
               line.push(word);
               tspan.text(line.join(" "));
               if (tspan.node().getComputedTextLength() > width) {
                   line.pop();
                   tspan.text(line.join(" "));
                   line = [word];
                   tspan = text.append("tspan")
                               .attr("x", x)
                               .attr("y", y)
                               .attr("dy", ++lineNumber * lineHeight + dy + "em")
                               .text(word);
               }
           }
       });
}

export default { init, resize };
