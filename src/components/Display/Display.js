import PropTypes from "prop-types";

function Display({ text }) {
  return <span className="number">{text}</span>;
}

export default Display;
Display.prototypes = {
  text: PropTypes.string.isRequired,
};
