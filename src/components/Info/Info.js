function Info({ isCalling }) {
  return <span className="message">{isCalling ? "Calling..." : ""}</span>;
}

export default Info;
