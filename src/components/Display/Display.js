import PropTypes from "prop-types";
import { useContext } from "react";
import Context from "../Context/Context";

function Display({ text }) {
  const clickNumber = useContext(Context);
  return <span className="number">{clickNumber}</span>;
}

export default Display;
Display.prototypes = {
  text: PropTypes.string.isRequired,
};
