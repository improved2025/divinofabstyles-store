import { NextRequest, NextResponse } from "next/server";
import { shopifyFetch } from "@/lib/shopify";

type CartQueryData = {
  cart: {
    id: string;
    checkoutUrl: string;
    totalQuantity: number;

    cost: {
      subtotalAmount: {
        amount: string;
        currencyCode: string;
      };

      totalAmount: {
        amount: string;
        currencyCode: string;
      };
    };

    lines: {
      nodes: {
        id: string;
        quantity: number;

        cost: {
          totalAmount: {
            amount: string;
            currencyCode: string;
          };
        };

        merchandise: {
          id: string;
          title: string;

          selectedOptions: {
            name: string;
            value: string;
          }[];

          image: {
            url: string;
            altText: string | null;
          } | null;

          price: {
            amount: string;
            currencyCode: string;
          };

          product: {
            title: string;
            handle: string;
          };
        };
      }[];
    };
  } | null;
};

const CART_QUERY = `
  query GetCart($cartId: ID!) {
    cart(id: $cartId) {
      id
      checkoutUrl
      totalQuantity

      cost {
        subtotalAmount {
          amount
          currencyCode
        }

        totalAmount {
          amount
          currencyCode
        }
      }

      lines(first: 50) {
        nodes {
          id
          quantity

          cost {
            totalAmount {
              amount
              currencyCode
            }
          }

          merchandise {
            ... on ProductVariant {
              id
              title

              selectedOptions {
                name
                value
              }

              image {
                url
                altText
              }

              price {
                amount
                currencyCode
              }

              product {
                title
                handle
              }
            }
          }
        }
      }
    }
  }
`;

export async function GET(
  request: NextRequest
) {
  try {
    const cartId =
      request.cookies.get("divino_cart_id")?.value ??
      null;

    if (!cartId) {
      return NextResponse.json({
        success: true,
        cart: null,
      });
    }

    const data =
      await shopifyFetch<CartQueryData>({
        query: CART_QUERY,
        variables: {
          cartId,
        },
      });

    if (!data.cart) {
      const response = NextResponse.json({
        success: true,
        cart: null,
      });

      response.cookies.delete(
        "divino_cart_id"
      );

      return response;
    }

    return NextResponse.json({
      success: true,
      cart: data.cart,
    });
  } catch (error) {
    console.error("Cart lookup failed:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unknown cart lookup error",
      },
      {
        status: 500,
      }
    );
  }
}