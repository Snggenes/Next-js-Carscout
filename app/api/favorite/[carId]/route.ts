import getSession from "@/lib/getSession";
import { NextResponse } from "next/server";
import UserInfoModel from "@/lib/models/user-info";

export async function PUT(
  request: Request,
  { params }: { params: { carId: string } }
) {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userInfo = await UserInfoModel.findOne({ userId: user.id });
  if (!userInfo) {
    const newUserInfo = new UserInfoModel({
      userId: user.id,
      favorites: [params.carId],
    });
    await newUserInfo.save();
    return NextResponse.json({ success: true }, { status: 200 });
  }

  if (userInfo.favorites.includes(params.carId)) {
    userInfo.favorites = userInfo.favorites.filter(
      (id: string) => id !== params.carId
    );
    await userInfo.save();
    return NextResponse.json({ success: true }, { status: 200 });
  }

  userInfo.favorites.push(params.carId);
  await userInfo.save();
  return NextResponse.json({ success: true }, { status: 200 });
}
