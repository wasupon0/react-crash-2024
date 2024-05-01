import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="m-auto container-xl lg:container">
        <div className="grid grid-cols-1 gap-4 p-4 rounded-lg md:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold">For Developers</h2>
            <p className="mt-2 mb-4">
              Browse our React jobs and start your career today
            </p>
            <a
              href="/jobs.html"
              className="inline-block px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-700"
            >
              Browse Jobs
            </a>
          </Card>

          <Card bg="bg-indigo-100">
            <h2 className="text-2xl font-bold">For Employers</h2>
            <p className="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
            <a
              href="/add-job.html"
              className="inline-block px-4 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600"
            >
              Add Job
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default HomeCards;
