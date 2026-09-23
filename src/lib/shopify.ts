type ShopifyFetchParams = {
  query: string;
  variables?: Record<string, unknown>;
};

type ShopifyError = {
  message: string;
};

type ShopifyResponse<T> = {
  data?: T;
  errors?: ShopifyError[];
};

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const privateToken = process.env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN;
const apiVersion =
  process.env.SHOPIFY_STOREFRONT_API_VERSION || "2026-07";

if (!domain) {
  throw new Error("Missing SHOPIFY_STORE_DOMAIN");
}

if (!privateToken) {
  throw new Error("Missing SHOPIFY_STOREFRONT_PRIVATE_TOKEN");
}

export async function shopifyFetch<T>({
  query,
  variables = {},
}: ShopifyFetchParams): Promise<T> {
  const endpoint = `https://${domain}/api/${apiVersion}/graphql.json`;

  const response = await fetch(endpoint, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      "Shopify-Storefront-Private-Token": privateToken,
    },

    body: JSON.stringify({
      query,
      variables,
    }),

    cache: "no-store",
  });

  if (!response.ok) {
    const responseText = await response.text();

    throw new Error(
      `Shopify request failed: ${response.status} ${response.statusText}\n${responseText}`
    );
  }

  const json = (await response.json()) as ShopifyResponse<T>;

  if (json.errors?.length) {
    throw new Error(
      `Shopify GraphQL error: ${json.errors
        .map((error) => error.message)
        .join(", ")}`
    );
  }

  if (!json.data) {
    throw new Error("Shopify returned no data.");
  }

  return json.data;
}