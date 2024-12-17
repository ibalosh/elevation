const proxyUrl = "http://localhost:8080";
const OPEN_TOPO_DATA_API = "https://api.opentopodata.org/v1";
const USE_PROXY = true;

const DATASETS: { [key: string]: string } = {
  "USA": 'ned10m',
  "Europe": 'eudem25m',
  "Global": 'aster30m',
  "Latitude-60-60": 'srtm90m'
};

const OPEN_TOPO_DATA_API_URL = USE_PROXY ?
  `${proxyUrl}/${OPEN_TOPO_DATA_API}` : OPEN_TOPO_DATA_API;

export {DATASETS, OPEN_TOPO_DATA_API_URL};