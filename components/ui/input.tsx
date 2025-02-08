import * as React from "react";
import { cn } from "../../lib/utils.js";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | string[];
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    const errorMessage = Array.isArray(error) ? error.join(", ") : error;

    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          className={cn(
            "h-10 border bg-transparent px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus:border-[#e74d2e77] focus:ring-[#e74c2e] block w-full rounded-md border-slate-300 shadow-sm sm:text-sm",
            error ? "border-[#e74d2e77]" : "border-slate-300",
            className
          )}
        />

        <div
          className={`
            text-xs mt-1 text-red-500 font-semibold transition-all duration-300 ease-in-out
            ${
              error
                ? "opacity-100 max-h-6 mb-2"
                : "opacity-0 max-h-0 mb-0 overflow-hidden"
            }
          `}
        >
          {errorMessage}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
