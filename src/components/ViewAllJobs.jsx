import { Link } from "react-router-dom";

const ViewAllJobs = () => {
  return (
    <section>
      <div className="flex flex-row justify-center py-12">
        <Link
          to="/jobs"
          className="py-4 text-center text-white bg-gray-800 rounded-xl hover:bg-gray-900 size-1/2"
        >
          View All Jobs
        </Link>
      </div>
    </section>
  );
};
export default ViewAllJobs;
