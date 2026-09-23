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
      merchandise: {
        id: string;
        title: string;
        product: {
          title: string;
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

type CartCreateData = {
  cartCreate: CartPayload;
};

type CartLinesAddData = {
  cartLinesAdd: CartPayload;
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

      merchandise {
        ... on ProductVariant {
          id
          title

          product {
            title
          }
        }
      }
    }
  }
`;

const CART_CREATE_MUTATION = `
  mutation CartCreate($input: CartInput!) {
    cartCreate(input: $input) {
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

const CART_LINES_ADD_MUTATION = `
  mutation CartLinesAdd(
    $cartId: ID!
    $lines: [CartLineInput!]!
  ) {
    cartLinesAdd(
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

async function createNewCart(
  merchandiseId: string,
  quantity: number
) {
  const data = await shopifyFetch<CartCreateData>({
    query: CART_CREATE_MUTATION,
    variables: {
      input: {
        lines: [
          {
            merchandiseId,
            quantity,
          },
        ],
      },
    },
  });

  return data.cartCreate;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const merchandiseId =
      typeof body.merchandiseId === "string"
        ? body.merchandiseId
        : null;

    const quantity =
      typeof body.quantity === "number"
        ? body.quantity
        : 1;

    if (!merchandiseId) {
      return NextResponse.json(
        {
          success: false,
          message: "merchandiseId is required",
        },
        {
          status: 400,
        }
      );
    }

    if (quantity < 1) {
      return NextResponse.json(
        {
          success: false,
          message: "Quantity must be at least 1",
        },
        {
          status: 400,
        }
      );
    }

    const existingCartId =
      request.cookies.get("divino_cart_id")?.value ??
      null;

    let result: CartPayload;

    if (existingCartId) {
      const data =
        await shopifyFetch<CartLinesAddData>({
          query: CART_LINES_ADD_MUTATION,
          variables: {
            cartId: existingCartId,
            lines: [
              {
                merchandiseId,
                quantity,
              },
            ],
          },
        });

      result = data.cartLinesAdd;

      const cartDoesNotExist =
        !result.cart &&
        result.userErrors.some((error) =>
          /cart.*not.*exist|cart.*not.*found|invalid.*cart/i.test(
            error.message
          )
        );

      if (cartDoesNotExist) {
        result = await createNewCart(
          merchandiseId,
          quantity
        );
      }
    } else {
      result = await createNewCart(
        merchandiseId,
        quantity
      );
    }

    if (result.userErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: result.userErrors
            .map((error) => error.message)
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
          message: "Shopify did not return a cart.",
        },
        {
          status: 500,
        }
      );
    }

    const response = NextResponse.json({
      success: true,
      cart: result.cart,
    });

    response.cookies.set(
      "divino_cart_id",
      result.cart.id,
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
      }
    );

    return response;
  } catch (error) {
    console.error("Cart operation failed:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unknown cart error",
      },
      {
        status: 500,
      }
    );
  }
}