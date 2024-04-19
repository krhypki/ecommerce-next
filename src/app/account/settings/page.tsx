import AccountInfoFormWrapper from "@/components/account/AccountInfoFormWrapper";
import UpdatePasswordForm from "@/components/account/UpdatePasswordForm";
import AccountInfoFormSkeleton from "@/components/skeleton/AccountInfoFormSkeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Settings",
};

export default async function SettingsPage() {
  return (
    <div className="flex max-lg:flex-col items-start justify-between gap-y-10">
      <Card>
        <CardHeader>
          <Heading tag="h2" variant="h4">
            Update password
          </Heading>
        </CardHeader>
        <CardContent>
          <UpdatePasswordForm />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <Heading tag="h2" variant="h4">
            update order information
          </Heading>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<AccountInfoFormSkeleton />}>
            <AccountInfoFormWrapper />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
