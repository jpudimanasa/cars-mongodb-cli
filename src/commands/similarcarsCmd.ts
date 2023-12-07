import { car } from "../models/cars";

export const similarcarsCmd = async () => {
  console.log("Similar cars from our stock:");
  const similarCarsStock = await car.find({});
  console.log(`Found ${similarCarsStock.length} cars in our stock`);
  console.log(similarCarsStock);
};
