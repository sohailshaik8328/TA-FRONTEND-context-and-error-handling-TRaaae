import React from "react";
import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";
import ModeContext from "./ModeContext";

class App extends React.Component {

  state = {
    isDarkMode: false,
  };
  changeMode = () => {
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };
  render() {
    let { isDarkMode } = this.state;

    // console.log(ModeContext)
    return (
      <div className={`bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>
        <ModeContext.Provider  value={this.changeMode} >
          <Header />
          <Main  />
          <SwitchButton />
      </ModeContext.Provider>
      </div>
    );
  }
}

export default App;
