import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
/* Use AnimationRevealPage as a wrapper component for your pages if you are building a custom one yourself */
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";
/*
 * Hero section is the top most section on the page. It contains the header as well.
 * So you dont need to import headers
 * separately
 */

// 
import Home from "pages/Home.js";
/* Inner Pages */
// import ComponentRenderer from "ComponentRenderer.js";
//import MainLandingPage from "MainLandingPage.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "pages/Login.js";
import Signup from "pages/Signup.js";
import AboutUs from "pages/AboutUs";
import ContactUs from "pages/ContactUs";
import Pricing from "pages/Pricing";
import FAQ from "pages/FAQ";
import TermsOfService from "pages/TermsOfService";
import Dashboard from "pages/Dashboard";
import AddService from "pages/AddService";
import EditServices from "pages/EditServices";
import DashboardAdm from "pages/DashboardAdm";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;
  return (
    <Router>
      <Switch>
        {/* <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/components/:type/:name">
          <ComponentRenderer />
        </Route> */}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
        <Signup />
        </Route>
        <Route path="/edit/:id">
        <EditServices />
        </Route>
        <Route path="/AboutUs">
          <AboutUs />
          </Route>
        <Route path="/ContactUs">
          <ContactUs />
        </Route>
        <Route path="/edit/:id">
        <EditServices />
        </Route>
        <Route path="/Pricing">
          <Pricing />
        </Route>
        <Route path="/faq">
          <FAQ />
        </Route>
        <Route path="/TermsOfService">
          <TermsOfService />
        </Route>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
        <Route path="/DashboardAdm">
          <DashboardAdm />
        </Route>
        <Route path="/AddServices">
          <AddService />
        </Route>
        <Route path="/">
        <Home />
        </Route>
        </Switch>
    </Router>
  );
}