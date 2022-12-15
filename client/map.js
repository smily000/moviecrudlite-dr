
var gMap;

function initMap(){
    gMap = new google.maps.Map(document.getElementById('myMapID'),{
        center: {lat: 41.878,lng:10}, zoom:3});

    var marker = new google.maps.Marker({position:{lat:41.6048,lng:-88.0796},map:gMap});
    var infoWindow = new google.maps.infoWindow({content:'lewis unversity'});
    marker.addListener('click',function(){
        infoWindow.open(gMap,marker);
    });
}

function initApplication(){
    console.log('map mania Lite- starting');
}