import { NextRequest, NextResponse } from "next/server";
import { shopifyFetch } from "@/lib/shopify";

type Cart = {
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
};

type CartPayload = {
  cart: Cart | null;

  userErrors: {
    field: string[] | null;
    message: string;
  }[];
};

type CartLinesUpdateData = {
  cartLinesUpdate: CartPayload;
};

type CartLinesRemoveData = {
  cartLinesRemove: CartPayload;
};

const CART_FIELDS = `
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
`;

const CART_LINES_UPDATE_MUTATION = `
  mutation CartLinesUpdate(
    $cartId: ID!
    $lines: [CartLineUpdateInput!]!
  ) {
    cartLinesUpdate(
      cartId: $cartId
      lines: $lines
    ) {
      cart {
        ${CART_FIELDS}
      }

      userErrors {
        field
        message
      }
    }
  }
`;

const CART_LINES_REMOVE_MUTATION = `
  mutation CartLinesRemove(
    $cartId: ID!
    $lineIds: [ID!]
  ) {
    cartLinesRemove(
      cartId: $cartId
      lineIds: $lineIds
    ) {
      cart {
        ${CART_FIELDS}
      }

      userErrors {
        field
        message
      }
    }
  }
`;

export async function POST(
  request: NextRequest
) {
  try {
    const cartId =
      request.cookies.get("divino_cart_id")
        ?.value ?? null;

    if (!cartId) {
      return NextResponse.json(
        {
          success: false,
          message: "Cart not found",
        },
        {
          status: 404,
        }
      );
    }

    const body = await request.json();

    const action =
      typeof body.action === "string"
        ? body.action
        : null;

    const lineId =
      typeof body.lineId === "string"
        ? body.lineId
        : null;

    if (!lineId) {
      return NextResponse.json(
        {
          success: false,
          message: "lineId is required",
        },
        {
          status: 400,
        }
      );
    }

    let result: CartPayload;

    if (action === "update") {
      const quantity =
        typeof body.quantity === "number"
          ? body.quantity
          : null;

      if (
        quantity === null ||
        quantity < 1
      ) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Quantity must be at least 1",
          },
          {
            status: 400,
          }
        );
      }

      const data =
        await shopifyFetch<CartLinesUpdateData>({
          query: CART_LINES_UPDATE_MUTATION,
          variables: {
            cartId,
            lines: [
              {
                id: lineId,
                quantity,
              },
            ],
          },
        });

      result = data.cartLinesUpdate;
    } else if (action === "remove") {
      const data =
        await shopifyFetch<CartLinesRemoveData>({
          query: CART_LINES_REMOVE_MUTATION,
          variables: {
            cartId,
            lineIds: [lineId],
          },
        });

      result = data.cartLinesRemove;
    } else {
      return NextResponse.json(
        {
          success: false,
          message:
            "Action must be update or remove",
        },
        {
          status: 400,
        }
      );
    }

    if (result.userErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: result.userErrors
            .map(
              (error) => error.message
            )
            .join(", "),
          errors: result.userErrors,
        },
        {
          status: 400,
        }
      );
    }

    if (!result.cart) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Shopify did not return the updated cart.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      cart: result.cart,
    });
  } catch (error) {
    console.error(
      "Cart update failed:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unknown cart update error",
      },
      {
        status: 500,
      }
    );
  }
}