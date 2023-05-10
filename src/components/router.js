import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login";
import Landingpage from "./Landingpage";

export default class Paths extends Component {
  render() {
    return (
      <Routes>
        <Route path="/Landingpage" exact element={<Landingpage />}></Route>
        {/* <Route path="/" exact element={<Login />}></Route> */}
      </Routes>
    );
  }
}
