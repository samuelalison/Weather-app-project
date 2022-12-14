// init storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather  = new Weather(weatherLocation.city);
// init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
 document.getElementById('w-change-btn').addEventListener('click', (e) =>{
   const city = document.getElementById('city').value;
 
weather.changeLocation(city);

// Set loction in LS
storage.setLocationData(city);

  // Get and display weather
  getWeather(); 

   // Close modal
  $('#locModal').modal('hide');
 });
  


 ; 


function getWeather(){
  weather.getWeather()
    .then(results => {
        ui.paint(results);
        console.log(results);
    })
    .catch(err => console.log(err));
}
