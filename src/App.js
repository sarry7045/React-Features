import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import IdleTimeContainer from "./Components/IdleTimeContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Charts from "./Components/Charts";
import Formik from "./Components/Formik";
import FormikLogin from "./Components/FormikLogin";
import ReactBeta from "./Components/ReactBeta";
import VideoChat from "./Components/VideoChat";
// import NewFormik from "./Components/NewFormik";
// import FormikContainer from "./Components/FormikContainer";
// import {ThemeProvider, Theme} from "@chakra-ui/core"

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <strong>
          {" "}
          <marquee direction="left">
            In this project, I keep trying some cool and useful things from
            React.
          </marquee>
        </strong>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/idletimecontainer">
          <IdleTimeContainer />
        </Route>

        <Route exact path="/charts">
          <Charts />
        </Route>
        {/* <ThemeProvider> */}
        <Route exact path="/formik">
          <Formik />
        </Route>
        <Route exact path="/formiklogin">
          <FormikLogin />
        </Route>

        <Route exact path="/reactbeta">
          <ReactBeta />
        </Route>
        <Route exact path="/videochat">
          <VideoChat />
        </Route>
      </Router>
    </>
  );
}

export default App;
