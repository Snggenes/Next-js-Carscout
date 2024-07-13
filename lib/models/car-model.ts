import mongoose, { Schema } from "mongoose";

export type TCar = {
  brand: string;
  model: string;
  price: number;
  year: number;
  km: number;
  fuel: string;
  transmission: string;
  body: string;
};

const CarSchema = new Schema<TCar>({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  year: { type: Number, required: true },
  km: { type: Number, required: true },
  fuel: { type: String, required: true },
  transmission: { type: String, required: true },
  body: { type: String, required: true },
});

const CarModel = mongoose.models.Car || mongoose.model("Car", CarSchema);

export default CarModel;
