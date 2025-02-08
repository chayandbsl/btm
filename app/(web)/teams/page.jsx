import { getEmployeeSessionData } from "../../../actions/auth/employeeAuth";
import prisma from "../../../lib/db";
const getTeams = async (id) => {
  const myTeams = await prisma.team.findMany({
    where: {
      reference: id,
    },
    select: {
      id: true,
      name: true,
      mobile: true,
    },
  });

  return myTeams || [];
}
export default async function TeamListPage() {
  const user = await getEmployeeSessionData();

  const teams = await getTeams(user?.id);

  return (
    <>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <span className="font-medium">Home</span>
        <span>&gt;</span>
        <span className="font-medium text-blue-600">Your Teams</span>
      </div>

      {/* Banner Section */}
      <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center mb-8">
        <img
          src="/images/banner.jpg"
          alt="Team Banner"
          className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-white"
        />
        <h2 className="text-xl font-semibold mt-4">Your Teams</h2>
        <p className="text-sm text-gray-500">Build your perfect team today!</p>
      </div>

      {/* Teams List Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {teams.length === 0 ? (
          <div className="col-span-full text-center text-lg text-gray-500">
            You don’t have any teams yet. Start building your team today!
          </div>
        ) : (
          teams.map((team) => (
            <div
              key={team.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-lg font-semibold text-blue-600">{team.name}</h3>
              <p className="text-sm text-gray-500 mt-2">{team.mobile}</p>
              {/* <div className="mt-4 text-center">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  View Team
                </button>
              </div> */}
            </div>
          ))
        )}
      </div>
    </>
  );
}
