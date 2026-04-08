import { notFound } from "next/navigation";
import { womenCategoryPages } from "@/lib/category-data";
import { CategoryPageView } from "@/components/category/category-page-view";

export default async function WomenCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const data = womenCategoryPages[category];

  if (!data) notFound();

  return (
    <CategoryPageView
      lane="women"
      title={data.title}
      intro={data.intro}
      heroImage={data.heroImage}
      products={data.products}
    />
  );
}