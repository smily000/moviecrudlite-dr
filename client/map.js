const { ServerDescriptionChangedEvent } = require("mongodb");

var gMap;

function initMap(){
    gMap = new google.maps.Map(document.getElementById('myMapID'),{
        center: {lat: 37.0902,lng:-95.7129}, zoom:3});
    
        var marker1 = new google.maps.Marker({position:{lat:41.6048,lng:-88.0796},map:gMap});
        marker1.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
        var infoWindow = new google.maps.InfoWindow({content:"We are located in Lewis University"});
            marker1.addListener('click', function() {
                infoWindow.open(gMap, marker1);
                ++score
                SetScore(score)

                
        });
        var marker2 = new google.maps.Marker({position:{lat:41.6475,lng:-88.0895},map:gMap});
        marker2.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
        var infoWindow = new google.maps.InfoWindow({content:"We are also located in Lewis University"});
            marker2.addListener('click', function() {
                infoWindow.open(gMap, marker2);
                ++score
                SetScore(score)

                
        });
        
    
       
   
}

function initApplication(){
    console.log('map mania Lite- starting');
}