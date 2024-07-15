import mongoose, { Schema } from "mongoose";

export type TUserInfo = {
  userId: string;
  favorites: string[];
};

const UserInfoSchema = new Schema<TUserInfo>({
  userId: { type: String, required: true },
  favorites: { type: [String], required: true, default: [] },
});

const UserInfoModel =
  mongoose.models.UserInfo || mongoose.model("UserInfo", UserInfoSchema);

export default UserInfoModel;
