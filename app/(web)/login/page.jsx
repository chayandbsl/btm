// import { Apple, ArrowRight, Chrome, Lock, Mail } from 'lucide-react';
// import Link from "next/link";

// export default function LoginPage() {
//   return (
//     <div className="min-h-screen bg-black text-white overflow-hidden relative">
//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -inset-[10px] opacity-50">
//           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
//           <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
//           <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
//         </div>
//         <div className="absolute inset-0 bg-black/40 backdrop-blur-2xl"></div>
//       </div>

//       {/* Content Container */}
//       <div className="relative h-full min-h-screen flex flex-col">
//         {/* Top Section */}
//         <div className="flex-1 flex flex-col justify-center px-8 pt-20 pb-12">
//           <div className="w-24 h-24 mx-auto mb-12 relative">
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl rotate-12 animate-pulse"></div>
//             <div className="absolute inset-0.5 bg-black rounded-3xl rotate-12 flex items-center justify-center">
//               <Lock className="w-12 h-12 text-white transform -rotate-12" />
//             </div>
//           </div>
//           <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//             Welcome Back
//           </h1>
//           <p className="text-center text-gray-400 text-lg">
//             Sign in to continue your journey
//           </p>
//         </div>

//         {/* Login Form Section */}
//         <div className="relative px-6 pb-12">
//           <div className="space-y-6">
//             {/* Social Login Buttons */}
//             <div className="grid grid-cols-2 gap-4 mb-8">
//               <button className="flex items-center justify-center gap-2 py-4 px-6 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all duration-300">
//                 <Apple className="h-6 w-6" />
//                 <span className="font-medium">Apple</span>
//               </button>
//               <button className="flex items-center justify-center gap-2 py-4 px-6 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all duration-300">
//                 <Chrome className="h-6 w-6" />
//                 <span className="font-medium">Google</span>
//               </button>
//             </div>

//             {/* Divider */}
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-700"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-4 bg-black text-gray-400">or continue with email</span>
//               </div>
//             </div>

//             {/* Email Input */}
//             <div className="relative group">
//               <input
//                 type="email"
//                 className="w-full px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border-0 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
//                 placeholder="Email address"
//               />
//               <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-purple-500" />
//             </div>

//             {/* Password Input */}
//             <div className="relative group">
//               <input
//                 type="password"
//                 className="w-full px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border-0 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
//                 placeholder="Password"
//               />
//               <Lock className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-purple-500" />
//             </div>

//             {/* Remember & Forgot */}
//             <div className="flex items-center justify-between py-2">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="w-5 h-5 rounded-md border-0 bg-white/10 text-purple-500 focus:ring-offset-0 focus:ring-2 focus:ring-purple-500"
//                 />
//                 <span className="ml-2 text-sm text-gray-400">Remember me</span>
//               </label>
//               <button className="text-sm font-medium text-purple-400 hover:text-purple-300">
//                 Forgot password?
//               </button>
//             </div>

//             {/* Sign In Button */}
//             <Link href="/dashboard">
//               <button className="relative w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-lg font-semibold hover:opacity-90 transition-all duration-300 group">
//                 <span>Sign in</span>
//                 <ArrowRight className="absolute right-6 top-1/2 transform -translate-y-1/2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </Link>

//             {/* Sign Up Link */}
//             <p className="mt-6 text-center text-gray-400">
//               Don't have an account?{' '}
//               <Link href="/signup" className="text-purple-400 hover:text-purple-300 font-medium">
//                 Create one
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Lock } from "lucide-react";
import TeamLoginForm from "../_components/TeamLoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-xl px-6">
        {/* Logo and Welcome */}
        <div className="mb-10 text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="w-8 h-8 text-indigo-600">
              <Lock className="w-full h-full" />
            </div>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Welcome back!
          </h1>
          <p className="mt-2 text-gray-600">Please sign in to continue</p>
        </div>

        {/* Form Section */}
        <TeamLoginForm />
      </div>
    </div>
  );
}
