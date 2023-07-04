import { verify, decode, sign } from "jsonwebtoken";

export const generateToken = async (event) => {
  console.log(event);
  return sign({ userID: "user-id" }, "secret");
};
