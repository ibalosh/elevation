import prisma from '@/lib/prismaClient';

export async function createElevation(lat:number,lng: number, elevation: number) {
  try {
    const result = await prisma.elevation.create({
      data: {
        elevation: elevation,
        lat: lat,
        lng: lng
      }
    })
    console.log(result);
  } catch (error) {
    await prisma.$disconnect();
    process.exit(1);
  }
}

export async function getElevations(count: number) {
  try {
    const allElevations = await prisma.elevation.findMany(
      {
        take: count, // Limits the result to 5 records
        orderBy: {
          id: 'desc'
        },
      }
    );
    await prisma.$disconnect();
    return allElevations;
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
}
