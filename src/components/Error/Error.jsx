import { useState, useEffect } from "react";
import ErrorCard from "./ErrorCard";
import { errors } from "../../data/error.json";

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
    return error.type.toLowerCase().includes(type.toLowerCase());
  });

  return (
    <section className="mx-4 md:w-5/6 my-12 grid grid-cols-12 justify-center gap-8 md:mx-auto">
      {filteredErrorByType.length === 0 ? (
        <h1 className="text-center text-2xl text-gray-500">No Error Found</h1>
      ) : (
        filteredErrorByType.map((error, idx) => (
          <ErrorCard key={idx} error={error} />
        ))
      )}
    </section>
  );
};

export default Error;
