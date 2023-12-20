import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../prisma/prisma";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const email = String(req.query.email);

  switch (req.method) {
    case "POST":
      {
        try {
          const user = await prisma.user.create({
            data: {
              email: email,
              name: req.body.user.name,
              password: req.body.user.password,
              image: "",
            },
          });

          if (user) {
            res.status(200).json("User created successfully")          
          } else {
            const message: string = "Couldn't create user";
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

    case "PUT":
      {
        try {
          const user = await prisma.user.update({
            where: { email: email },
            data: {
              email: req.body.email,
              name: req.body.name,
              password: req.body.password,
            },
          });

          if (user) {
            res.status(200).json(user);
          } else {
            const message: string = "Couldn't update user data";
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

    case "GET":
      {
        try {
          const user = await prisma.user.findUnique({
            where: { email: email, isOwner: true },
          });

          if (user) {
            res.status(200).json(user);
          } else {
            const message: string = "Owner not found";
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

    case "DELETE":
      {
        //schema alredy set to cascade delete
        try {
          const user = await prisma.user.delete({
            where: { email: email },
          });

          if (user) {
            res.status(200).json(user);
          } else {
            const message: string = "Owner not found";
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
  }
}
