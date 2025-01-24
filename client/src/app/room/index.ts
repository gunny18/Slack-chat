import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { z } from "zod";
import { CreateRoomForm } from "../../types";
import { createRoomApi } from "./api";

type RoomState = {
  rooms: {
    id: string | null;
    name: string | null;
    imageURL: string | null;
    namespaceId: string | null;
  }[];
};

const initialState: RoomState = {
  rooms: [],
};

export const createRoom = createAsyncThunk(
  "room/createRoom",
  async (data: z.infer<typeof CreateRoomForm>) => {
    const d = await createRoomApi(data);
    return d;
  }
);

const namespaceSlice = createSlice({
  name: "namespace",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createRoom.fulfilled, (state, action) => {
        const { _id, name, imageURL } = action.payload.room;
        state.rooms.push({
          id: _id,
          name,
          imageURL,
          namespaceId: action.payload.namespaceId,
        });
      })
      .addCase(createRoom.rejected, (_state, action) => {
        console.log("rejected create namespace!", action);
      });
  },
});

export default namespaceSlice.reducer;
