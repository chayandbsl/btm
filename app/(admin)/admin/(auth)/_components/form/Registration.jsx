"use client";

import { useActionState, useEffect, useState } from "react";
import { signup } from "../../../../../../actions/auth";
import { Input } from "../../../../../../components/ui/input";
import { SubmitButton } from "../../../../../../components/ui/submit-button";

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div
      id="alert-border-2"
      className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800"
      role="alert"
    >
      <svg
        className="flex-shrink-0 w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <div className="ms-3 text-sm font-medium">{message}</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
        data-dismiss-target="#alert-border-2"
        aria-label="Close"
      >
        <span className="sr-only">Dismiss</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};
const RegistrationForm = () => {
  const [state, formAction] = useActionState(signup, undefined);
  const [errorVisible, setErrorVisible] = useState(false);

  useEffect(() => {
    setErrorVisible(!!state?.error);
  }, [state?.error]);

  return (
    <div className="transition-all duration-300 ease-in-out">
      {errorVisible && <ErrorMessage message={state?.error} />}

      <form
        action={formAction}
        className="transition-all duration-300 ease-in-out transform space-y-4"
      >
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-xs/6 font-medium text-gray-700"
            >
              Name
            </label>
            <Input
              id="name"
              name="name"
              placeholder="John"
              autoComplete="name"
              error={state?.errors?.name}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs/6 font-medium text-gray-700"
            >
              Email
            </label>
            <Input
              id="email"
              name="email"
              placeholder="example@gmail.com"
              type="email"
              autoComplete="email"
              error={state?.errors?.email}
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs/6 font-medium text-gray-700"
            >
              Phone
            </label>
            <Input
              id="phone"
              name="phone"
              placeholder="018********"
              type="tel"
              autoComplete="phone"
              error={state?.errors?.phone}
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-xs/6 font-medium text-gray-700"
              >
                Password
              </label>
            </div>
            <Input
              id="password"
              name="password"
              placeholder="****"
              type="password"
              autoComplete="current-password"
              error={state?.errors?.password}
            />
          </div>
        </div>

        <SubmitButton idleText="Sign up" />
      </form>
    </div>
  );
};

export default RegistrationForm;
