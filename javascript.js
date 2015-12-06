window.addEventListener("load",run);

var GLOBAL = {
    data: []
};

function run()
{
    d3.csv("data/data.csv", function(data) {
      GLOBAL.data = data;
      console.log(data);
      console.log("LOADED DATA");
      console.log(GLOBAL.data[0]["AreaName"]);
    });

    sampleMap()
}

function sampleMap()
{
    var width = 960,
        height = 500;

    var projection = d3.geo.kavrayskiy7(),
        color = d3.scale.category20(),
        graticule = d3.geo.graticule();

    var path = d3.geo.path()
        .projection(projection);

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height);

    svg.append("path")
        .datum(graticule)
        .attr("class", "graticule")
        .attr("d", path);

    svg.append("path")
        .datum(graticule.outline)
        .attr("class", "graticule outline")
        .attr("d", path);

    d3.json("data/world-50m.json", function(error, world) {
      var countries = topojson.feature(world, world.objects.countries).features,
          neighbors = topojson.neighbors(world.objects.countries.geometries);

      svg.selectAll(".country")
          .data(countries)
        .enter().insert("path", ".graticule")
          .attr("class", "country")
          .attr("d", path)
          .style("fill", function(d, i) { return color(d.color = d3.max(neighbors[i], function(n) { return countries[n].color; }) + 1 | 0); });
    });
}


// var color = d3.scale.quantize()
// .range(["rgb(237,248,233)", "rgb(186,228,179)",
// "rgb(116,196,118)", "rgb(49,163,84)","rgb(0,109,44)"]);
