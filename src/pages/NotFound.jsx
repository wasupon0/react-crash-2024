import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center h-96">
      <FaExclamationTriangle className="mb-4 text-6xl text-yellow-400"></FaExclamationTriangle>
      <h1 className="mb-4 text-3xl font-bold">404 Not Found</h1>
      <p className="mb-5 text-xl">This page does not exists</p>
      <Link
        to="/"
        className="px-3 py-2 mt-4 text-white bg-indigo-700 rounded hover:bg-indigo-900"
      >
        Go Back
      </Link>
    </section>
  );
};
export default NotFound;
