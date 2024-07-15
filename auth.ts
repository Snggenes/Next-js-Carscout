import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./lib/db";

const authOptions: NextAuthConfig = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [Google],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/",
  },
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
