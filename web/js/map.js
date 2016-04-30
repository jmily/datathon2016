
$(document).ready(function(){

    var defaultCityDivText = "Click marker to <br> view City detail";
    $(".city-name").html(defaultCityDivText);

    var map = L.map('map', {zoomControl: false, attributionControl:false, maxZoom:10}).setView([-27.3598147,133.5668867], 4);
    map.scrollWheelZoom.disable();
    map.on('click', onMapClick);
    new L.Control.Zoom({position: 'topright'}).addTo(map);

    var googleRoadMap = new L.Google('ROADMAP');
    map.addLayer(googleRoadMap);

    var googleSatellite = new L.Google('SATELLITE');
    map.addControl(new L.Control.Layers( {'Google RoadMap':googleRoadMap, 'Google Satellite':googleSatellite}, {}));

    var iconSizeX = 32,
        iconSizeY = 32;
    var LeafIcon = L.Icon.extend({
        options: {
            iconSize: [iconSizeX,iconSizeY],
            iconAnchor: [16,32],
            popupAnchor: [32,-2]
        }
    });

    var greenIcon = new LeafIcon({iconUrl:'../img/greenIcon.png'}),
        redIcon = new LeafIcon({iconUrl: '../img/redIcon.png'}),
        blueIcon = new LeafIcon({iconUrl:'../img/blueIcon.png'});

    createMarkersOnMap();

    function createMarkersOnMap(){
        for(var city in cities){
            var marker = L.marker([cities[city].lat, cities[city].lng], {icon: blueIcon});
            marker.cityName = city;
            marker.on('mouseover', onMarkerMouseover);
            marker.on('mouseout', onMarkerMouseout);
            marker.on('mousemove', onMarkerMousemove);
            marker.on('click', onMarkerClick);
            marker.addTo(map);
        }
    }

    function onMapClick(){
        clearMarkerSelection();
        $(".city-name").html(defaultCityDivText);
    }

    function onMarkerMouseover(e){
        var x = e.originalEvent.layerX - 20;
        var y = e.originalEvent.layerY - 590;
        $("#map-tooltip").attr("style","margin-top:"+y+"px;margin-left:"+x+"px;z-index:1000;");
        $("#map-tooltip").show();
        $("#map-tooltip").html("<strong style='font-size:1.2em;'>"+this.cityName+"</strong><br>"+
            "<span style='font-size:0.8em;'>click to show details</span>");
    }

    function onMarkerMouseout(e){
        $("#map-tooltip").hide();
    }

    function onMarkerMousemove(e){
        var x = e.originalEvent.layerX + 30;
        var y = e.originalEvent.layerY - 390;
        $("#map-tooltip").attr("style","margin-top:"+y+"px;margin-left:"+x+"px;z-index:1000;");
    }

    function onMarkerClick(){
        clearMarkerSelection();
        this.setIcon(redIcon);
        $(".city-name").html(this.cityName);
    }

    function clearMarkerSelection(){
        var i=0;
        $.each(map._layers, function () {
            if(i != 0){
                this.setIcon(blueIcon);
            }
            i++;
        });
    }
});

