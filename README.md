# Elevation calculator

*Solution details*

See requirements in `requirements.txt`

* App loads the map with the default location set to the user's current location. 
* User can change the location by **clicking on the map** or by **entering the coordinates**.
* Elevation is calculated after submitting the coordinates.
* Latest elevation submitted is displayed.
* History of elevation submissions is displayed.

[Leaflet map library](https://leafletjs.com/) was used with [react leatflet wrapper](https://react-leaflet.js.org/) to display the map and
get the coordinates of the clicked location. 

Initial location is read from the browser's geolocation API.

# Notes 

*Using proxy server to overcome CORS restriction.*

Browser will restrict requests to external API (opentopodata) and they would not work in our case due to 
CORS restriction policies by [opentopodata](https://www.opentopodata.org/). 

To overcome this, we can use a proxy server to adjust the response of the server for our domain, and therefore
pass the CORS validation. For this, I have used [cors-anywhere](https://github.com/Rob--W/cors-anywhere) proxy server.

# Further improvement ideas

* error handling can be improved instead of simple alert
* database can be used to store the history
* more tests for edge cases like validation of coordinates can be added