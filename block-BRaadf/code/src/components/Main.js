import Banner from "./Banner";
import Cards from "./Cards";
import Paragraph from "./Paragraph";
import Title from "./Title";
import { useContext } from "react";
import ModeContext from "./ModeContext";

function Main() {
let mode = useContext(ModeContext)
  return (
    <>
      <Title text="Text Component"  />
      <Paragraph  />
      <Title text="Card Component"  />
      <Cards />
      <Title text="Banner Component"  />
      <Banner  />
    </>
  );
}

export default Main;
