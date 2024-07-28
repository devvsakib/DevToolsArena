import "./css/style.css";

function ErrorSolutions({ solutions }) {
  if (!solutions) {
    return (
      <>
        <p className="text-red-400">No Solution Found</p>
        <p className="text-gray text-sm">
          You can add solution and be a part of open-source projects
        </p>
      </>
    );
  }

  return (
    <ul id="scroll-solution">
      {solutions.split("<").map((solution, index) => (
        <li key={index} className="text-sm break-all" >
          {solution}
        </li>
      ))}
    </ul>
  );
}

export default ErrorSolutions;
