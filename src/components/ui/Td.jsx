import PropTypes from "prop-types";

export const Td = ({ children }) => {
  return <td className="border border-gray-400 px-4 py-2">{children}</td>;
};

Td.propTypes = {
  children: PropTypes.node,
};

export default Td;
