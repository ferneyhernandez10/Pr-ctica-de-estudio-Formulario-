import PropTypes from "prop-types";

export const Th = ({ children }) => {
  return <th className="border border-gray-400 px-4 py-2">{children}</th>;
};

Th.propTypes = {
  children: PropTypes.node,
};

export default Th;
