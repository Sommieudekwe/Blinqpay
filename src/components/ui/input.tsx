import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-[12px] border-2 border-border-connect bg-input px-5 py-4 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:font-[450] placeholder:text-button-connect focus-visible:outline-none focus-visible:border-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
          error
            ? "border-red-500 focus-visible:ring-red-400"
            : "focus-visible:ring-ring",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="relative">
        <div className="lock-icon absolute left-2 top-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
          >
            <path
              d="M11.8333 8.16667V5.66667C11.8333 3.36548 9.96785 1.5 7.66667 1.5C5.36548 1.5 3.5 3.36548 3.5 5.66667V8.16667M5 16.5H10.3333C11.7335 16.5 12.4335 16.5 12.9683 16.2275C13.4387 15.9878 13.8212 15.6054 14.0608 15.135C14.3333 14.6002 14.3333 13.9001 14.3333 12.5V12.1667C14.3333 10.7665 14.3333 10.0665 14.0608 9.53169C13.8212 9.06128 13.4387 8.67883 12.9683 8.43915C12.4335 8.16667 11.7335 8.16667 10.3333 8.16667H5C3.59987 8.16667 2.8998 8.16667 2.36502 8.43915C1.89462 8.67883 1.51217 9.06128 1.27248 9.53169C1 10.0665 1 10.7665 1 12.1667V12.5C1 13.9001 1 14.6002 1.27248 15.135C1.51217 15.6054 1.89462 15.9878 2.36502 16.2275C2.8998 16.5 3.59987 16.5 5 16.5Z"
              stroke="#667085"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <input
          ref={ref}
          type={showPassword ? "text" : "password"}
          className={cn(
            "flex h-12 w-full rounded-[12px] border-2 border-border-connect bg-input px-5 pl-8 py-4 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:font-[450] placeholder:text-button-connect focus-visible:outline-none focus-visible:border-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
            error
              ? "border-red-500 focus-visible:ring-red-400"
              : "focus-visible:ring-ring",
            className
          )}
          {...props}
        />
        <div className="absolute right-4 top-[1.05rem]">
          {showPassword ? (
            <span
              onClick={toggleShowPassword}
              role="button"
              className="cursor-pointer text-sm font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
              >
                <path
                  d="M2.14567 7.59434C2.03219 7.41464 1.97544 7.32479 1.94368 7.1862C1.91982 7.0821 1.91982 6.91794 1.94368 6.81384C1.97544 6.67525 2.03219 6.5854 2.14567 6.40571C3.08351 4.92072 5.87507 1.16669 10.1292 1.16669C14.3834 1.16669 17.175 4.92072 18.1128 6.4057C18.2263 6.5854 18.283 6.67525 18.3148 6.81384C18.3387 6.91794 18.3387 7.0821 18.3148 7.1862C18.283 7.32479 18.2263 7.41464 18.1128 7.59434C17.175 9.07932 14.3834 12.8334 10.1292 12.8334C5.87507 12.8334 3.08351 9.07932 2.14567 7.59434Z"
                  stroke="#667085"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.1292 9.50002C11.51 9.50002 12.6292 8.38073 12.6292 7.00002C12.6292 5.61931 11.51 4.50002 10.1292 4.50002C8.74853 4.50002 7.62924 5.61931 7.62924 7.00002C7.62924 8.38073 8.74853 9.50002 10.1292 9.50002Z"
                  stroke="#667085"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          ) : (
            <span
              onClick={toggleShowPassword}
              role="button"
              className="cursor-pointer text-sm font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
              >
                <path
                  d="M2.14567 7.59434C2.03219 7.41464 1.97544 7.32479 1.94368 7.1862C1.91982 7.0821 1.91982 6.91794 1.94368 6.81384C1.97544 6.67525 2.03219 6.5854 2.14567 6.40571C3.08351 4.92072 5.87507 1.16669 10.1292 1.16669C14.3834 1.16669 17.175 4.92072 18.1128 6.4057C18.2263 6.5854 18.283 6.67525 18.3148 6.81384C18.3387 6.91794 18.3387 7.0821 18.3148 7.1862C18.283 7.32479 18.2263 7.41464 18.1128 7.59434C17.175 9.07932 14.3834 12.8334 10.1292 12.8334C5.87507 12.8334 3.08351 9.07932 2.14567 7.59434Z"
                  stroke="#667085"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.1292 9.50002C11.51 9.50002 12.6292 8.38073 12.6292 7.00002C12.6292 5.61931 11.51 4.50002 10.1292 4.50002C8.74853 4.50002 7.62924 5.61931 7.62924 7.00002C7.62924 8.38073 8.74853 9.50002 10.1292 9.50002Z"
                  stroke="#667085"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          )}
        </div>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export { Input, PasswordInput };
