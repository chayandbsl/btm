import { Icons } from "../Icon";

export default function Footer() {
  return (
    <>
      <nav className="bg-white fixed bottom-0 w-full border-t border-gray-200 md:hidden shadow-lg rounded-t-lg">
        <div className="flex justify-around items-center h-16">
          <button className="primary-color-text nav-item">
            <Icons.home />
          </button>
          <button className="text-gray-400 hover:text-primary-color transition-colors nav-item">
            <Icons.chartBar />
          </button>
          <button className="text-gray-400 hover:text-primary-color transition-colors relative nav-item">
            <Icons.bell />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
              3
            </span>
          </button>
          <button className="text-gray-400 hover:text-primary-color transition-colors nav-item">
            <Icons.user />
          </button>
        </div>
      </nav>

      <button className="md:hidden fixed right-4 bottom-20 bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
        <Icons.plus />
      </button>
    </>
  );
}
