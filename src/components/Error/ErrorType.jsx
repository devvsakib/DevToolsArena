function ErrorType({ type }) {
  return (
    <span
      className={`before:block mb-3 mt-1 top-2 left-2 h-4 before:absolute before:-inset-1 before:-skew-y-3 relative inline-block ${
        type === "add"
          ? "before:bg-[#4024e0]"
          : type === "commit"
          ? "before:bg-[#1a5ba5]"
          : type === "push"
          ? "before:bg-[#8d54e1]"
          : type === "branch"
          ? "before:bg-[#40e4f0]"
          : "before:bg-[#7e1aa5]"
      }`}
    >
      <span className="relative text-white text-sm -top-1">{type}</span>
    </span>
  );
}

export default ErrorType;
