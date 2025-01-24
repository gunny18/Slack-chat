import { useForm } from "react-hook-form";
import { z } from "zod";
import { CreateNamespaceForm } from "../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useAppDispatch } from "../hooks";
import { useNavigate } from "react-router-dom";
import { createNamespace } from ".";

const AddNamespaceForm = () => {
  const [error, setError] = useState<string | undefined>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleAddNamespace = async (
    values: z.infer<typeof CreateNamespaceForm>
  ) => {
    try {
      // thunk fire!
      await dispatch(createNamespace(values)).unwrap();
      navigate("/");
    } catch (error) {
      const err = error as Error;
      console.log(err);
      setError(err.message);
    }
  };

  const form = useForm<z.infer<typeof CreateNamespaceForm>>({
    resolver: zodResolver(CreateNamespaceForm),
  });

  return (
    <section>
      {error && <p className="text-red-500 font-bold">{error}</p>}
      <form onSubmit={form.handleSubmit(handleAddNamespace)} noValidate>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            className="border-black border-2 px-2 rounded-lg"
            type="text"
            id="name"
            {...form.register("name")}
          />
          {form.formState.errors.name?.message && (
            <p className="text-red-600">{form.formState.errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="imageURL">Image URL</label>
          <input
            className="border-black border-2 px-2 rounded-lg"
            type="text"
            id="imageURL"
            {...form.register("imageURL")}
          />
          {form.formState.errors.imageURL?.message && (
            <p className="text-red-600">
              {form.formState.errors.imageURL.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="endpoint">Endpoint</label>
          <input
            className="border-black border-2 px-2 rounded-lg"
            type="text"
            id="endpoint"
            {...form.register("endpoint")}
          />
          {form.formState.errors.endpoint?.message && (
            <p className="text-red-600">
              {form.formState.errors.endpoint.message}
            </p>
          )}
        </div>

        <button className="mt-4 bg-blue-500 py-2 px-4 rounded-lg hover:bg-blue-300">
          Create Namespace
        </button>
      </form>
    </section>
  );
};

export default AddNamespaceForm;
