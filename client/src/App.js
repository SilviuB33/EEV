import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import Home from "pages/Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "pages/Login.js";
import Signup from "pages/Signup.js";
import AboutUs from "pages/AboutUs";
import ContactUs from "pages/ContactUs";
import FAQ from "pages/FAQ";
import TermsOfService from "pages/TermsOfService";
import Dashboard from "pages/Dashboard";
import AddService from "pages/AddService";
import EditServices from "pages/EditServices";
import DashboardAdm from "pages/DashboardAdm";

export default function App() {
  return (
    <Router>
      <Switch>
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