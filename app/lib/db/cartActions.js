import prisma from "../db/prisma";
import { cookies } from "next/headers";
export const createCart = async () => {
  const cart = await prisma.cart.create({
    data: {},
  });

  cookies().set("localCartId", cart.id);
  return {
    ...cart,
    items: [],
    size: 0,
    totalAmount: 0,
  };
};
export async function getCart() {
  const localCartId = cookies().get("localCartId")?.value;

  const cart = localCartId
    ? await prisma.cart.findUnique({
        where: {
          id: localCartId,
        },
        include: { items: { include: { product: true } } },
      })
    : null;

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
