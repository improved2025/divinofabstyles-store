import { notFound } from "next/navigation";
import { menCategoryPages } from "@/lib/category-data";
import { menAccessoriesPageData } from "@/lib/accessories-data";
import { CategoryPageView } from "@/components/category/category-page-view";
import { AccessoriesPageView } from "@/components/category/accessories-page-view";

export default async function MenCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (category === "accessories") {
    return <AccessoriesPageView data={menAccessoriesPageData} />;
  }

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