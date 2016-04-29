
$(document).ready(function(){
    var map = L.map('map', {zoomControl: false, attributionControl:false, maxZoom:10}).setView([-19.3598147,145.5668867], 3);
    map.scrollWheelZoom.disable();
    new L.Control.Zoom({position: 'topright'}).addTo(map);

    var googleRoadMap = new L.Google('ROADMAP');
    map.addLayer(googleRoadMap);

    var googleSatellite = new L.Google('SATELLITE');
    map.addControl(new L.Control.Layers( {'Google RoadMap':googleRoadMap, 'Google Satellite':googleSatellite}, {}));

    createMarkersOnMap();

    // var greenIcon = new poiIcon({iconUrl:'../img/header-bg.jpg'});
    // var redIcon = new poiIcon({iconUrl:'../img/header-bg.jpg'});

    function createMarkersOnMap(){

        // var markerOptions = {
        //     icon: greenIcon,
        //     draggable: false
        // };
        // var marker = L.marker([melbourne.lat, melbourne.lng], markerOptions);
        // map.addLayer(marker);

        var marker;
        for(var i in cities){
            marker = L.marker([cities[i].lat, cities[i].lng]).addTo(map);
        }
    }
});

