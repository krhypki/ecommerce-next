"use server";

import { createUser, findOneByEmail, updateUser } from "@/db/user";
import { signIn, signOut } from "@/lib/auth";
import { INVALID_FORM_DATA_RESPONSE } from "@/lib/constants";
import { getUserFromSession } from "@/lib/utils/getUserFromSession";
import { userOrderInfoSchema } from "@/lib/validators/orderSchema";
import { userAuthSchema } from "@/lib/validators/userSchema";
import { EcommerceUser, Prisma } from "@prisma/client";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

export async function signup(formData: unknown) {
  if (!(formData instanceof FormData)) {
    return INVALID_FORM_DATA_RESPONSE;
  }

  const formDataObj = Object.fromEntries(formData.entries());

  const validatedUser = userAuthSchema.safeParse(formDataObj);

  if (!validatedUser.success) {
    return INVALID_FORM_DATA_RESPONSE;
  }

  const { password, email } = validatedUser.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await createUser({ ...validatedUser.data, password: hashedPassword });

    await signIn("credentials", {
      password,
      email,
    });
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    let errorMsg = "Something went wrong, try again later.";
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        errorMsg = "Email already exists";
      }
    }

    return {
      error: errorMsg,
    };
  }
}

export async function login(formData: unknown, redirectUrl = "/") {
  if (!(formData instanceof FormData)) {
    return INVALID_FORM_DATA_RESPONSE;
  }

  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    redirect(redirectUrl);
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return {
      error: "Invalid credentials",
    };
  }
}

export async function logout() {
  await signOut({ redirectTo: "/" });
}

export async function updatePassword(formData: unknown) {
  if (!(formData instanceof FormData)) {
    return INVALID_FORM_DATA_RESPONSE;
  }

  const sessionUser = await getUserFromSession();
  if (!sessionUser) {
    return {
      error: "Something went wrong, try again later.",
    };
  }

  const userData = Object.fromEntries(formData.entries()) as Record<
    string,
    EcommerceUser["password"]
  >;
  const { currentPassword, newPassword } = userData;

  const user = await findOneByEmail(sessionUser.email);

  if (!user) {
    return {
      error: "User not found",
    };
  }

  const isPasswordValid = await bcrypt.compare(currentPassword, user?.password);

  if (!isPasswordValid) {
    return {
      error: "Incorrect password",
    };
  }

  const newPasswordHashed = await bcrypt.hash(newPassword, 10);
  await updateUser(sessionUser.email, { password: newPasswordHashed });
}

export async function updateOrderInfo(formData: unknown) {
  const sessionUser = await getUserFromSession();
  if (!sessionUser) {
    return {
      error: "User not found",
    };
  }

  const validatedUserData = userOrderInfoSchema.safeParse(formData);

  if (!validatedUserData.success) {
    return INVALID_FORM_DATA_RESPONSE;
  }

  try {
    await updateUser(sessionUser.email, validatedUserData.data);
  } catch (error) {
    return {
      error: "Something went wrong, try again later.",
    };
  }

  revalidatePath("/");
}
