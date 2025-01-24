import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { z } from "zod";
import { CreateNamespaceForm } from "../../types";
import { createNamespaceApi } from "./api";

type NamespaceState = {
  namespaces: {
    id: string | null;
    name: string | null;
    imageURL: string | null;
    endpoint: string | null;
  }[];
};

const initialState: NamespaceState = {
  namespaces: [],
};

export const createNamespace = createAsyncThunk(
  "namespace/createNamespace",
  async (data: z.infer<typeof CreateNamespaceForm>) => {
    const d = await createNamespaceApi(data);
    return d;
  }
);

const namespaceSlice = createSlice({
  name: "namespace",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createNamespace.fulfilled, (state, action) => {
        const { _id, name, imageURL, endpoint } = action.payload.namespace;
        state.namespaces.push({
          id: _id,
          name,
          imageURL,
          endpoint,
        });
      })
      .addCase(createNamespace.rejected, (_state, action) => {
        console.log("rejected create namespace!", action);
      });
  },
});

export default namespaceSlice.reducer;
