import { getServerSession } from "next-auth";
import prisma from "../db/prisma";
import { cookies } from "next/headers";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export const createCart = async () => {
  const session = await getServerSession(authOptions);
  let cart;
  if (session) {
    cart = await prisma.cart.create({
      data: {
        userId: session.user.id,
      },
    });
  } else {
    cart = await prisma.cart.create({
      data: {},
    });
    cookies().set("localCartId", cart.id);
  }

  return {
    ...cart,
    items: [],
    size: 0,
    totalAmount: 0,
  };
};
export async function getCart() {
  const session = await getServerSession(authOptions);

  let cart;
  if (session) {
    cart = await prisma.cart.findFirst({
      where: {
        userId: session.user.id,
      },
      include: { items: { include: { product: true } } },
    });
  } else {
    const localCartId = cookies().get("localCartId")?.value;
    cart = localCartId
      ? await prisma.cart.findUnique({
          where: {
            id: localCartId,
          },
          include: { items: { include: { product: true } } },
        })
      : null;
  }

  if (!cart) {
    return null;
  }
  return {
    ...cart,
    size: cart.items.reduce((acc, item) => acc + item.quantity, 0),
    totalAmount: cart.items.reduce(
      (acc, item) => acc + item.quantity * item.product.price,
      0
    ),
  };
}
