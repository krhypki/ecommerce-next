import Spinner from "./ui/Spinner";

export default function LoadingScreen() {
  return (
    <div className=" w-screen flex justify-center gap-x-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Spinner />
    </div>
  );
}
