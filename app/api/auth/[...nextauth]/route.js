import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/app/lib/db/prisma";
import { mergeAnonymousCart } from "@/app/cart/actions";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  //we add the callback because nextauth doesnt return the userid by default
  callbacks: {
    session({ user, session }) {
      session.user.id = user.id;
      return session;
    },
  },
  events: {
    async signIn({ user }) {
      await mergeAnonymousCart(user.id);
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
