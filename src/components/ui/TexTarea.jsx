import { forwardRef } from "react";

export const TexTarea = forwardRef(function TexTarea(props, ref) {
  return (
    <textarea
      className="block p-2.5 w-full text-gray-900 text-base bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      {...props}
      ref={ref}
    />
  );
});

export default TexTarea;
