import { Model, Schema, model, Document } from "mongoose";

export interface UserDocument extends Document {
  name: string;
  dept: string;
}

interface User {
  name: string;
  dept: string;
}

interface UserModel extends Model<User> {
  myNewStaticFn(): number;
  myWorld(): string;
}

const userSchema = new Schema<User, UserModel>({
  name: {
    type: String,
    required: true,
  },
  dept: {
    type: String,
    required: true,
  },
});

userSchema.static("myNewStaticFn", function myNewStaticFn() {
  return 150;
});

userSchema.static("myWorld", function myWorld() {
  return "Akanksha";
});

const userModel = model<User, UserModel>("User", userSchema);

export default userModel;
