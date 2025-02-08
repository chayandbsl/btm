import { Icons } from "../../../../../components/Icon.js";
import LoginForm from "../_components/form/Login.jsx";

const loginPageInfo = {
  title: "Welcome Back!",
  subTitle:
    "Empowering e-commerce with transparency and trust. Log in to access customer insights and enhance genuine transactions.",
  moto: "Our platform provides vendors with critical data, helping to build trust, prevent fraud, and ensure the authenticity of each transaction.",
};

export default async function LoginPage() {
  return (
    <>
     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-600 flex items-center justify-center rounded-full">
              <Icons.alert className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-center text-xl/9 font-bold tracking-tight text-gray-600/80">
            Login to your account
          </h2>
        </div>

        <div className="mt-2 w-full sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mt-7 flex flex-col gap-2">
            {/* Social provider */}
            {/* <GoogleLogin />
            <FacebookLogin /> */}
          </div>

          {/* <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
            <div className="h-px w-full bg-slate-200"></div>
            OR
            <div className="h-px w-full bg-slate-200"></div>
          </div> */}

          <LoginForm />

          {/* <p className="mt-10 text-center text-xs/5 text-slate-500">
            New to E-FakeFilter?
            <Link
              href="/app/registration"
              className="block font-semibold text-slate-600 underline hover:text-slate-700"
            >
              Create an account
            </Link>
          </p> */}
        </div>
    </>
  );
}
