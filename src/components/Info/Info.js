import PropTypes from "prop-types";
function Info({ isCalling }) {
  return <span className="message">{isCalling ? "Calling..." : ""}</span>;
}

Info.propTypes = {
  isCalling: PropTypes.string.isRequired,
};
export default Info;
