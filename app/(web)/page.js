import Link from "next/link";
import { Icons } from "../../components/Icon";

export default function Home() {
  return (
    <>
      <div className="relative rounded-md overflow-hidden mb-4">
        <img
          src="/images/banner.jpg"
          alt="Banner"
          className="w-full h-36 md:h-96 object-cover rounded-md"
        />
      </div>

      
      <div className="my-8">
        <div className="grid grid-cols-4 gap-6 md:gap-6 sm:grid-cols-3 md:grid-cols-8 text-center text-neutral-700">
          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <Link href="/teams/create" className="block">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-blue-100 flex items-center justify-center">
                <img
                  src="/images/team-3.png"
                  alt="Send Money"
                  className="object-cover w-12 h-12"
                />
              </div>
            </Link>
            <Link href="/teams/create" className="block">
              <span className="text-xs md:text-sm mt-2 font-semibold leading-tight">
              Add New Team
              </span>
            </Link>
          </div>

          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-teal-100 flex items-center justify-center">
            <Link href="/teams/create" className="block">
              <img
                src="/images/team-1.png"
                alt="Teams"
                className="object-cover w-12 h-12"
              />
            </Link>
            </div>
            <span className="text-xs md:text-sm mt-2 font-semibold leading-tight">
              My Teams
            </span>
          </div>

          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-green-100 flex items-center justify-center">
              <img
                src="/images/monitor-1.png"
                alt="Monitoring"
                className="object-cover w-12 h-12"
              />
            </div>
            <span className="text-xs md:text-sm mt-2 font-semibold leading-tight">
              Monitoring
            </span>
          </div>

          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-yellow-100 flex items-center justify-center">
              <img
                src="/images/progress-2.png"
                alt="Progress"
                className="object-cover w-12 h-12"
              />
            </div>
            <span className="text-xs md:text-sm mt-2 font-semibold leading-tight">
              Progress
            </span>
          </div>

          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-red-100 flex items-center justify-center">
              <img
                src="/images/to-do-1.png"
                alt="ToDo"
                className="object-cover w-12 h-12"
              />
            </div>
            <span className="text-xs md:text-sm mt-2 font-semibold leading-tight">
              ToDo
            </span>
          </div>

          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-indigo-100 flex items-center justify-center">
              <img
                src="/images/statement.png"
                alt="Statement"
                className="object-cover w-12 h-12"
              />
            </div>
            <span className="text-xs md:text-sm mt-2 font-semibold leading-tight">
              Statement
            </span>
          </div>

          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-purple-100 flex items-center justify-center">
              <img
                src="/images/program-1.png"
                alt="Program Update"
                className="object-cover w-12 h-12"
              />
            </div>
            <span className="text-xs md:text-sm mt-2 font-semibold leading-tight">
              Program Update
            </span>
          </div>

          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-pink-100 flex items-center justify-center">
              <a href="./activities/list.html" className="block">
                <img
                  src="/images/activity-1.png"
                  alt="Activities"
                  className="object-cover w-12 h-12"
                />
              </a>
            </div>
            <span className="text-xs md:text-sm mt-2 font-semibold leading-tight">
              Activities
            </span>
          </div>

          
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Link className="block" href="/daily-activity">
          <div className="bg-orange-100 rounded-2xl p-4 shadow-md flex flex-col items-start">
            <div className="bg-orange-500 p-2 rounded-full text-white">
              <Icons.list />
            </div>
            <h4 className="mt-4 text-xs md:text-lg font-semibold">
              Daily Activists
            </h4>
          </div>
        </Link>

        <div className="bg-green-100 rounded-2xl p-4 shadow-md flex flex-col items-start">
          <div className="bg-green-500 p-2 rounded-full text-white">
            <Icons.clock />
          </div>
          <h4 className="mt-4 text-xs md:text-lg font-semibold">
            Daily Work Monitoring
          </h4>
        </div>

        <div className="bg-purple-100 rounded-2xl p-4 shadow-md flex flex-col items-start">
          <div className="bg-purple-500 p-2 rounded-full text-white">
            <Icons.chartLine />
          </div>
          <h4 className="mt-4 text-xs md:text-lg font-semibold">
            Progress Review
          </h4>
        </div>

        <div className="bg-gray-100 rounded-2xl p-4 shadow-md flex flex-col items-start">
          <div className="bg-gray-500 p-2 rounded-full text-white">
            <Icons.calender />
          </div>
          <h4 className="mt-4 text-xs md:text-lg font-semibold">To Do</h4>
        </div>
      </div>

      <div className="bg-white rounded-2xl border shadow-sm my-8 p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Daily Work Monitoring
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-700">Task 1: Complete by 10 AM</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-700">Task 2: Review by 2 PM</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-700">Task 3: Submit by 5 PM</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-700">Task 4: Meeting at 6 PM</p>
          </div>
        </div>
      </div>
    </>
  );
}
