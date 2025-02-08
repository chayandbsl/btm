import { Icons } from "../../../../../components/Icon.js";
export const TrustMetrics = () => (
  <div className="flex items-center space-x-4 mt-4">
    <div className="flex items-center">
      <Icons.user className="w-6 h-6 mr-2" />
      <p className="text-sm text-red-600 font-medium">15k+ Satisfied Vendors</p>
    </div>
    <div className="flex items-center">
      <span className="bg-gradient-to-r from-orange-400 to-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
        Secure
      </span>
      <p className="ml-2 text-sm">Data Protection Guaranteed</p>
    </div>
  </div>
);
