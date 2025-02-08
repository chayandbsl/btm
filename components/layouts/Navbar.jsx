
import Link from "next/link";
import { employeeSignout } from "../../actions/auth/employeeAuth";
import { useEmployeeSession } from "../../contexts/auth/SessionContext";
import { Icons } from "../Icon";

export default function Navbar() {
  const { userData } = useEmployeeSession();
  return (
    <nav className="bg-[#F8FAFC] shadow-xl fixed w-full top-0 z-50 rounded-b-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <img
                src="/images/avatar.jpg"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </Link>
            <div className="text-[#111827]">
              <span className="block text-xs text-[#6B7280] font-semibold">
                Welcome Back
              </span>
              <span className="text-xl font-bold">{userData?.name}</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-[#111827] nav-item relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-white shadow-lg transition-all duration-300">
              <Icons.bell />
              <span className="absolute bottom-6 -right-1 bg-red-500 w-3 h-3 rounded-full"></span>
            </button>
            <form action={employeeSignout}>
              <button
                type="submit"
                title="logout"
                className="text-[#111827] nav-item relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-white shadow-lg transition-all duration-300"
              >
                <Icons.login />
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
