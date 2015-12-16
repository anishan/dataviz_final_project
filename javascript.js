window.addEventListener("load",run);

var GLOBAL = {
    data: [], // holds the csv data (only used initialy to add data to json)
    year: 1982,
    world_json: {}, // json featurs world map
    direction: 0, // 0=entering, 1=exiting
    timer: 0,
    countryCodeMap: {
        "USA": "United States of America",
        "CHN": "China, Hong Kong SAR",
        "JPN": "Japan",
        "GBR": "United Kingdom",
        "KOR": "Rep. of Korea",
        "NOR": "Norway",
        "CAN": "Canada",
        "SWE": "Sweden",
        "VAR": "Various/Unknown",
        "NLD": "Netherlands",
        "IRN": "Iran (Islamic Rep. of)",
        "TZA": "United Rep. of Tanzania",
        "DEU": "Germany",
        "SGP": "Singapore",
        "DNK": "Denmark",
        "CHE": "Switzerland",
        "FRA": "France",
        "AUS": "Australia",
        "FIN": "Finland",
        "NZL": "New Zealand",
        "LUX": "Luxembourg",
        "BEL": "Belgium",
        "AUT": "Austria",
        "IND": "India",
        "HKG": "Hong Kong",
        "ARE": "United Arab Emirates",
        "ISR": "Israel",
        "IRL": "Ireland",
        "POL": "Poland",
        "RUS": "Russian Federation",
        "TWN": "Taiwan",
        "HUN": "Hungary",
        "BRA": "Brazil",
        "CZE": "Czech Rep.",
        "ESP": "Spain",
        "MYS": "Malaysia",
        "ITA": "Italy",
        "VNM": "Vietnam",
        "TUR": "Turkey",
        "CHL": "Chile",
        "IDN": "Indonesia",
        "PRT": "Portugal",
        "MEX": "Mexico",
        "SAU": "Saudi Arabia",
        "PHL": "Philippines",
        "BGR": "Bulgaria",
        "THA": "Thailand",
        "ROU": "Romania",
        "COL": "Colombia",
        "PER": "Peru",
        "GRC": "Greece",
        "EGY": "Egypt",
        "ZAF": "South Africa",
        "VEN": "Venezuela (Bolivarian Republic of)",
        "ARG": "Argentina",
        "KEN": "Kenya",
        "NGA": "Nigeria",
        "UKR": "Ukraine",
        "ETH": "Ethiopia",
        "NAM": "Namibia",
        "TCD": "Chad",
        "SLV": "El Salvador",
        "NIC": "Nicaragua",
        "LAO": "Lao People's Dem. Rep.",
        "KWT": "Kuwait",
        "KHM": "Cambodia",
        "MOZ": "Mozambique",
        "ARM": "Armenia",
        "GHA": "Ghana",
        "TUN": "Tunisia",
        "MAR": "Morocco",
        "COD": "Dem. Rep. of the Congo",
        "COG": "Congo",
        "BDI": "Burundi",
        "AGO": "Angola",
        "RWA": "Rwanda",
        "TGO": "Togo",
        "SEN": "Senegal",
        "UGA": "Uganda",
        "CAF": "Central African Rep.",
        "UGA": "Uganda",
        "CAF": "Central African Rep.",
        "LBN": "Lebanon",
        "MAC": "China, Macao SAR",
        "NPL": "Nepal",
        "SCG": "Serbia and Kosovo (S/RES/1244 (1999))",
        "ZMB": "Zambia",
        "BTN": "Bhutan",
        "CYP": "Cyprus",
        "GNQ": "Equatorial Guinea",
        "SDN": "Sudan",
        "BEN": "Benin",
        "GAB": "Gabon",
        "CMR": "Cameroon",
        "GMB": "Gambia",
        "SWZ": "Swaziland",
        "SLE": "Sierra Leone",
        "BWA": "Botswana",
        "CRI": "Costa Rica",
        "CUB": "Cuba",
        "DJI": "Djibouti",
        "DZA": "Algeria",
        "ECU": "Ecuador",
        "NER": "Niger",
        "SOM": "Somalia",
        "CHN": "Tibetan",
        "PAN": "Panama",
        "PRY": "Paraguay",
        "BGD": "Bangladesh",
        "BOL": "Bolivia (Plurinational State of)",
        "HND": "Honduras",
        "JOR": "Jordan",
        "LSO": "Lesotho",
        "SYR": "Syrian Arab Rep.",
        "YEM": "Yemen",
        "PAK": "Pakistan",
        "BLZ": "Belize",
        "DOM": "Dominican Rep.",
        "DMA": "Dominica",
        "PNG": "Papua New Guinea",
        "QAT": "Qatar",
        "BFA": "Burkina Faso",
        "BLR": "Belarus",
        "TKM": "Turkmenistan",
        "STA": "Stateless",
        "ZWE": "Zimbabwe",
        "ERI": "Eritrea",
        "GEO": "Georgia",
        "GNB": "Guinea-Bissau",
        "GUY": "Guyana",
        "HRV": "Croatia",
        "HTI": "Haiti",
        "KAZ": "Kazakhstan",
        "KGZ": "Kyrgyzstan",
        "LBR": "Liberia",
        "LKA": "Sri Lanka",
        "MMR": "Myanmar",
        "MRT": "Mauritania",
        "MLI": "Mali",
        "AZE": "Azerbaijan",
        "ABW": "Aruba",
        "AFG": "Afghanistan",
        "ALB": "Albania",
        "ATA": "Antarctica",
        "ATF": "French Southern Territories",
        "BHS": "Bahamas",
        "BIH": "Bosnia and Herzegovina",
        "BRN": "Brunei Darussalam",
        "CIV": "Coast of Ivory",
        "EST": "Estonia",
        "FJI": "Fiji",
        "FLK": "Falkland Islands (Malvinas)",
        "GIN": "Guinea",
        "GRL": "Greenland",
        "IRQ": "Iraq",
        "ISL": "Iceland",
        "JAM": "Jamaica",
        "LBY": "Lybia",
        "LTU": "Lithuania",
        "LVA": "Latvia",
        "MDA": "Rep. of Moldova",
        "MDG": "Madagascar",
        "MKD": "The former Yugoslav Republic of Macedonia",
        "MNE": "Montenegro",
        "MNG": "Mongolia",
        "MWI": "Malawi",
        "NCL": "New Caledonia",
        "OMN": "Oman",
        "PRI": "Puerto Rico",
        "PRK": "Dem. People's Rep. of Korea",
        "SDS": "South Sudan",
        "SLB": "Solomon Islands",
        "SRB": "Serbia",
        "SUR": "Suriname",
        "SVK": "Slovakia",
        "SVN": "Slovenia",
        "TJK": "Tajikistan",
        "TLS": "Timor-Leste",
        "TTO": "Trinidad and Tobogo",
        "URY": "Uruguay",
        "UZB": "Uzbekistan",
        "VUT": "Vanuatu",
        "PSE": "Palestinian"
    }
};

// Run: load data and create initial map
function run()
{
    // Initialize elements of page with their correct listeners

    // Slider for year
    var slider = document.getElementById("slider");
     slider.addEventListener("change", function(){
         document.getElementById("output").innerHTML = this.value;
    });

    // Entering button
    d3.select("#entering").on("click", function(){
        switchView(0)
    });

    // Exiting button
    d3.select("#exiting").on("click", function(){
        switchView(1)
    });

    // Play button
    d3.select("#playButton").on("click", function(){
        playYears();
    });

    // Load countries borders and data numbers from json
    d3.json("world-topo-data2.json", function(error,world_json)
    {
      // topology is the json data
      GLOBAL.world_json = world_json;
      console.log(world_json);

      drawMap(world_json, "#mapSVG", 0, GLOBAL.year);
      colorLegend("#legend");
    });
}

// Display the year from the slider
function printValue(sliderID, textbox) {
    var x = document.getElementById(textbox);
    var y = document.getElementById(sliderID);
    x.value = y.value;
}

// Animate showing refugee data over time
function playYears()
{
    // Start at initial time or 1951
    drawMap(GLOBAL.world_json, "#mapSVG", GLOBAL.direction, 1951);
    GLOBAL.year = 1951;

    // Do pauses with setInterval, calling aminate function
    GLOBAL.timer = setInterval(function()
    {
        animate();
    }, 500) // Pause for 500 milliseconds
}

// Draws one frame of the animation
function animate()
{
    //Stop after the end of the data
    if (GLOBAL.year == 2013)
    {
        clearInterval(GLOBAL.timer);
    }

    // Draw the map
    drawMap(GLOBAL.world_json, "#mapSVG", GLOBAL.direction, GLOBAL.year);
    GLOBAL.year++;

    // Move the slider
    document.getElementById("slider").value = GLOBAL.year;
    document.getElementById("output").innerHTML = GLOBAL.year;
}

// Used to add our refugee data to the world json
function attachVALToWorldData(world_json, data)
{
    var features = world_json.features;

    // For every country
    for (var i = 0; i < features.length; i++)
    {
        // For every year
        for (var year = 1951; year <= 2013; year++)
        {
            // Find the total number of refugees from the csv
            string_year = year.toString();
            features[i][string_year] = [];
            features[i][string_year].push(getNumRefugees(year, features[i].id, 0));
            features[i][string_year].push(getNumRefugees(year, features[i].id, 1));
        }
    }
}

// Clear the svg
function clearSVG(svgid)
{
    var svg = document.getElementById(svgid);
    while(svg.lastChild)
    {
        svg.removeChild(svg.lastChild);
    }
}

// get data for a specific year, country
// count for refugees entering the given country
// direction: 0 = in, 1 = out
function getNumRefugees(year, countryCode, direction)
{
    year = year.toString();
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
    return GLOBAL.countryCodeMap[countryCode];
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
function drawMap(world_json, svgid, direction, year)
{
    clearSVG(svgid.substring(1,svgid.length));
    // Find available width and height based on browser size
    var browserMargin = 0;
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

    // Set size and position of our svg map
    var svg = d3.select(svgid)
    .attr("x",0)
	.attr("y",0)
	.attr("width", width)
	.attr("height", height)

    // Making group with correct scale and translation
    var g = svg.append("g")
	.attr("transform","scale("+scale+"),translate(-150,0)");

    // Uses a mercator map, centered and unrotated
    var projection = d3.geo.mercator()
	.center([0, 0 ])
	.scale(100)
	.rotate([0,0]);

    // Make a path from the projection
    var path = d3.geo.path()
	.projection(projection);

    //var upperBound = 10000000;
    var upperBound = 1000000;
    var colorLow = '#2B7984', colorMed = '#3CB6BE', colorHigh = '#95D2D7';
    var colorScale = d3.scale.linear()
         .domain([0, upperBound])  //simulated log scale
         .range([colorLow, colorHigh]);

    // Text field for the number
    var valueCaption = svg.append("text")
        .attr("x", width * 0.35 )
        .attr("y", height * 0.85)
        .attr("dy", "0.3em")
        .attr("fill", "#FE9A2E")
        .style("font-size", "36px");

    // Text field for the country name
    var countryCaption = svg.append("text")
        .attr("x", width * 0.35 )
        .attr("y", height * 0.9)
        .attr("dy", "0.3em")
        .attr("fill", "#FE9A2E")
        .style("font-size", "36px");

    // Draw countries
    var country = g.selectAll(".country") // will set class once created
    .data(world_json.features)
    .enter()
    .append("path")
    .attr("class", "country")
    .attr("d", path)
    .style("stroke", "black")
    .style("stroke-width", .5)
    .style("fill", function(d)
    {
        var year_string = year.toString();
        return colorScale(d[year_string][direction]);
    })
    .on("mouseover", function(d)
    {
        var year_string = year.toString();
        this.style.fill = "#FE9A2E";
        countryCaption.text(getCountryName(d.id))
        valueCaption.text(d[year_string][direction]);
    })
    .on("mouseout", function(d)
    {
        var year_string = year.toString();
        this.style.fill = colorScale(d[year_string][direction]);
        countryCaption.text(" ")
        valueCaption.text(" ");
    });
}

// Make a legend for colors
function colorLegend(svgid)
{
    var colorLow = '#2B7984';
    var colorHigh = '#95D2D7';
    var upperBound = 3000000;
    var linear = d3.scale.linear()
    .domain([0, upperBound])
    .range([colorLow, colorHigh]);

    var svg = d3.select(svgid);

    svg.append("g")
    .attr("class", "legendLinear")
    .attr("fill", "#95D2D7")
    .attr("transform", "translate(20,20)");

    var legendLinear = d3.legend.color()
    .shapeWidth(10)
    .shapeHeight(50)
    .cells(6)
    .orient('vertical')
    .scale(linear);

    svg.select(".legendLinear")
    .call(legendLinear);
}

// Update map based on time slider value
function outputUpdate(time)
{
    document.getElementById("output").innerHTML = time;
    GLOBAL.year = time;
    if(GLOBAL.direction == 1)
    {
        drawMap(GLOBAL.world_json, "#mapSVG", GLOBAL.direction, GLOBAL.year);
    }
    else
    {
        drawMap(GLOBAL.world_json, "#mapSVG", GLOBAL.direction, GLOBAL.year);
    }
}

// switching views between entering and exiting refugees
function switchView(direction)
{
    if (direction == 0) // if the entering button was clicked
    {
        // show the entering svg and hide the exiting svg
        document.getElementById("titleText").innerHTML = "Refugees Entering";
        GLOBAL.direction = 0;
        drawMap(GLOBAL.world_json, "#mapSVG",GLOBAL.direction, GLOBAL.year);
    }
    else
    {
        // the opposite of above
        GLOBAL.direction = 1;
        document.getElementById("titleText").innerHTML = "Refugees Exiting";
        drawMap(GLOBAL.world_json, "#mapSVG",GLOBAL.direction, GLOBAL.year);
    }
}
// References
// http://d3-legend.susielu.com/ for a color legend
