# Elevation calculator

![](https://github.com/ibalosh/elevation/actions/workflows/testing.yml/badge.svg)

*Solution details*

See requirements in `requirements.txt`

* App loads the map with the default location set to the user's current location. 
* User can change the location by **clicking on the map** or by **entering the coordinates**.
* Elevation is calculated after submitting the coordinates.
* Latest elevation submitted is displayed.
* Recent history of elevation submissions is displayed.
* History of all elevation submissions is displayed on separate page.

[Leaflet map library](https://leafletjs.com/) was used with [react leatflet wrapper](https://react-leaflet.js.org/) to display the map and
get the coordinates of the clicked location. 

Initial location is read from the browser's geolocation API.

# Pre-requisites

To run the app, install the dependencies. 

# Running the app

Run commands can be found in `package.json` file.

```bash
 npm run dev # run the app
<<<<<<< HEAD
```

# Further improvement ideas

* error handling can be improved instead of simple alert
* database can be used to store the history (like suggested prisma)
* more tests for edge cases like validation of coordinates can be added
* app can be switched to Next.js for better performance

# Next JS version

Next.js version of the app can be found in the [next-elevation branch](https://github.com/ibalosh/elevation/pull/1)
=======
```
>>>>>>> next-elevation
