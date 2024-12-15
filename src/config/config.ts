const defaultCoodrinates = {
  lat: 48.2081,
  lng: 16.3713
}

const proxyUrl = "http://localhost:8080";
const openTopoDataApi = "https://api.opentopodata.org/v1";
const useProxy = true;

const datasets: { [key: string]: string } = {
  "USA": 'ned10m',
  "Europe": 'eudem25m',
  "Global": 'aster30m',
  "Latitude-60-60": 'srtm90m'
};

const openTopoDataApiUrl = useProxy ?
  `${proxyUrl}/${openTopoDataApi}` : openTopoDataApi;

export {datasets, openTopoDataApiUrl, defaultCoodrinates};