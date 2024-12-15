# Elevation calculator

![](https://github.com/ibalosh/elevation/actions/workflows/testing.yml/badge.svg)

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

# Installation

To run the app, install the dependencies. To run it locally run proxy-anywhere beforehand.

# Notes 

*Using proxy server to overcome CORS restriction.*

Browser will restrict requests to external API (opentopodata) and they would not work in our case due to 
CORS restriction policies by [opentopodata](https://www.opentopodata.org/). 

To overcome this, we can use a proxy server to adjust the response of the server for our domain, and therefore
pass the CORS validation. For this, I have used [cors-anywhere](https://github.com/Rob--W/cors-anywhere) proxy server.

# Running the app

Run commands can be found in `package.json` file.

```bash
 npm run cors # run the proxy server
 npm run dev # run the app
```

# Further improvement ideas

* error handling can be improved instead of simple alert
* database can be used to store the history (like suggested prisma)
* more tests for edge cases like validation of coordinates can be added
* app can be switched to Next.js for better performance