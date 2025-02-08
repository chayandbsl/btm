import Link from "next/link";
import { Icons } from "../../../../../components/Icon";
import { InfoSection } from "../_components/InfoSection";
import RegistrationForm from "../_components/form/Registration";

const registerPageInfo = {
  title: "Join Our Trusted Network",
  subTitle:
    "Empowering vendors with customer insights. Register now to make informed decisions and cultivate authentic customer relationships.",
  moto: "Start building a foundation of trust and transparency in your e-commerce journey.",
};

export default function LoginPage() {
  return (
    <>
      <InfoSection pageInfo={registerPageInfo} />

      {/* Right Section */}
      <div className="flex flex-col items-center justify-center bg-white p-8 md:w-1/2 lg:w-1/2 xl:w-3/5  rounded-tl-3xl md:rounded-none shadow-lg space-y-4 h-screen md:h-auto">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-600 flex items-center justify-center rounded-full">
              <Icons.alert className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-center text-xl/9 font-bold tracking-tight text-gray-600/80">
            Create Your Account
          </h2>
        </div>

        <div className="mt-10 w-full  sm:mx-auto sm:w-full sm:max-w-sm">
          <RegistrationForm />

          <p className="mt-6 text-center text-xs/5 text-slate-500">
            Already have an account?
            <Link
              href="/app/login"
              className="block font-semibold text-slate-600 underline hover:text-slate-700"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
