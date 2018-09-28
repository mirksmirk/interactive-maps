// This isn't necessary but it keeps the editor from thinking L is a typo
/* global L */

var map = L.map('map').setView([68, 18], 8);
    
var campSiteStyle = {
  radius: 4,
  fillColor: "#ff7800",
  stroke: false,
  fillOpacity: .9 
};

// Add base layer
L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
  maxZoom: 18
}).addTo(map);

// Fetch data from our Glitch project
fetch('https://cdn.glitch.com/b4c1a3a9-c348-41cc-a51f-f70cf7af44f4%2FCoordinates_Erics_help_QGIS_v2.geoJSON?1537908960063')
  .then(function (response) {
    // Read data as JSON
    return response.json();
  })
  .then(function (data) {
   var campSites = L.geoJSON(data, {
    pointToLayer: function (geoJsonPoint, latlng) {
     return L.circleMarker(latlng, campSiteStyle);
     },
     
   //commented out style  
     //style: function (geoJsonPoint) {
       //return {
       //campSiteStyle
       //};
     //}
    });
  campSites.addTo(map);
  })
 
  

                          
   
  