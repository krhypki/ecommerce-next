import Image from "next/image";
import Link from "next/link";
import { Card } from "./components/ui/card";
import Heading from "./components/ui/heading";

type CategoryCardProps = {
  name: string;
  imageUrl: string;
};

export default function CategoryCard({ name, imageUrl }: CategoryCardProps) {
  return (
    <Link href={`/category/${name}`}>
      <Card className="relative w-full h-full max-w-[360px] rounded-md">
        <Image
          src={imageUrl}
          alt={name}
          width={640}
          height={360}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 text-white bg-black/50 flex items-center justify-center p-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
          <Heading tag="h2" className="mb-0">
            {name}
          </Heading>
        </div>
      </Card>
    </Link>
  );
}
