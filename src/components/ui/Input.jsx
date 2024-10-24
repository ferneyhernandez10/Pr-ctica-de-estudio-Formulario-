import { forwardRef } from "react";

export const Input = forwardRef(function Input(props, ref) {
  return (
    <input
      className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-1"
      {...props}
      ref={ref}
    />
  );
});

export default Input;
