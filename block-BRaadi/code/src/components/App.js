import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header";
import Main from "./Main";

class App extends React.Component {
  state = {
    isDarkMode : ""
  }
  render() {
    let { isDarkMode } = this.state;
    return (
      <>
       <ErrorBoundary>
            <Header isDarkMode={isDarkMode} />
            <Main isDarkMode={isDarkMode} />
       </ErrorBoundary>
      </>
    );
  }
}

export default App;
