import PropTypes from "prop-types";

export function Label1({ children }) {
  return (
    <label className="block text-lg font-medium leading-10 text-gray-900">
      {children}
    </label>
  );
}

Label1.propTypes = {
  children: PropTypes.node,
};

export default Label1;
