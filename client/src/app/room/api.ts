import { z } from "zod";
import { CreateRoomForm } from "../../types";

export const createRoomApi = async (nData: z.infer<typeof CreateRoomForm>) => {
  const response = await fetch("http://localhost:3000/api/v1/room/create", {
    method: "POST",
    body: JSON.stringify(nData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error);
  return data;
};
