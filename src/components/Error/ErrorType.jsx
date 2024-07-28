import useColorBorderBox from "../../hooks/useColorBorderBox";

function ErrorType({ type }) {
  const { errorTypeColor } = useColorBorderBox(type)
  return (
    <span
      className={`before:block mb-3 mt-1 top-2 left-2 h-4 before:absolute before:-inset-1 before:-skew-y-3 relative block before:bg-[${errorTypeColor}]`}
    >
      <span className="relative text-white text-sm -top-1">{type}</span>
    </span>
  );
}

export default ErrorType;
