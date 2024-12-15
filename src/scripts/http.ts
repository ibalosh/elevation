import {OPEN_TOPO_DATA_API_URL, DATASETS} from "../config/config";

export async function fetchElevation(lat: number, lon: number) {
  const apiEndpoint = `${OPEN_TOPO_DATA_API_URL}/${DATASETS["Global"]}`;
  const parameters = `locations=${lat},${lon}`;

  const response = await fetch(`${apiEndpoint}?${parameters}`);

  if (!response.ok) {
    throw new Error(`Error occurred: ${response.status}`);
  }

  return await response.json();
}