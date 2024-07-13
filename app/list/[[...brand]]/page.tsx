import dbConnect from "@/lib/dbConnect";
import CarModel from "@/lib/models/car-model";

export default async function List({ params, searchParams }: any) {
  await dbConnect();

  const cars = await CarModel.find({ ...params, ...searchParams });

  console.log(searchParams);

  return (
    <div>
      <pre>{JSON.stringify(cars, null, 2)}</pre>
    </div>
  );
}
