import { getEmployeeSessionData } from "../../../../actions/auth/employeeAuth";
import prisma from "../../../../lib/db.js";
import TeamSignupForm from "../../_components/TeamSignupForm";

// Function to fetch team references from the database
const getReferences = async (id) => {
  const references = await prisma.$queryRaw`
    SELECT id, name FROM team 
    WHERE FIND_IN_SET(${id}, parent) 
    OR id = ${id}
  `;
  return references || [];
};

// Component to handle async data fetching with Suspense
const CreateTeamPage = async () => {
  const user = await getEmployeeSessionData();

  if (!user) {
    return <div>You are not authorized</div>;
  }

  const references = await getReferences(user?.id);

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

      <Suspense fallback={<div>Loading...</div>}>
        {/* Passing fetched references data to the signup form */}
        <TeamSignupForm references={references} />
      </Suspense>
    </>
  );
}

export default CreateTeamPage;
