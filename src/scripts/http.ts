import {openTopoDataApiUrl, datasets} from "../config/config.ts";

export async function fetchElevation(lat: number, lon: number) {
  const apiEndpoint = `${openTopoDataApiUrl}/${datasets["Global"]}`;
  const parameters = `locations=${lat},${lon}`;

  const response = await fetch(`${apiEndpoint}?${parameters}`);

  if (!response.ok) {
    throw new Error(`Error occurred: ${response.status}`);
  }

  return await response.json();
}