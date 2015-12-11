window.addEventListener("load",run);

var GLOBAL = {
    data: [],
    world_json: {},
    direction: 0,
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
    // countryCodeMap : {
    //     "United States of America": "USA",
    //     "China, Hong Kong SAR": "CHN",
    //     "Japan": "JPN",
    //     "United Kingdom": "GBR",
    //     "Rep. of Korea" : "KOR",
    //     "Norway": "NOR",
    //     "Canada": "CAN",
    //     "Sweden" : "SWE",
    //     "Various/Unknown": "VAR",
    //     "Netherlands": "NLD",
    //     "Iran (Islamic Rep. of)" : "IRN",
    //     "United Rep. of Tanzania": "TZA",
    //     "Germany": "DEU",
    //     "Singapore": "SGP",
    //     "Denmark": "DNK",
    //     "Switzerland" : "CHE",
    //     "France": "FRA",
    //     "Australia" : "AUS",
    //     "Finland" : "FIN",
    //     "New Zealand": "NZL",
    //     "Luxembourg" : "LUX",
    //     "Belgium" : "BEL",
    //     "Austria": "AUT",
    //     "India": "IND",
    //     "Hong Kong": "HKG",
    //     "United Arab Emirates": "ARE",
    //     "Israel": "ISR",
    //     "Ireland": "IRL",
    //     "Poland": "POL",
    //     "Russian Federation": "RUS",
    //     "Taiwan": "TWN",
    //     "Hungary": "HUN",
    //     "Brazil": "BRA",
    //     "Czech Rep." : "CZE",
    //     "Spain": "ESP",
    //     "Malaysia" : "MYS",
    //     "Italy": "ITA",
    //     "Vietnam": "VNM",
    //     "Turkey" : "TUR",
    //     "Chile": "CHL",
    //     "Indonesia": "IDN",
    //     "Portugal" : "PRT",
    //     "Mexico": "MEX",
    //     "Saudi Arabia" : "SAU",
    //     "Philippines": "PHL",
    //     "Bulgaria": "BGR",
    //     "Thailand": "THA",
    //     "Romania": "ROU",
    //     "Colombia": "COL",
    //     "Peru": "PER",
    //     "Greece": "GRC",
    //     "Egypt": "EGY",
    //     "South Africa": "ZAF",
    //     "Venezuela (Bolivarian Republic of)": "VEN",
    //     "Argentina": "ARG",
    //     "Kenya": "KEN",
    //     "Nigeria": "NGA",
    //     "Ukraine": "UKR",
    //     "Ethiopia": "ETH",
    //     "Namibia":"NAM",
    //     "Chad": "TCD",
    //     "Guatemala": "GTM",
    //     "El Salvador": "SLV",
    //     "Nicaragua": "NIC",
    //     "Lao People's Dem. Rep.": "LAO",
    //     "Kuwait":"KWT",
    //     "Cambodia":"KHM",
    //     "Mozambique": "MOZ",
    //     "Armenia": "ARM",
    //     "Ghana": "GHA",
    //     "Tunisia": "TUN",
    //     "Morocco": "MAR",
    //     "Dem. Rep. of the Congo": "COD",
    //     "Congo": "COG",
    //     "Burundi": "BDI",
    //     "Angola": "AGO",
    //     "Rwanda": "RWA",
    //     "Togo": "TGO",
    //     "Senegal": "SEN",
    //     "Uganda": "UGA",
    //     "Central African Rep.": "CAF",
    //     "Lebanon": "LBN",
    //     "China, Macao SAR": "MAC",
    //     "Nepal": "NPL",
    //     "Serbia and Kosovo (S/RES/1244 (1999))": "SCG",
    //     "Zambia": "ZMB",
    //     "Bhutan": "BTN",
    //     "Cyprus": "CYP",
    //     "Equatorial Guinea": "GNQ",
    //     "Sudan": "SDN",
    //     "Benin": "BEN",
    //     "Gabon": "GAB",
    //     "Cameroon": "CMR",
    //     "Gambia": "GMB",
    //     "Swaziland": "SWZ",
    //     "Sierra Leone": "SLE",
    //     "Botswana": "BWA",
    //     "Costa Rica": "CRI",
    //     "Cuba": "CUB",
    //     "Djibouti": "DJI",
    //     "Algeria": "DZA",
    //     "Ecuador": "ECU",
    //     "Niger": "NER",
    //     "Somalia": "SOM",
    //     "Tibetan": "CHN",
    //     "Panama": "PAN",
    //     "Paraguay": "PRY",
    //     "Bangladesh": "BGD",
    //     "Bolivia (Plurinational State of)": "BOL",
    //     "Honduras": "HND",
    //     "Jordan": "JOR",
    //     "Lesotho": "LSO",
    //     "Syrian Arab Rep.": "SYR",
    //     "Yemen": "YEM",
    //     "Pakistan": "PAK",
    //     "Belize": "BLZ",
    //     "Dominican Rep.": "DOM",
    //     "Dominica": "DMA",
    //     "Papua New Guinea": "PNG",
    //     "Qatar": "QAT",
    //     "Burkina Faso": "BFA",
    //     "Belarus":"BLR",
    //     "Turkmenistan":"TKM",
    //     "Stateless": "STA",
    //     "Zimbabwe": "ZWE",
    //     "Eritrea": "ERI",
    //     "Georgia": "GEO",
    //     "Guinea-Bissau": "GNB",
    //     "Guyana": "GUY",
    //     "Croatia": "HRV",
    //     "Haiti":"HTI",
    //     "Kazakhstan": "KAZ",
    //     "Kyrgyzstan": "KGZ",
    //     "Liberia": "LBR",
    //     "Sri Lanka": "LKA",
    //     "Myanmar": "MMR",
    //     "Mauritania": "MRT",
    //     "Mali": "MLI" ,
    //     "Azerbaijan": "AZE",
    //     "Aruba": "ABW",
    //     "Afghanistan":"AFG",
    //      "Albania" :"ALB",
    //      "Antarctica": "ATA",
    //      "French Southern Territories": "ATF",  //CANT FIND
    //      "Bahamas":"BHS",
    //      "Bosnia and Herzegovina":"BIH",
    //      "Brunei Darussalam":"BRN",
    //      "Coast of Ivory":"CIV",  //Change in the csv
    //      "Estonia":"EST",
    //      "Fiji":"FJI",
    //      "Falkland Islands (Malvinas)":"FLK",
    //      "Guinea":"GIN",    //worry about this later
    //      "Greenland":"GRL",
    //      "Iraq":"IRQ",
    //      "Iceland":"ISL",
    //      "Jamaica":"JAM"  ,
    //      "Libya":"LBY",
    //      "Lithuania":"LTU",
    //      "Latvia":"LVA",
    //      "Rep. of Moldova":"MDA",
    //      "Madagascar":"MDG",
    //      "The former Yugoslav Republic of Macedonia":"MKD",
    //      "Montenegro":"MNE",
    //      "Mongolia":"MNG",
    //      "Malawi":"MWI",
    //      "New Caledonia":"NCL",
    //      "Oman":"OMN",
    //      "Puerto Rico":"PRI",
    //      "Dem. People's Rep. of Korea":"PRK",
    //      "South Sudan": "SDS",
    //      "Solomon Islands":"SLB",
    //      "Serbia":"SRB", //two serbia's?
    //      "Suriname":"SUR",
    //      "Slovakia":"SVK",
    //      "Slovenia":"SVN",
    //      "Tajikistan":"TJK",
    //      "Timor-Leste":"TLS",
    //      "Trinidad and Tobogo":"TTO",
    //      "Uruguay":"URY",
    //      "Uzbekistan":"UZB",
    //      "Vanuatu":"VUT",
    //      "Palestinian": "PSE"
    // }

};

function printValue(sliderID, textbox) {
    var x = document.getElementById(textbox);
    var y = document.getElementById(sliderID);
    x.value = y.value;
}

function run()
{
    d3.select("#entering").on("click", function(){
        switchView(0)
    });
    d3.select("#exiting").on("click", function(){
        switchView(1)
    });
    d3.csv("refugees3.csv", function(data) {
      GLOBAL.data = data;
      console.log("LOADED DATA");

      d3.json("world-topo.json", function(error,world_json)
      {
          // topology is the json data
          GLOBAL.world_json = world_json
          drawMap(world_json, "#mapEntering", 0);
          drawMap(world_json, "#mapExiting", 1);
      });
    });

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
function drawMap(world_json, svgid, direction)
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

    // Set size and position of our svg map
    var svg = d3.select(svgid)
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

    //var upperBound = 10000000;
    var upperBound = 10000000;
    var colorLow = '#0C3B4C', colorMed = '#68CAD8', colorHigh = '#DFE55E';
    var colorScale = d3.scale.linear()
         .domain([0, upperBound/500, upperBound])
         .range([colorLow, colorMed, colorHigh]);

    // Draw countries
    var country = g.selectAll(".country") // will set class once created
    .data(world_json.features)
    .enter()
    .append("path")
    .attr("class", "country")
    .attr("d", path)
    .style("stroke", "gray")
    .style("fill", function(d)
    {
        // console.log(d.id);
        var ref = 0;
        for (var year = 2010; year < 2014; year++)
        {
            ref += getNumRefugees(year, d.id, direction);
        }
        return colorScale(ref);
    });


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
        d3.select("#titleEntering").style("visibility", "visible")
        d3.select("#mapExiting").style("display", "none")
        d3.select("#titleExiting").style("visibility", "hidden")
    }
    else
    {
        // the opposite of above
        d3.select("#mapEntering").style("display", "none")
        d3.select("#titleEntering").style("visibility", "hidden")
        d3.select("#mapExiting").style("display", "block")
        d3.select("#titleExiting").style("visibility", "visible")
    }
}
