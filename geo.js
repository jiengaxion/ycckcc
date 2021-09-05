getLocation() 

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
   
  }
}

function showPosition(position) {
 return ( position.coords.latitude + " " + position.coords.longitude);
}
