import Card from "./Card";
import { useContext } from "react";
import ModeContext from "./ModeContext";

function Cards() {
  let mode = useContext(ModeContext)
  return (
    <div className="cards_wrap">
      <Card  />
      <Card  />
      <Card  />
    </div>
  );
}

export default Cards;
