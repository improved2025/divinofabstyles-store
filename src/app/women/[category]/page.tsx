import { notFound } from "next/navigation";
import { womenCategoryPages } from "@/lib/category-data";
import { womenAccessoriesPageData } from "@/lib/accessories-data";
import { CategoryPageView } from "@/components/category/category-page-view";
import { AccessoriesPageView } from "@/components/category/accessories-page-view";

export default async function WomenCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (category === "accessories") {
    return <AccessoriesPageView data={womenAccessoriesPageData} />;
  }

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