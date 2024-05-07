"use server";
import { revalidatePath } from "next/cache";
import { getCart } from "../lib/db/cartActions";
import { cookies } from "next/headers";
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
export const mergeAnonymousCart = async (userId) => {
  const localCartId = cookies().get("localCartId").value;
  console.log(Number(localCartId));
  const localCart = await prisma.cart.findFirst({
    where: {
      id: localCartId,
    },
    include: { items: true },
  });
  if (!localCart) return;
  const userCart = await prisma.cart.findFirst({
    where: {
      userId: userId,
    },
    include: {
      items: true,
    },
  });
  await prisma.$transaction(async (tx) => {
    if (userCart) {
      const mergedItems = mergeCart(localCart.items, userCart.items);

      await tx.cartItem.deleteMany({
        where: {
          cartId: userCart.id,
        },
      });
      await tx.cartItem.createMany({
        data: mergedItems.map((item) => ({
          cartId: userCart.id,
          productId: item.productId,
          quantity: item.quantity,
        })),
      });
    } else {
      await tx.cart.create({
        data: {
          userId,
          items: {
            createMany: {
              data: localCart.items.map((item) => ({
                productId: item.productId,
                quantity: item.quantity,
              })),
            },
          },
        },
      });
    }
    await tx.cart.delete({ where: { id: localCartId } });
    cookies().set("localCartId", "");
  });
};
const mergeCart = (...cartItems) => {
  return cartItems.reduce((acc, items) => {
    items.forEach((item) => {
      const existingItem = acc.find((i) => i.productId === item.productId);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        acc.push(item);
      }
    });
    return acc;
  }, []);
};
