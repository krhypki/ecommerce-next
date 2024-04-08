import { AuthActionType } from "@/lib/types";
import Link from "next/link";

type AuthFormQuestionProps = {
  actionType: AuthActionType;
};

export default function AuthFormQuestion({
  actionType,
}: AuthFormQuestionProps) {
  const reverseType = actionType === "login" ? "signup" : "login";

  const text =
    actionType === "login"
      ? "Don't have an account yet? "
      : "Already have an account? ";
  return (
    <p>
      {text}
      <Link className="font-bold capitalize" href={`/${reverseType}`}>
        {reverseType}
      </Link>
    </p>
  );
}
