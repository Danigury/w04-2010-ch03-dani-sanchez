import { useState } from "react";
import "./App.css";
import Context from "./components/Context/Context";
import Info from "./components/Info/Info";
import Key from "./components/Key/Key";
import Display from "./components/Display/Display";
import Action from "./components/Action/Action";

function App() {
  const keyNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "DEL"];
  const [clickedNumber, setClickedNumber] = useState([]);

  const numberClickedEvent = (event) => {
    const newNumber = event.target.innerText;
    newNumber === "delete"
      ? setClickedNumber([])
      : clickedNumber.length < 9
      ? setClickedNumber([...clickedNumber, newNumber])
      : setClickedNumber([...clickedNumber]);
  };
  return (
    <Context.Provider value={clickedNumber}>
      <div className="container">
        <Info isCalling={true} />
        <main className="phone">
          <div className="keyboard-container">
            <ol className="keyboard">
              {keyNumbers.map((number, index) => (
                <Key
                  key={index}
                  text={number}
                  actionOnClick={(e) => numberClickedEvent(e)}
                />
              ))}
            </ol>
          </div>
          <div className="actions">
            <Display />
            <Action onClick={() => {}} />
          </div>
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;
