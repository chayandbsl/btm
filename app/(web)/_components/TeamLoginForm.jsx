"use client";

import { useActionState, useEffect, useState } from "react";
import { employeeSignin } from "../../../actions/auth/employeeAuth";
import { SubmitButton } from "../../../components/ui/submit-button.tsx";

import { Lock, Mail } from "lucide-react";

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="transition-all duration-300 ease-in-out mb-4 opacity-100">
      <p className="text-black bg-red-300 w-full p-2 rounded-md">{message}</p>
    </div>
  );
};

const TeamLoginForm = () => {
  const [state, loginAction] = useActionState(employeeSignin, undefined);
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
       <div className="space-y-6">
          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 block pl-1">
              Email address
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all"
                placeholder="name@example.com"
              />
              <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <div
                className={`
                  text-xs mt-0.5 text-red-500 font-semibold transition-all duration-300 ease-in-out
                  ${
                    state?.errors?.email
                      ? "opacity-100 max-h-6 mb-2"
                      : "opacity-0 max-h-0 mb-0 overflow-hidden"
                  }
                `}
              >
                {state?.errors?.email}
              </div>
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 block pl-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all"
                placeholder="Enter your password"
              />
              <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />

              <div
                className={`
                  text-xs mt-0.5 text-red-500 font-semibold transition-all duration-300 ease-in-out
                  ${
                    state?.errors?.password
                      ? "opacity-100 max-h-6 mb-2"
                      : "opacity-0 max-h-0 mb-0 overflow-hidden"
                  }
                `}
              >
                {state?.errors?.password}
              </div>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            {/* <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
              Forgot password?
            </button> */}
          </div>

          {/* Sign In Button */}
          {/* <Link href="/" className="block">
            <button className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 group">
              Sign in
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </Link> */}
          <SubmitButton idleText="Sign in" />

          {/* Sign Up Link */}
          {/* <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Sign up
            </Link>
          </p> */}
        </div>

      </form>
    </div>
  );
};

export default TeamLoginForm;
