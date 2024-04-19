import Link from "next/link";
import { Button } from "../ui/Button";
import Heading from "../ui/Heading";

export default function CartEmptyState() {
  return (
    <div className="text-center mt-20">
      <Heading tag="h2" variant="h4" className="mb-4">
        nothing is here yet
      </Heading>
      <Button asChild>
        <Link href="/categories">
          <p>Start browsing products</p>
        </Link>
      </Button>
    </div>
  );
}
