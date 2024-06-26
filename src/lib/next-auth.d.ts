import "next-auth";

declare module "next-auth" {
  interface User {
    email: string;
  }
  interface Session {
    user: User & {
      id: string;
      email: string;
    };
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    id: string;
    email: string;
  }
}
