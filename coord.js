divlat = document.getElementById("latitude");
divlong = document.getElementById("longitude");
divalt = document.getElementById("altitude");

viewerDiv.addEventListener('click', function(e) {
  var coord = globeView.controls.pickGeoPosition(e);
  affichage_coord(coord);
});

function affichage_coord(coord){
  var long = coord._values[0];
  var lat = coord._values[1];
  var alt = coord._values[2];
  divlong.innerHTML = Math.floor(long*10000)/10000;
  divlat.innerHTML = Math.floor(lat*10000)/10000;
  divalt.innerHTML = Math.floor(alt);
}
