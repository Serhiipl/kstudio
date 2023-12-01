
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 54.381409, lng: 18.602851 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 20,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;