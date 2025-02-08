export default function FridayActivity() {
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
            Welcome to Friday activities
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

      <div className="max-w-md w-full bg-white rounded-3xl shadow-lg p-6 mb-5">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-2">
            <div className="bg-yellow-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-md">
              <span className="text-2xl font-bold">BTM</span>
            </div>
          </div>
          <h1 className="text-xl font-semibold text-gray-800">
            Business Technology Marketing
          </h1>
          <p className="text-sm text-gray-500">Productive Muslim</p>
          <p className="mt-1 text-gray-400">DAILY CHECKLIST INSHAALLAH</p>
        </div>

        <div className="grid grid-cols-5 gap-2 mb-6">
          <div className="text-center">
            <div className="px-2 py-1 bg-green-500 text-white rounded-md">
              Fjr
            </div>
          </div>
          <div className="text-center">
            <div className="px-2 py-1 bg-green-500 text-white rounded-md">
              Dhr
            </div>
          </div>
          <div className="text-center">
            <div className="px-2 py-1 bg-green-500 text-white rounded-md">
              Asr
            </div>
          </div>
          <div className="text-center">
            <div className="px-2 py-1 bg-green-500 text-white rounded-md">
              Mgrb
            </div>
          </div>
          <div className="text-center">
            <div className="px-2 py-1 bg-green-500 text-white rounded-md">
              Isha
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow">
            <span>Surah Mulk - Listen</span>
            <input type="checkbox" checked className="h-6 w-6 text-green-500" />
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow">
            <span>5 min exercise</span>
            <input type="checkbox" checked className="h-6 w-6 text-green-500" />
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow">
            <span>1 Deen lecture</span>
            <input type="checkbox" checked className="h-6 w-6 text-green-500" />
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow">
            <span>1 Motivational lecture</span>
            <input type="checkbox" checked className="h-6 w-6 text-green-500" />
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow">
            <span>30 Min Intensive Dhikr night</span>
            <input type="checkbox" checked className="h-6 w-6 text-green-500" />
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow">
            <span>Call Parents/ Relatives</span>
            <input type="checkbox" checked className="h-6 w-6 text-green-500" />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-8">
          <div className="text-center">
            <img
              src="/images/activity/quran.png"
              className="w-12 h-12 mx-auto"
            />
            <p className="text-xs mt-1">Quran</p>
          </div>
          <div className="text-center">
            <img
              src="/images/activity/tasbih.png"
              className="w-12 h-12 mx-auto"
            />
            <p className="text-xs mt-1">Tasbeeh</p>
          </div>
          <div className="text-center">
            <img
              src="/images/activity/miswak.png"
              className="w-12 h-12 mx-auto"
            />
            <p className="text-xs mt-1">Miswak</p>
          </div>
          <div className="text-center">
            <img
              src="/images/activity/prayer.png"
              className="w-12 h-12 mx-auto"
            />
            <p className="text-xs mt-1">Dua</p>
          </div>
        </div>
      </div>
    </>
  );
}
