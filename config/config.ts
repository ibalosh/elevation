const OPEN_TOPO_DATA_API_URL = "https://api.opentopodata.org/v1";

const DATASETS: { [key: string]: string } = {
  "USA": 'ned10m',
  "Europe": 'eudem25m',
  "Global": 'aster30m',
  "Latitude-60-60": 'srtm90m'
};

export {DATASETS, OPEN_TOPO_DATA_API_URL};