import PropTypes from "prop-types";
function Info({ isCalling }) {
  return <span className="message">{isCalling ? "Calling..." : ""}</span>;
}

export default Info;
Info.propTypes = {
  isCalling: PropTypes.bool.isRequired,
};
