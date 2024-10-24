import PropTypes from "prop-types";

export function Label2({ children }) {
  return (
    <label className="block text-sm font-medium leading-6 text-gray-700">
      {children}
    </label>
  );
}

Label2.propTypes = {
  children: PropTypes.node,
};

export default Label2;
