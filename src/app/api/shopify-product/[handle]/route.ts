import { NextResponse } from "next/server";
import { shopifyFetch } from "@/lib/shopify";

type ShopifyProductData = {
  product: {
    id: string;
    title: string;
    handle: string;
    availableForSale: boolean;
    featuredImage: {
      url: string;
      altText: string | null;
    } | null;
    variants: {
      nodes: {
        id: string;
        title: string;
        availableForSale: boolean;
        quantityAvailable: number | null;
        selectedOptions: {
          name: string;
          value: string;
        }[];
        price: {
          amount: string;
          currencyCode: string;
        };
      }[];
    };
  } | null;
};

const PRODUCT_QUERY = `
  query ProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      availableForSale

      featuredImage {
        url
        altText
      }

      variants(first: 20) {
        nodes {
          id
          title
          availableForSale
          quantityAvailable

          selectedOptions {
            name
            value
          }

          price {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;

export async function GET(
  request: Request,
  context: {
    params: Promise<{
      handle: string;
    }>;
  }
) {
  try {
    const { handle } = await context.params;

    const data = await shopifyFetch<ShopifyProductData>({
      query: PRODUCT_QUERY,
      variables: {
        handle,
      },
    });

    if (!data.product) {
      return NextResponse.json(
        {
          success: false,
          message: "Product not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      product: data.product,
    });
  } catch (error) {
    console.error("Shopify product lookup failed:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unknown Shopify product lookup error",
      },
      {
        status: 500,
      }
    );
  }
}