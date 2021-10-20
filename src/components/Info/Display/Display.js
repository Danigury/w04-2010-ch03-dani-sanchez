import PropTypes from "prop-types";

function Display({ text }) {
  return <span className="number">{text}</span>;
}
Display.prototypes = {
  text: PropTypes.string.isRequired,
};
export default Display;
