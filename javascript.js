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
    });
}


// var color = d3.scale.quantize()
// .range(["rgb(237,248,233)", "rgb(186,228,179)",
// "rgb(116,196,118)", "rgb(49,163,84)","rgb(0,109,44)"]);
