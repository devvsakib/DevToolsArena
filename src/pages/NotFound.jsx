import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div class="flex h-screen">
      <div class="m-auto">
        <h1 class="mb-5">Not found</h1>
        {" "}
        <Link
          to="/"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
