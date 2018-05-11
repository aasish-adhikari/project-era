/*
This code has been obtained from google documents for Maps API.
https://developers.google.com/maps/documentation/javascript/tutorial
*/
function initMap() {
        var tangentyere = {lat: -23.699, lng: 133.872};
        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 15,
          center: tangentyere
        });
        var marker = new google.maps.Marker({
          position: tangentyere,
          map: map
        });
      }
google.maps.event.addDomListener(window, 'load', initMap);
