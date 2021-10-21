import PropTypes from "prop-types";

function Action({ href, text, className, actionOnClick, calling }) {
  return (
    <a
      href={href}
      className={className + (calling ? "" : " active")}
      onClick={actionOnClick}
    >
      {text}
    </a>
  );
}

export default Action;
Action.propTypes = {
  actionOnClick: PropTypes.func.isRequired,
};
