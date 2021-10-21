import PropTypes from "prop-types";

function Action({ href, text, className, actionOnClick }) {
  return (
    <a href={href} className={className} onClick={actionOnClick}>
      {text}
    </a>
  );
}

export default Action;
Action.propTypes = {
  actionOnClick: PropTypes.func.isRequired,
};
