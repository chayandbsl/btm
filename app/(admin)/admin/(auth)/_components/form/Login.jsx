"use client";

import { useActionState, useEffect, useState } from "react";
import { adminSignin } from "../../../../../../actions/auth/adminAuth";
import { Input } from "../../../../../../components/ui/input";
import { SubmitButton } from "../../../../../../components/ui/submit-button";

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="transition-all duration-300 ease-in-out mb-4 opacity-100">
      <p className="text-black bg-red-300 w-full p-2 rounded-md">{message}</p>
    </div>
  );
};

const LoginForm = () => {
  const [state, loginAction] = useActionState(adminSignin, undefined);
  const [errorVisible, setErrorVisible] = useState(false);

  useEffect(() => {
    setErrorVisible(!!state?.error);
  }, [state?.error]);

  return (
    <div className="transition-all duration-300 ease-in-out">
      {errorVisible && <ErrorMessage message={state?.error} />}

      <form
        action={loginAction}
        className="transition-all duration-300 ease-in-out transform space-y-4"
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <Input
            id="email"
            name="email"
            placeholder="example@gmail.com"
            type="email"
            autoComplete="email"
            className="mt-1"
            error={state?.errors?.email}
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <Input
            id="password"
            name="password"
            placeholder="****"
            type="password"
            autoComplete="current-password"
            className="mt-1"
            error={state?.errors?.password}
          />
        </div>

        <div className="text-xs text-right">
          <a
            href="#"
            className="font-semibold text-gray-600 hover:text-gray-800"
          >
            Forgot password?
          </a>
        </div>

        <SubmitButton idleText="Sign in" />
      </form>
    </div>
  );
};

export default LoginForm;
