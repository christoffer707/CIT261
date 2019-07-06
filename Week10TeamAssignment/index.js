
import { getJSON, getLocation } from "./utilities.js";

var baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

getLocation()
.then( (result) => {
   const lat = result.coords.latitude;
   const long = result.coords.longitude;

   baseUrl += '&latitude=' + lat +
                  '&longitude=' + long +
                     '&maxradiuskm=100';

   console.log(baseUrl);

   getJSON(baseUrl)
      .then( (result) => {
         console.log(result);
         var ul = document.querySelector('#quakeList');
         result.features.forEach((features) => {   
            var li = document.createElement('li');
            li.textContent = features.properties.place;
            ul.appendChild(li);
         });
         
      })
});


