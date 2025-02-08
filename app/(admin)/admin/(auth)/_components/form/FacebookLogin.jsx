"use client";

import { Icons } from "../../../../../../components/Icon";
import Button from "../../../../../../components/ui/button";

const GoogleLogin = () => {
  const handleLogin = () => {
    window.location.href =
      "http://localhost:3000/api/v1/auth/facebook/callback";
  };

  return (
    <div className="transition-all duration-300 ease-in-out">
      <form action={handleLogin} className="w-full">
        <Button
          type="submit"
          variant="ghost"
          size="md"
          className="w-full text-sm"
        >
          <Icons.facebook /> Signin with Facebook
        </Button>
      </form>
    </div>
  );
};

export default GoogleLogin;
