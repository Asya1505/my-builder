/**
 * Created by Nik on 12.07.2017.
 */

if((typeof $('#map').val())!== 'undefined'){
    google.maps.event.addDomListener(window, 'load', init);
}

function init() {

    var mapOptions = {
        zoom: 11,
        center: new google.maps.LatLng(54.7387621, 55.9720554),
        styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#243f6e"},{"visibility":"on"}]}]
    };


    var mapElement = document.getElementById('map');


    var map = new google.maps.Map(mapElement, mapOptions);


    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        title: 'Snazzy!'
    });
}