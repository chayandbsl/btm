import * as React from "react";
import { cn } from "../../lib/utils";

const Logo: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div className={cn("flex items-center space-x-2", className)} {...props}>
      <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-red-600 flex items-center justify-center rounded-full">
        {/* <Icons.alert className="w-4 h-4 text-white" /> */}
      </div>
      <h1
        className={cn(
          "text-3xl font-extrabold tracking-tight text-gray-600 dark:text-white",
          className
        )}
      >
        {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
          E
        </span>
        -Fake */}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
          BTM
        </span>
      </h1>
    </div>
  );
};

export default Logo;
