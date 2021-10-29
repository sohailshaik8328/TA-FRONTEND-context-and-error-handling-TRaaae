import { useContext } from "react";
import ModeContext from "./ModeContext";

function Header() {

  let mode = useContext(ModeContext);
  // console.log(mode)
  return (
    <h1 className={`heading ${mode ? "heading-dark" : "heading-light"}`}>
      {mode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
