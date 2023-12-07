import { carsArray } from "../carStock";
import { car } from "../models/cars";

export const seedCmd = async () => {
  console.log("Seeding cars");
  const result = await car.insertMany(carsArray);
  console.log(result);
};
