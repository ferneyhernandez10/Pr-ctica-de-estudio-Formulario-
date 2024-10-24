import PropTypes from "prop-types";
import { forwardRef } from "react";

export const Select = forwardRef(function Select({ children, ...props }, ref) {
  return (
    <>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        {...props}
        ref={ref}
      >
        {children}
      </select>
    </>
  );
});

Select.propTypes = {
  props: PropTypes.node,
  children: PropTypes.node,
};

export default Select;
