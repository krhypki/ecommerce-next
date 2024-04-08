import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

type AppNavHamburgerProps = {
  isOpen: boolean;
  onClick: () => void;
};

export function AppNavHamburger({ onClick, isOpen }: AppNavHamburgerProps) {
  const Component = isOpen ? RxCross1 : RxHamburgerMenu;

  return (
    <button className="p-3" onClick={onClick}>
      <Component className="h-6 w-6" />
    </button>
  );
}
