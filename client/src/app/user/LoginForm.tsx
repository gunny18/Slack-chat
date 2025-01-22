import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginSchema } from "../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useAppDispatch } from "../hooks";
import { loginUser } from ".";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [error, setError] = useState<string | undefined>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async (values: z.infer<typeof LoginSchema>) => {
    try {
      await dispatch(loginUser(values)).unwrap();
      navigate("/");
    } catch (error) {
      const err = error as Error;
      console.log(err);
      setError(err.message);
    }
  };

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });

  return (
    <section>
      {error && <p className="text-red-500 font-bold">{error}</p>}
      <form onSubmit={form.handleSubmit(handleLogin)} noValidate>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="border-black border-2 px-2 rounded-lg"
            type="email"
            id="email"
            {...form.register("email")}
          />
          {form.formState.errors.email?.message && (
            <p className="text-red-600">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            className="border-black border-2 px-2 rounded-lg"
            type="password"
            id="password"
            {...form.register("password")}
          />
          {form.formState.errors.password?.message && (
            <p className="text-red-600">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>

        <button className="mt-4 bg-blue-500 py-2 px-4 rounded-lg hover:bg-blue-300">
          Sign In
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
