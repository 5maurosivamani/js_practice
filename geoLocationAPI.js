/**
 * Geo Location API
 */

// navigator.geolocation object will provide the user location
if (navigator.geolocation) {
  console.log("Your browser supports the Geolocation API!");

  //   navigator.geolocation.getCurrentPosition(success, error, {
  //     // enableHighAccuracy: true,
  //     timeout: 0,
  //     maximumAge: 10 * 60 * 1000, // 0 means it will get the latest position
  //   });

  // geolocation.watchPosition method
  const watcher = navigator.geolocation.watchPosition(success, error);

  // clear watcher
  setTimeout(function () {
    navigator.geolocation.clearWatch(watcher);
  }, 15000);
} else {
  console.log("Your browser does not support the Geolocation API!");
}

function success(position) {
  // console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  console.log(`https://www.google.com/maps/@${lat},${lon}`);
}

/**
 * Error code
 * (I). Code: 1 -> Permission denied
 * (II). Code: 2 -> Position unavailable
 * (III). Code: 3 -> Time out
 */
function error(error) {
  switch (error.code) {
    case 1:
      console.log("User denied the request for Geolocation.");
      break;
    case 2:
      console.log("Location service is unavailable.");
      break;
    case 3:
      console.log("The request to get user location timed out.");
      break;
    default:
      console.log("We couldn't retrieve your current location");
      break;
  }
}
