import { User } from "lucide-react";
// import TeamSignupform from "../_components/TeamSignupForm";
export default function RegistrationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-10">
      {/* Main Content */}
      <div className="w-full max-w-xl px-4 md:px-6">
        {/* Logo and Welcome */}
        <div className="mb-10 text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="w-8 h-8 text-orange-600">
              <User className="w-full h-full" />
            </div>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Create Account
          </h1>
          <p className="mt-2 text-gray-600">Sign up to get started</p>
        </div>

        {/* Form Section */}
        {/* <TeamSignupform/> */}
      </div>
    </div>
  );
}
