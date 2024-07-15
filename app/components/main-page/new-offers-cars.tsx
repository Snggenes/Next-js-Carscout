import dbConnect from "@/lib/dbConnect";
import CarModel, { TCar } from "@/lib/models/car-model";
import UserInfoModel from "@/lib/models/user-info";
import getSession from "@/lib/getSession";
import MainpageCar from "./mainpage-car";

export default async function NewOffersCars({
  limit
}: {
  limit: number;
}) {
  await dbConnect();
  const cars = await CarModel.find({}).limit(limit);
  const data = JSON.parse(JSON.stringify(cars));

  const session = await getSession();
  const user = session?.user;
  const userInfo =  await UserInfoModel.findOne({ userId: user?.id });
  const parsedUserInfo = JSON.parse(JSON.stringify(userInfo));

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2">
      {data.map((car: TCar) => (
        <MainpageCar key={car._id} car={car} userInfo={parsedUserInfo}/>
      ))}
    </div>
  );
}
