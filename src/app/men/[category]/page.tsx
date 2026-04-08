import { notFound } from "next/navigation";
import { menCategoryPages } from "@/lib/category-data";
import { CategoryPageView } from "@/components/category/category-page-view";

export default async function MenCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const data = menCategoryPages[category];

  if (!data) notFound();

  return (
    <CategoryPageView
      lane="men"
      title={data.title}
      intro={data.intro}
      heroImage={data.heroImage}
      products={data.products}
    />
  );
}