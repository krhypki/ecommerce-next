import CategoryCard from "@/CategoryCard";
import { getAllCategories } from "@/actions/category";
import SectionBlock from "../ui/SectionBlock";

export default async function AllCategoriesList() {
  const categories = await getAllCategories();
  return (
    <SectionBlock className="grid md:grid-cols-2 xl:grid-cols-4 max-xl:grid-rows-[300px,300px] gap-10 max-xl:max-w-[800px] justify-center mx-auto">
      {categories.map(({ name, imageUrl }) => (
        <CategoryCard key={name} name={name} imageUrl={imageUrl} />
      ))}
    </SectionBlock>
  );
}
