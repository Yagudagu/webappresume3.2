import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import { Home } from "./Components/Home";
import { GlobalStyle } from "./Components/GlobalStyle";
import { Inspire } from "./Components/Inspire";
import Piano from "./Components/Piano";
import usePiano from "./Components/usePiano";
import MusicApp from "./Components/MusicApp";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/inspire" component={Inspire} />
        <Route exact path="/piano" component={Piano} />
        <Route exact path="/musicapp" component={MusicApp} />
        {/* <Route render={() => <Redirect to="/" />} /> */}
      </Switch>
      <GlobalStyle />
    </>
  );
}

export default App;
