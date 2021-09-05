getLocation() 

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
   
  }
}

function showPosition(position) {
 alert( position.coords.latitude + " " + position.coords.longitude)
}
