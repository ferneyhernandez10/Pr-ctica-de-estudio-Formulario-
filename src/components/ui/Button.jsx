import PropTypes from "prop-types";
import { forwardRef } from "react";

export const Button = forwardRef(function Button({ children, ...props }, ref) {
  return (
    <button
      className="focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-md px-16 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      {...props}
      ref={ref}
    >
      {children}
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
