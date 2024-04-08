import AllCategoriesList from "@/components/category/AllCategoriesList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories",
};

export default async function CategoriesPage() {
  return (
    <main>
      <AllCategoriesList />
    </main>
  );
}
