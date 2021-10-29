import React from "react";
import { useContext } from "react";
import ModeContext from "./ModeContext";

export default function SwitchButton({  }) {
  let mode = useContext(ModeContext);
  return (
    <button
      className={`btn ${mode ? "btn-dark" : "btn-light"}`}
      onClick={mode}
    >
      {mode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
