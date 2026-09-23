import { NextResponse } from "next/server";
import { shopifyFetch } from "@/lib/shopify";

type ShopifyTestData = {
  shop: {
    name: string;
  };
  products: {
    nodes: {
      id: string;
      title: string;
      handle: string;
      availableForSale: boolean;
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
    }[];
  };
};

const SHOPIFY_TEST_QUERY = `
  query ShopifyConnectionTest {
    shop {
      name
    }

    products(first: 3) {
      nodes {
        id
        title
        handle
        availableForSale

        variants(first: 10) {
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
  }
`;

export async function GET() {
  try {
    const data = await shopifyFetch<ShopifyTestData>({
      query: SHOPIFY_TEST_QUERY,
    });

    return NextResponse.json({
      success: true,
      message: "Shopify connection successful",
      shop: data.shop,
      products: data.products.nodes,
    });
  } catch (error) {
    console.error("Shopify connection test failed:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unknown Shopify connection error",
      },
      {
        status: 500,
      }
    );
  }
}