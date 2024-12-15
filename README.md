# Elevation calculator

*Solution details*


# Notes 

*Using proxy server to overcome CORS restriction.*

Browser will restrict requests to external API (opentopodata) and they would not work in our case due to 
CORS restriction policies by [opentopodata](https://www.opentopodata.org/). 

To overcome this, we can use a proxy server to adjust the response of the server for our domain, and therefore
pass the CORS validation. For this, I have used [cors-anywhere](https://github.com/Rob--W/cors-anywhere) proxy server.

# Todo

* User can submit latitude and longitude of a location. Either by hand or clicking on a map.
* User sees elevation of the clicked location
* For fetching elevation data use https://www.opentopodata.org/#public-api
* User interface should run in browser
* Source code should be included
* Send result per Mail or make public available on git(lab/hub/whatever)

 