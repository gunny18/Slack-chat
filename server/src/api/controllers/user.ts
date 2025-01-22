import bcrypt from "bcryptjs";
import { User } from "../../data/models/user";

export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  const hashedPwd = await bcrypt.hash(password, 12);
  const user = new User({
    username,
    email,
    password: hashedPwd,
  });
  await user.save();
  return user;
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("No user found!");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials!");
  return user;
};
