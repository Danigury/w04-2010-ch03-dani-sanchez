import PropTypes from "prop-types";

function Action({ href, text, className, actionOnClick }) {
  return (
    <a href={href} className={className} actionOnClick={actionOnClick}>
      {text}
    </a>
  );
}

Action.propTypes = {
  actionOnClick: PropTypes.func.isRequired,
};

export default Action;
