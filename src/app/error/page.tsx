import { Button } from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Error",
};

export default function page() {
  return (
    <main className="py-20 text-center">
      <Heading tag="h2" className="mb-12">
        Something went wrong, try again later.
      </Heading>
      <Button asChild>
        <Link href="/">Homepage</Link>
      </Button>
    </main>
  );
}
