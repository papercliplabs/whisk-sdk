import { safeFetch } from "@/utils";
import { GetIdentityParameters, GetIdentityReturnType } from "../shared/types";
import { GetIdentityReturnTypeSchema } from "../shared/schema";

export async function fetchAvatar(
  parameters: GetIdentityParameters,
  apiUrl: string
): Promise<GetIdentityReturnType | null> {
  const response = await safeFetch(`${apiUrl}/identity/avatar`, {
    method: "POST",
    body: JSON.stringify(parameters),
  });

  // Validate the returned data against the expected schema
  try {
    return GetIdentityReturnTypeSchema.parse(response); // Throws if the data doesn't match
  } catch (error) {
    console.error("Invalid response data (/identity/avatar):", error);
    return null;
  }
}
