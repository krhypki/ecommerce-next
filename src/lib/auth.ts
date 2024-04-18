import bcrypt from "bcryptjs";
import NextAuth, { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";
import { findOneByEmail } from "../db/user";
import { userAuthSchema } from "./validators/user-schema";

const config = {
  pages: {
    signIn: "/login",
  },
  providers: [
    credentials({
      async authorize(credentials) {
        const validatedCredentials = userAuthSchema.safeParse(credentials);

        if (!validatedCredentials.success) {
          console.log("Invalid data");
          return null;
        }

        const { email, password } = validatedCredentials.data;
        const user = await findOneByEmail(email);

        if (!user) {
          console.log("User not found");
          return null;
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
          console.log("invalid");
          return null;
        }

        return user;
      },
    }),
  ],
  callbacks: {
    authorized: ({ request, auth }) => {
      const isLoggedIn = Boolean(auth?.user);
      const isAccountPage = request.nextUrl.pathname.includes("/account");

      if (isLoggedIn && request.nextUrl.pathname === "/checkout/unauthorized") {
        return Response.redirect(new URL("/checkout", request.nextUrl));
      }

      if (!isLoggedIn && isAccountPage) {
        return Response.redirect(new URL("/login", request.nextUrl));
      }

      if (
        isLoggedIn &&
        (request.nextUrl.pathname === "/login" ||
          request.nextUrl.pathname === "/signup")
      ) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.email = user.email || "";
        token.id = user.id!;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (session.user) {
        session.user.email = token.email!;
        session.user.id = token.id;
      }

      return session;
    },
  },
} satisfies NextAuthConfig;

export const { auth, signIn, signOut } = NextAuth(config);
