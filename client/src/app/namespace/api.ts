import { z } from "zod";
import { CreateNamespaceForm } from "../../types";

export const createNamespaceApi = async (
  nData: z.infer<typeof CreateNamespaceForm>
) => {
  const response = await fetch(
    "http://localhost:3000/api/v1/namespace/create",
    {
      method: "POST",
      body: JSON.stringify(nData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  if (!response.ok) throw new Error(data.error);
  return data;
};

