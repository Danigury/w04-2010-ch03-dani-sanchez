import PropTypes from "prop-types";
function Key({ text, actionOnClick }) {
  return (
    <li>
      <button onClick={actionOnClick}>{text}</button>
    </li>
  );
}

export default Key;

Key.propTypes = {
  text: PropTypes.string.isRequired,
  actionOnClick: PropTypes.func.isRequired,
};
