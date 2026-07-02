import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export const client = projectId
  ? createClient({
      projectId,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
      apiVersion: "2024-01-01",
      useCdn: true,
    })
  : null;

export async function sanityFetch<T>(query: string, params?: Record<string, string>): Promise<T | null> {
  if (!client) return null;
  try {
    if (params) {
      return await client.fetch<T>(query, params);
    }
    return await client.fetch<T>(query);
  } catch {
    return null;
  }
}
