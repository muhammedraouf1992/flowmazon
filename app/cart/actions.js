"use server";
import { revalidatePath } from "next/cache";
import { getCart } from "../lib/db/cartActions";

export const setProductQuantity = async (productId, quantity) => {
  const cart = await getCart();

  const productInCart = cart.items.find((item) => item.productId === productId);
  if (productInCart) {
    await prisma.cartItem.update({
      where: {
        id: productInCart.id,
      },
      data: {
        quantity: quantity,
      },
    });
  }
  revalidatePath("/cart");
};
export const removeItem = async (productId) => {
  const cart = await getCart();
  const productInCart = cart.items.find((item) => item.productId === productId);
  if (productInCart) {
    await prisma.cartItem.delete({
      where: {
        id: productInCart.id,
      },
    });
  }
  revalidatePath("/cart");
};
