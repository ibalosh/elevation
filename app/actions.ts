'use server'

import {createElevation} from "@/lib/prisma";
import {fetchElevation} from "@/lib/http";

export async function createElevationAction(lat: number, lng: number) {
  let elevation = null;
  try {
    console.log(`Fetching elevation for lat: ${lat} and lng: ${lng}`);
    elevation = await fetchElevation(lat, lng)
    await createElevation(lat, lng, elevation);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error occurred: ${error.message}`);
      console.error(`Error occurred: ${error.stack}`);
   }
   else {
      console.error("Error occurred");
   }

   throw error;
  }

  return elevation;
}