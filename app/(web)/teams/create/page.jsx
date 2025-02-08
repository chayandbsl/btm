import { getEmployeeSessionData } from "../../../../actions/auth/employeeAuth";
import prisma from "../../../../lib/db.js";
import TeamSignupForm from "../../_components/TeamSignupForm";
export default async function CreateTeamPage() {
  const user = await getEmployeeSessionData();
  
  let references = [];
  references = await prisma.$queryRaw`
    SELECT id, name FROM team 
    WHERE FIND_IN_SET(${user?.id}, parent) 
    OR id = ${user?.id}
  `;

  console.dir(references);

  return (
    <>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <span className="font-medium">Back</span>
      </div>


      <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
        <img
          src="/images/banner.jpg"
          alt="Team Banner"
          className="w-20 h-20 mx-auto rounded-full object-cover"
        />
        <h2 className="text-lg font-semibold mt-2">Create Your Team</h2>
        <p className="text-sm text-gray-500">Build your perfect team today!</p>
      </div>


      {/* <form className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Team Name</label>
          <input
            type="text"
            className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter team name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Brief team description"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium">Upload Image</label>
          <input
            type="file"
            className="mt-1 w-full p-2 border rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Team
        </button>
      </form> */}
      <TeamSignupForm references={references}/>
    </>
  )
}