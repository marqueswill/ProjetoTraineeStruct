import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userId = Number(req.query.id);

  switch (req.method) {
    // case "POST":
    //   {
    //     try {
    //       const newMenu = await prisma.cart.create({
    //         data: {
    //           id: req.body.id,
    //           userId: req.body.userID,
    //         },
    //       });
    //       if (newMenu) {
    //         res.status(200).json(newMenu);
    //       } else {
    //         const message: string = "Couldn't create cart";
    //         res.status(400).json(message);
    //       }
    //     } catch (error) {
    //       const message: string = "Error trying to create the menu";
    //       res.status(500).json(message);
    //     } finally {
    //       await prisma.$disconnect();
    //     }
    //   }
    //   break;

    case "PUT":
      {
        try {
          const user = await prisma.user.update({
            where: { id: userId },
            data: req.body,
          });

          if (user) {
            const message: string = "User data updated successufully";

            res.status(200).json(message);
          } else {
            const message: string = "Couldn't update user data";
            res.status(400).json(message);
          }
        } catch (error) {
          const message: string = "Error trying to access the database";
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
            where: { id: userId },
            include: { cart: true, restaurant: true },
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

    // case "DELETE":
    //   {
    //     //schema alredy set to cascade delete
    //     try {
    //       const deleteMenu = await prisma.menu.delete({
    //         where: { id: cartId },
    //       });

    //       if (deleteMenu) {
    //         res.status(200).json(deleteMenu);
    //       } else {
    //         const message: string = "Cart not found";
    //         res.status(400).json(message);
    //       }
    //     } catch (error) {
    //       const message: string = "Error trying to acess the database";
    //       res.status(500).json(message);
    //     } finally {
    //       await prisma.$disconnect();
    //     }
    //   }
    //   break;

    default:
      throw new Error(`The HTTP ${req.method} method is not supported`);
  }
}
