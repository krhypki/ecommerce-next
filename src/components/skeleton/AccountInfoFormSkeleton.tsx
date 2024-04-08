import { Skeleton } from "../ui/skeleton";

export default function AccountInfoFormSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex gap-x-4">
        <Skeleton className="w-[160px] h-[40px] rounded-full" />
        <Skeleton className="w-[100px] h-[40px] rounded-full" />
      </div>
      <Skeleton className="w-[260px] h-[40px] rounded-full" />
      <Skeleton className="w-[260px] h-[40px] rounded-full" />
      <Skeleton className="w-[260px] h-[40px] rounded-full" />
    </div>
  );
}
