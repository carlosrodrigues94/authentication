import { APIGatewayEvent, Context } from "aws-lambda";
import { verify, decode, sign } from "jsonwebtoken";

export const generateToken = async (
  event: APIGatewayEvent,
  context: Context
) => {
  console.log({ event, context });
  return sign({ userID: "user-id" }, "secret");
};
