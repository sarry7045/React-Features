import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import IdleTimeContainer from "./Components/IdleTimeContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreditCard from "./Components/CreditCard";
import VideoPlayer from "./Components/VideoPlayer";
import Charts from "./Components/Charts";
import Formik from "./Components/Formik";
import FormikLogin from "./Components/FormikLogin";
// import NewFormik from "./Components/NewFormik";
// import FormikContainer from "./Components/FormikContainer";
// import {ThemeProvider, Theme} from "@chakra-ui/core"

function App() {
  return (
    <>
      <Router>
        <Navbar />

       <strong> <marquee direction="left">
       In this project, I keep trying some cool and useful things from React.
        </marquee></strong>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/idletimecontainer">
          <IdleTimeContainer />
        </Route>
        <Route exact path="/creditcard">
          <CreditCard />
        </Route>
        <Route exact path="/videoplayer">
          <VideoPlayer />
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
        {/* </ThemeProvider> */}
        {/* <Route exact path="/newformik">
          <NewFormik />
        </Route>
        <Route exact path="/formikcontainer">
          <FormikContainer />
        </Route> */}
      </Router>
    </>
  );
}

export default App;
