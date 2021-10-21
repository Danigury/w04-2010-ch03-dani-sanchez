import PropTypes from "prop-types";
function Key({ text, actionOnClick }) {
  return (
    <li>
      <button
        className={text === "DEL" ? "key big" : "key"}
        onClick={actionOnClick}
      >
        {text}
      </button>
    </li>
  );
}

export default Key;

Key.propTypes = {
  text: PropTypes.string.isRequired,
  actionOnClick: PropTypes.func.isRequired,
};
