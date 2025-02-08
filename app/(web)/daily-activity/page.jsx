import Link from "next/link";
export default function DailyActivity() {
  return (
    <>
      <div className="relative rounded-md overflow-hidden mb-6">
        <img
          src="../images/banner.jpg"
          alt="Banner"
          className="w-full h-36 md:h-96 object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-5xl font-bold">
            Welcome to Activities
          </h1>
        </div>
      </div>
      <div className="mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="group border bg-gradient-to-br break-words from-violet-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center p-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="ml-2 md:ml-4">
                <p className="text-sm font-medium text-violet-900 group-hover:text-violet-700 transition-colors">
                  Active Users
                </p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-bold bg-gradient-to-r from-violet-700 to-purple-600 text-transparent bg-clip-text">
                    150+
                  </p>
                  <span className="ml-2 text-xs text-violet-500 hidden md:block">
                    ↑12%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="group border bg-gradient-to-br break-words from-green-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center p-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-2 md:ml-4">
                <p className="text-sm font-medium text-green-900 group-hover:text-green-700 transition-colors">
                  Completion
                </p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 text-transparent bg-clip-text">
                    89%
                  </p>
                  <span className="ml-2 text-xs text-green-500 hidden md:block">
                    ↑5%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="group border bg-gradient-to-br break-words from-blue-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center p-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-2 md:ml-4">
                <p className="text-sm font-medium text-blue-900 group-hover:text-blue-700 transition-colors">
                  Time Saved
                </p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 text-transparent bg-clip-text">
                    12hrs
                  </p>
                  <span className="ml-2 text-xs text-blue-500 hidden md:block">
                    ↑8%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="group border bg-gradient-to-br break-words from-orange-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center p-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div className="ml-2 md:ml-4">
                <p className="text-sm font-medium text-orange-900 group-hover:text-orange-700 transition-colors">
                  Productivity
                </p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-bold bg-gradient-to-r from-orange-700 to-red-600 text-transparent bg-clip-text">
                    +23%
                  </p>
                  <span className="ml-2 text-xs text-orange-500 hidden md:block">
                    ↑15%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-8">
        <div className="flex justify-between items-center pb-6">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 text-transparent bg-clip-text">
              Explore Activities
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Choose your activity type
            </p>
          </div>
          <a
            href="#"
            className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-300"
          >
            See All
          </a>
        </div>

        <div className="bg-gradient-to-b from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="group cursor-pointer">
              <div className="flex flex-col items-center">
                <Link href="/friday-activity" className="block">
                  <div className="relative">
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center transform group-hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-100">
                      <div className="absolute inset-0 bg-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <img
                        src="../images/friday.png"
                        alt="Friday Activities"
                        className="w-12 h-12 md:w-16 md:h-16 object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-xs text-white font-bold">5</span>
                    </div>
                  </div>
                </Link>
                <div className="mt-4 text-center">
                  <span className="block text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    Friday Activities
                  </span>
                  <p className="text-xs text-gray-500 mt-1 px-2 py-1 bg-gray-50 rounded-full">
                    Exciting events every Friday!
                  </p>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <Link href="#" className="block">
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center transform group-hover:scale-105 transition-all duration-300 shadow-lg shadow-green-100">
                      <div className="absolute inset-0 bg-green-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <img
                        src="../images/daily.png"
                        alt="Daily Activities"
                        className="w-12 h-12 md:w-16 md:h-16 object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">3</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <span className="block text-sm font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                    Daily Activities
                  </span>
                  <p className="text-xs text-gray-500 mt-1 px-2 py-1 bg-gray-50 rounded-full">
                    Fun tasks every day!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
        <a
          href="#"
          className="block transform hover:scale-[1.02] transition-all duration-300"
        >
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-6 border border-blue-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                    Friday Activities
                  </h3>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                    Weekly
                  </span>
                </div>
                <p className="text-gray-600 mt-1">
                  Team events & collaboration
                </p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-3">
                  <div className="text-2xl font-bold text-blue-700">45</div>
                  <div className="text-xs text-blue-600">Participants</div>
                </div>
                <div className="bg-green-50 rounded-xl p-3">
                  <div className="text-2xl font-bold text-green-700">87%</div>
                  <div className="text-xs text-green-600">Completion</div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-gray-700">
                  Upcoming Events
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Team Building</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>Skills Workshop</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                    <span>Project Review</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </a>

        <a
          href="#"
          className="block transform hover:scale-[1.02] transition-all duration-300"
        >
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg p-6 border border-green-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-800 text-transparent bg-clip-text">
                    Daily Activities
                  </h3>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                    Daily
                  </span>
                </div>
                <p className="text-gray-600 mt-1">Regular operations</p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-xl p-3">
                  <div className="text-2xl font-bold text-green-700">120</div>
                  <div className="text-xs text-green-600">Participants</div>
                </div>
                <div className="bg-teal-50 rounded-xl p-3">
                  <div className="text-2xl font-bold text-teal-700">92%</div>
                  <div className="text-xs text-teal-600">Completion</div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-gray-700">
                  Today's Schedule
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Morning Standup</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                    <span>Task Reviews</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm text-gray-600">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    <span>Daily Reports</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
