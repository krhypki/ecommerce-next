import { Skeleton } from "../ui/Skeleton";

export default function OrderListSkeleton() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex justify-between mb-8">
          <Skeleton className="w-[100px] h-[20px] rounded-full" />
          <Skeleton className="w-[100px] h-[20px] rounded-full" />
          <Skeleton className="w-[100px] h-[20px] rounded-full" />
        </div>
      ))}
    </>
  );
}
