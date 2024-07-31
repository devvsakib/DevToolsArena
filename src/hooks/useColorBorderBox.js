const useColorBorderBox = (error = "") => {
  let item = error.type;
  let borderColor = `py-4 mb-4 col-span-12 md:col-span-6 xl:col-span-4 px-2 md:px-6 border-l-4 rounded-lg   items-start bg-dark/5 dark:bg-white/5 backdrop-blur-[10px] flex flex-col hover:scale-105 duration-300 ${item === "add"
    ? "border-add"
    : item === "commit"
      ? "border-commit"
      : item === "merge"
        ? "border-merge"
        : item === "push"
          ? "border-push"
          : item === "cmd"
            ? "border-cmd"
            : item === "branch"
              ? "border-branch"
              : "border-default"
    }`


  return { borderColor }
}
export default useColorBorderBox;