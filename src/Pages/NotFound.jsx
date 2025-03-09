import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="bg-[url('/cover.png')] bg-cover relative bg-center bg-cover bg-repeat-y max-md:bg-contain ">
      <div className="absolute inset-0 backdrop-blur-md "></div>
      <div className="content relative flex flex-col gap-4 items-center justify-center min-h-[100vh] font-bold">
        <h1 className="text-5xl text-center text-white max-md:text-4xl">
          NOT FOUND😔
        </h1>
        <p className="text-5xl text-center text-white max-md:text-4xl">404</p>
        <Link
          to="/"
          className="mt-4 px-16  py-2 hover:bg-[#700608] border border-2 border-gray-300 shadow-[0_1px_10px_#007199] rounded-2xl text-white rounded hover:bg-[#700608ce]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
