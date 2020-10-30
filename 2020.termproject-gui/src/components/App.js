import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../routes/Home";


export default ()=>{
  function refreshPage() {
    window.location.reload(false);
  }


  setInterval(()=>{
    refreshPage()
  }, 5000);


  return (
    <Router>
      <Route exact path="/" component = {() => <Home /> }/>
    </Router>
  );

}

