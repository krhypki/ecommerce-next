import { cn } from "@/lib/utils/cn";
import Image from "next/image";

type ProductImageProps = {
  url: string;
  height: number;
  width: number;
  alt: string;
  className?: string;
};

export default function ProductImage({
  url,
  height,
  width,
  alt,
  className,
}: ProductImageProps) {
  return (
    <Image
      src={`${url}?fm=jpg&h=${height}&w=${width}`}
      alt={alt}
      width={width}
      height={height}
      className={cn("w-auto rounded", className)}
    />
  );
}
