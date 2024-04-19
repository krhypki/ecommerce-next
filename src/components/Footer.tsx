import { GITHUB_REPO_URL } from "@/lib/constants";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer className="mt-auto py-2">
      <Container className="flex justify-between py-3">
        <small>Ecommerce Demo App 2024. All rights reserved</small>

        <Link
          className="flex items-center gap-x-2 font-semibold"
          href={GITHUB_REPO_URL}
        >
          Github
          <BsGithub className="h-6 w-6" />
        </Link>
      </Container>
    </footer>
  );
}
