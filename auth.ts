import NextAuth, { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./lib/db";

const authOptions: NextAuthConfig = {
  providers: [GitHub, Google],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
