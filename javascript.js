window.addEventListener("load",run);

var GLOBAL = {
    data: [],
    world_json: {},
    direction: 0,
    var countryCodeMap = {
        "United States of America": "USA",
        "China, Hong Kong SAR": "CHN",
        "Japan"; "JPN",
        "United Kingdom": "GBR",
        "Rep. of Korea" : "KOR",
        "Norway": "NOR",
        "Canada": "CAN",
        "Sweden" : "SWE",
        "Various/Unknown": "VAR",
        "Netherlands": "NLD",
        "Iran (Islamic Rep. of)" : "IRN",
        "United Rep. of Tanzania": "TZA",
        "Germany": "DEU",
        "Singapore": "SGP",
        "Denmark": "DNK",
        "Switzerland" : "CHE",
        "France": "FRA",
        "Australia" : "AUS",
        "Finland" : "FIN",
        "New Zealand": "NZL",
        "Luxembourg" : "LUX",
        "Belgium" : "BEL",
        "Austria": "AUT",
        "India": "IND",
        "Hong Kong": "HKG",
        "United Arab Emirates": "ARE",
        "Israel": "ISR",
        "Ireland": "IRL",
        "Poland": "POL",
        "Russian Federation": "RUS",
        "Taiwan": "TWN",
        "Hungary": "HUN",
        "Brazil": "BRA",
        "Czech Rep." : "CZE",
        "Spain": "ESP",
        "Malaysia" : "MYS",
        "Italy": "ITA",
        "Vietnam": "VNM",
        "Turkey" : "TUR",
        "Chile": "CHL",
        "Indonesia": "IDN",
        "Portugal" : "PRT",
        "Mexico": "MEX",
        "Saudi Arabia" : "SAU",
        "Philippines": "PHL",
        "Bulgaria": "BGR",
        "Thailand": "THA",
        "Romania": "ROU",
        "Colombia": "COL",
        "Peru": "PER",
        "Greece": "GRC",
        "Egypt": "EGY".
        "South Africa": "ZAF",
        "Venezuela (Bolivarian Republic of)": "VEN",
        "Argentina": "ARG",
        "Kenya": "KEN",
        "Nigeria": "NGA",
        "Ukraine": "UKR",
        "Ethiopia": "ETH",
        "Namibia":"NAM",
        "Chad": "TCD",
        "Guatemala": "GTM",
        "El Salvador": "SLV",
        "Nicaragua": "NIC"
        "Lao People's Dem. Rep.": "LAO",
        "Kuwait":"KWT",
        "Cambodia":"KHM"
        "Mozambique": "MOZ",
        "Armenia": "ARM",
        "Ghana": "GHA",
        "Tunisia": "TUN",
        "Morocco": "MAR"
        "Dem. Rep. of the Congo": "COD",
        "Burundi": "BDI",
        "Angola": "AGO",
        "Rwanda": "RWA",
        "Togo": "TGO",
        "Senegal": "SEN",
        "Uganda": "UGA",
        "Central African Rep.": "CAF",
        "Lebanon": "LBN",
        "China, Macao SAR": "MAC",
        "Nepal": "NPL",
        "Serbia and Kosovo (S/RES/1244 (1999))": "SCG",
        "Zambia": "ZMB",
        "Bhutan": "BTN",
        "Cyprus": "CYP",
        "Equatorial Guinea": "GNQ",
        "Sudan": "SDN",
        "Benin": "BEN",
        "Gabon": "GAB",
        "Cameroon": "CMR",
        "Gambia": "GMB",
        "Swaziland": "SWZ",
        "Sierra Leone": "SLE",
        "Botswana": "BWA",
        "Costa Rica": "CRI",
        "Cuba": "CUB",
        "Djibouti": "DJI",
        "Algeria": "DZA",
        "Ecuador": "ECU",
        "Niger": "NER",
        "Somalia": "SOM",
        "Tibetan": "CHN",
        "Panama": "PAN",
        "Paraguay": "PRY",
        "Bangladesh": "BGD",
        "Bolivia (Plurinational State of)": "BOL",
        "Honduras": "HND",
        "Jordan": "JOR",
        "Lesotho": "LSO",
        "Syrian Arab Rep.": "SYR",
        "Yemen": "YEM",
        "Pakistan": "PAK",
        "Belize": "BLZ",
        "Dominican Rep.": "DOM",
        "Dominica": "DMA",
        "Papua New Guinea": "PNG",
        "Qatar": "QAT",
        "Burkina Faso": "BFA",
        "Belarus":"BLR",
        "Turkmenistan":"TKM",
        "Stateless":, "STA",
        "Zimbabwe": "ZWE",
        "Eritrea": "ERI",
        "Georgia": "GEO",
        "Guinea-Bissau": "GNB",
        "Guyana": "GUY",
        "Croatia": "HRV",
        "Haiti":"HTI",
        "Kazakhstan": "KAZ",
        "Kyrgyzstan": "KGZ",
        "Liberia": "LBR",
        "Sri Lanka": "LKA",
        "Myanmar": "MMR",
        "Mauritania": "MRT",
        "Mali": "MLI" ,
        "Azerbaijan": "AZE",
        "Aruba": "ABW"
    }

};

function run()
{
    d3.select("#entering").on("click", function(){
        switchView(0)
    });
    d3.select("#exiting").on("click", function(){
        switchView(1)
    });
    d3.csv("data/refugees2.csv", function(data) {
      GLOBAL.data = data;
      console.log("LOADED DATA");
      console.log(data);
      console.log(getNumRefugees("1964", "India", 0));
      console.log(getNumRefugees("1964", "Tibetan", 1));

      d3.json("world-topo.json", function(error,world_json)
      {
          // topology is the json data
          GLOBAL.world_json = world_json
          // attachVALToWorldData(world_json,data);
          drawMap(world_json);
      });
    });

}

// get data for a specific year, country
// count for refugees entering the given country
// direction: 0 = in, 1 = out
function getNumRefugees(year, countryCode, direction)
{
    country = getCountryName(countryCode);
    // to find the json tag for the correct direction
    var country_tag;
    if (direction == 0)
    {
        country_tag = "Country"; // change the csv tag
    }
    else
    {
        country_tag = "Origin";
    }

    var total = 0;

    // loop through all rows by index
    for (var index in GLOBAL.data)
    {
        // if correct country and year
        if (GLOBAL.data[index][country_tag] === country && GLOBAL.data[index]["Year"] === year)
        {
            // add to total
            total += parseInt(GLOBAL.data[index]["Total Population"]);
        }
    }
    return total;
}

// returns country name from code
function getCountryName(countryCode)
{
    return countryCode;
}

// Get browser width
function availableWidth ()
{
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}

// Get browser height
function availableHeight ()
{
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

// Draw a map of the world based on the json world_json
function drawMap(world_json)
{
    // Find available width and height based on browser size
    var browserMargin = 50;
    var availWidth = availableWidth() - browserMargin;
    var availHeight = availableHeight() - browserMargin;

    // Aspect ratio of map
    var mapWidth = 760;
    var mapHeight = 380;

    // The scale between the browser and map aspect ratio
    var scaleH = availHeight / mapHeight;
    var scaleW = availWidth / mapWidth;

    // Find the scale factor of the limiting dimention
    var scale = Math.min(scaleH,scaleW);

    // Choose the actual height and width of the csv
    var height = scale * mapHeight;
    var width = scale * mapWidth;

    // saved_height = height;
    // saved_width = width;

    // Set size and position of our svg map
    var svg = d3.select("#mapEntering")
    .attr("x",0)
	.attr("y",0)
	.attr("width", width)
	.attr("height", height)

    // Making group with correct scale and translation
    var g = svg.append("g")
	.attr("transform","scale("+scale+"),translate(-100,0)");

    // Uses a mercator map, centered and unrotated
    var projection = d3.geo.mercator()
	.center([0, 0 ])
	.scale(100)
	.rotate([0,0]);

    // Make a path from the projection
    var path = d3.geo.path()
	.projection(projection);

    var upperBound = 10000000;

    // Draw countries
    var country = g.selectAll(".country") // will set class once created
    .data(world_json.features)
    .enter()
    .append("path")
    .attr("class", "country")
    .attr("d", path)
    .style("stroke", "gray");


}

// switching views between entering and exiting refugees
function switchView(direction)
{
    // get the svg elements
    svgEntering = document.getElementById("mapEntering");
    svgExiting = document.getElementById("mapExiting");

    if (direction == 0) // if the entering button was clicked
    {
        // show the entering svg and hide the exiting svg
        d3.select("#mapEntering").style("display", "block")
        d3.select("#mapExiting").style("display", "none")
        GLOBAL.direction = 0; // and set the global var
    }
    else
    {
        // the opposite of above
        d3.select("#mapEntering").style("display", "none")
        d3.select("#mapExiting").style("display", "block")
        GLOBAL.direction = 1; // again
    }
}

// var color = d3.scale.quantize()
// .range(["rgb(237,248,233)", "rgb(186,228,179)",
// "rgb(116,196,118)", "rgb(49,163,84)","rgb(0,109,44)"]);
