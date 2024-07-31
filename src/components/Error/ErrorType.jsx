function ErrorType({ type }) {
  return (
    <span
      className={`before:block mb-3 mt-1 top-2 left-2 h-4 before:absolute before:-inset-1 before:-skew-y-3 relative inline-block ${type === "add"
        ? "before:bg-add"
        : type === "commit"
          ? "before:bg-commit"
          : type === "merge"
            ? "before:bg-merge"
            : type === "push"
              ? "before:bg-push"
              : type === "branch"
                ? "before:bg-branch"
                : type === "cmd"
                  ? "before:bg-cmd"
                  : "before:bg-default"
        }`}
    >
      <span className="relative text-sm -top-1">{type}</span>
    </span>
  );
}

export default ErrorType;
