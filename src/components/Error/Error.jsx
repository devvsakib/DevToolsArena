import { useState, useEffect } from "react";
import ErrorCard from "./ErrorCard";
import { errors } from "../../data/error.json";
import { Toaster } from "react-hot-toast";

const Error = ({ search, type }) => {
  const [error, setError] = useState([]);
  useEffect(() => {
    setError(errors);
  }, []);

  const filteredError = error.filter((error) => {
    return (
      error.title.toLowerCase().includes(search.toLowerCase()) ||
      error.description.toLowerCase().includes(search.toLowerCase()) ||
      error.type.toLowerCase().includes(search.toLowerCase())
    );
  });

  const filteredErrorByType = filteredError.filter((error) => {
    if (type === "All") {
      return error;
    }
    return error.type.toLowerCase().includes(type.toLowerCase());
  });

  return (
    <>
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              theme: {
                primary: "#4aed88",
              },
            },
          }}
        ></Toaster>
      </div>
      <section className="mx-4 md:w-5/6 my-12 grid  px-5 md:px-0 justify-center gap-2 md:mx-auto ">
        {filteredErrorByType.length === 0 ? (
          <div className="col-span-12">
            <h1 className="text-center text-2xl text-gray-500 mx-auto">
              No Error Found
            </h1>
          </div>
        ) : (
          filteredErrorByType.map((error, idx) => (
            <ErrorCard key={idx} error={error} />
          ))
        )}
      </section>
    </>
  );
};

export default Error;
