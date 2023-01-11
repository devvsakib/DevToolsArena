import { useState, useEffect } from "react";
import ErrorCard from "./ErrorCard";
import { errors } from "../../data/error.json";

const Error = ({ search }) => {
    const [error, setError] = useState([])
    useEffect(() => {
        setError(errors)
    }, [])

  const filteredError = error.filter((error) => {
    return (
      error.title.toLowerCase().includes(search.toLowerCase()) ||
      error.description.toLowerCase().includes(search.toLowerCase()) ||
      error.type.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <section className="mx-4 md:w-5/6 my-12 grid grid-cols-12 justify-center gap-8 md:mx-auto">
      {filteredError.length === 0 ? (
        <h1 className="text-center col-span-12 md:text-xl text-gray">
          No Errors Found
        </h1>
      ) : (
        filteredError.map((error, idx) => <ErrorCard key={idx} error={error} />)
      )}
    </section>
  );
};

export default Error;
