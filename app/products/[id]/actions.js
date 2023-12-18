"use server";
import { createCart, getCart } from "../../lib/db/cartActions";

export const incrementQuantity = async (productId) => {
  const cart = (await getCart()) ?? (await createCart());
  const productInCart = cart.items.find((item) => item.productId === productId);
  if (productInCart) {
    await prisma.cartItem.update({
      where: {
        id: productInCart.id,
      },
      data: {
        quantity: { increment: 1 },
      },
    });
  } else {
    await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId: productId,
        quantity: 1,
      },
    });
  }
};
