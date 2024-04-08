import AccountNav from "@/components/account/AccountNav";
import SectionBlock from "@/components/ui/SectionBlock";

type AccountLayoutProps = {
  children: React.ReactNode;
};

export default function AccountLayout({ children }: AccountLayoutProps) {
  return (
    <main>
      <SectionBlock className="max-w-[900px] w-full mx-auto flex max-md:flex-col gap-x-20 gap-y-10">
        <AccountNav />
        <div className="flex-1">{children}</div>
      </SectionBlock>
    </main>
  );
}
