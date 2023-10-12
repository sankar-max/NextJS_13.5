import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleHubProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/navigation";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import client from "@/lib/prismadb";

export const options: NextAuthOptions = {
  // adapter: PrismaAdapter(client),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: {
    //       label: "username",
    //       type: "text",
    //       placeholder: "your username",
    //     },
    //     password: {
    //       label: "Password",
    //       placeholder: "your password",
    //       type: "password",
    //     },
    //   },

    //   async authorize(credentials) {
    //     if (!credentials?.email || !credentials?.password) {
    //       throw new Error("Invalid credentials");
    //     }

    //     const user = await client.user.findUnique({
    //       where: {
    //         email: credentials.email,
    //       },
    //     });

    //     if (!user || !user.hasedPassword) {
    //       throw new Error("invalid Credentials");
    //     }

    //     const isPasswordCorrect = await bcrypt.compare(
    //       credentials.password,
    //       user.hasedPassword,
    //     );

    //     if (!isPasswordCorrect) {
    //       throw new Error("invalid Credentials");
    //     }

    //     return user;
    //   },
    // }),
  ],
  // debug: process.env.NODE_ENV === "development",
  // jwt: {
  //   secret: process.env.NEXTAUTH_JWT,
  // },
  // secret: process.env.NEXTAUTH_SECRET,
};
