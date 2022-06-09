import "./App.css";
import { useState } from "react";
import AngryButton from "./components/AngryButton";
import CounterButton from "./components/CounterButton";
import LightSwitchButton from "./components/LightSwitchButton";
import TextRepeaterButton from "./components/TextRepeaterButton";

function App() {
  const [light, setLight] = useState("off");
  const dark = light === "off" ? "dark" : "";
  return (
    <div className={`App ${dark}`}>
      <h1>
        <span>Fancy Buttons!</span>
      </h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton light={light} setLight={setLight} />
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
