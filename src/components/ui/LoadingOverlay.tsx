import Spinner from "./Spinner";

export default function LoadingOverlay() {
  return (
    <div className="absolute left-6 -top-4 right-6 -bottom-4 bg-primary-foreground/50 flex justify-center rounded-md">
      <Spinner className="mt-[140px]" />
    </div>
  );
}
