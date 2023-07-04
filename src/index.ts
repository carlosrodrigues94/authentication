import { APIGatewayEvent, Context } from "aws-lambda";
import { sign } from "jsonwebtoken";

export const generateToken = async (
  event: APIGatewayEvent,
  context: Context
) => {
  const token = sign(event.body, event.headers["secret"]);
  return token;
};
