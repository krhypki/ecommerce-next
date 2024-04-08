import { cn } from "@/lib/utils/cn";
import { forwardRef } from "react";

type SectionBlockProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionBlock = forwardRef<HTMLElement, SectionBlockProps>(
  ({ children, className }, ref) => {
    return (
      <section ref={ref} className={cn("py-16 lg:py-[110px]", className)}>
        {children}
      </section>
    );
  }
);

SectionBlock.displayName = "SectionBlock";

export default SectionBlock;
