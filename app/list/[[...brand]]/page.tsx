import dbConnect from "@/lib/dbConnect";
import CarModel from "@/lib/models/car-model";

export default async function List({ params, searchParams }: any) {
  await dbConnect();

  const { model, price, year } = searchParams;
  let brand: string | undefined;
  if (params.brand) {
    brand = params.brand[0];
  }

  let brandsWithModels = await CarModel.aggregate([
    {
      $group: {
        _id: "$brand",
        models: { $addToSet: "$model" },
      },
    },
  ]);

  brandsWithModels = brandsWithModels.map((brandWithModels) => {
    return {
      brand: brandWithModels._id,
      models: brandWithModels.models,
    };
  });

  const brands = brandsWithModels.map(
    (brandWithModels) => brandWithModels.brand
  );
  let models: string[];
  if (brand) {
    models = brandsWithModels.find(
      (brandWithModels) => brandWithModels.brand === brand
    )?.models;
  } else {
    models = [];
  }

  const query: any = {};
  if (brand !== "undefined") {
    if (brand && typeof brand === "string") {
      query.brand = brand;
    }
  }
  if (model !== "undefined") {
    if (model && typeof model === "string") {
      // query.model = model;
      if (
        brandsWithModels
          .find((brandWithModels) => brandWithModels.brand === brand)
          ?.models.includes(model)
      ) {
        query.model = model;
      }
    }
  }
  if (year && !isNaN(parseInt(year))) {
    query.year = { $gte: parseInt(year) };
  }
  if (price && !isNaN(parseInt(price))) {
    query.price = { $lte: parseInt(price) };
  }

  const cars = await CarModel.find(query);

  return (
    <div>
      <pre>{JSON.stringify(cars, null, 2)}</pre>
    </div>
  );
}
