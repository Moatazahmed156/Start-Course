import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold text-white">404 - Page Not Found</h1>
      <Link
        to="/"
        className="mt-8 px-8  py-4 bg-[#700608] text-white rounded hover:bg-[#700608ce]"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
