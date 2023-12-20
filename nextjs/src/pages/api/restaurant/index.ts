import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const ownerEmail = String(req.query.ownerEmail);

  switch (req.method) {
    case "GET": {
      try {
        const restaurant = await prisma.restaurant.findMany();

        if (restaurant) {
          const message: string = "Restaurante encontrado com sucesso.";
          res.status(200).json(restaurant);
        } else {
          const message: string = "Não foi possível encontrar restaurante";
          res.status(400).json(message);
        }
      } catch (error) {
        const message: string = "Error trying to acess the database";
        res.status(500).json(message);
      } finally {
        await prisma.$disconnect();
      }
    }
    break;

    default:
      throw new Error(`The HTTP ${req.method} method is not supported`);
      break
  }
}
