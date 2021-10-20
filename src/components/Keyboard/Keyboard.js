import PropTypes from "prop-types";
function Keyboard({ text, actionOnClick }) {
  return (
    <li>
      <button onClick={actionOnClick}>{text}</button>
    </li>
  );
}

export default Keyboard;

Keyboard.propTypes = {
  text: PropTypes.string.isRequired,
  actionOnClick: PropTypes.func.isRequired,
};
