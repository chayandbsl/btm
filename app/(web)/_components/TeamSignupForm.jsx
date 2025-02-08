"use client";

import { useActionState, useEffect, useState } from "react";
import { employeeSignup } from "../../../actions/auth/employeeAuth";
import { SubmitButton } from "../../../components/ui/submit-button.tsx";

import { CheckCircle, Lock, Mail, User } from "lucide-react";

const Message = ({ message, type }) => {
  if (!message) return null;

  return (
    <div
      className={`transition-all duration-300 ease-in-out mb-4 opacity-100 p-3 rounded-md text-white ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <p className="flex items-center">
        {type === "success" ? (
          <CheckCircle className="mr-2 h-5 w-5" />
        ) : null}
        {message}
      </p>
    </div>
  );
};

const TeamSignupForm = ({ references }) => {
  const [state, loginAction] = useActionState(employeeSignup, undefined);
  const [errorVisible, setErrorVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);

  useEffect(() => {
    setErrorVisible(!!state?.error);
    setSuccessVisible(!!state?.success);
  }, [state]);

  return (
    <div className="transition-all duration-300 ease-in-out my-4">
      {errorVisible && <Message message={state?.error} type="error" />}
      {successVisible && <Message message="Successfully team created" type="success" />}

      <form
        action={loginAction}
        className="transition-all duration-300 ease-in-out transform space-y-4"
      >
        <div className="space-y-4">
          {/* Full Name Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 block pl-1">
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all"
                placeholder="John Doe"
              />
              <User className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <div
                className={`text-xs mt-0.5 text-red-500 font-semibold transition-all duration-300 ease-in-out ${
                  state?.errors?.name ? "opacity-100 max-h-6 mb-2" : "opacity-0 max-h-0 mb-0 overflow-hidden"
                }`}
              >
                {state?.errors?.name}
              </div>
            </div>
          </div>

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
                className={`text-xs mt-0.5 text-red-500 font-semibold transition-all duration-300 ease-in-out ${
                  state?.errors?.email ? "opacity-100 max-h-6 mb-2" : "opacity-0 max-h-0 mb-0 overflow-hidden"
                }`}
              >
                {state?.errors?.email}
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 block pl-1">
              Mobile
            </label>
            <div className="relative">
              <input
                type="number"
                name="mobile"
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all"
                placeholder="018******"
              />
              <User className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <div
                className={`text-xs mt-0.5 text-red-500 font-semibold transition-all duration-300 ease-in-out ${
                  state?.errors?.mobile ? "opacity-100 max-h-6 mb-2" : "opacity-0 max-h-0 mb-0 overflow-hidden"
                }`}
              >
                {state?.errors?.mobile}
              </div>
            </div>
          </div>

          {/* Reference team member */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 block pl-1">
              Reference
            </label>
            <div className="relative">
              <select name="reference" className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all">
                <option value="">--select--</option>
                {references.map((reference) => (
                  <option key={reference.id} value={reference.id}>
                    {reference?.name}
                  </option>
                ))}
              </select>
              <User className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <div
                className={`text-xs mt-0.5 text-red-500 font-semibold transition-all duration-300 ease-in-out ${
                  state?.errors?.reference ? "opacity-100 max-h-6 mb-2" : "opacity-0 max-h-0 mb-0 overflow-hidden"
                }`}
              >
                {state?.errors?.reference}
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
                placeholder="Create a password"
              />
              <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <div
                className={`text-xs mt-0.5 text-red-500 font-semibold transition-all duration-300 ease-in-out ${
                  state?.errors?.password ? "opacity-100 max-h-6 mb-2" : "opacity-0 max-h-0 mb-0 overflow-hidden"
                }`}
              >
                {state?.errors?.password}
              </div>
            </div>
          </div>

          {/* Sign Up Button */}
          <SubmitButton idleText="Submit" />
        </div>
      </form>
    </div>
  );
};

export default TeamSignupForm;
