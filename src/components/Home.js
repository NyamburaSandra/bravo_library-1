import React from 'react';
import {NavLink} from "react-router-dom";

function Home() {
  return (
    <div classname="jumbotron ">
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold lib">Bravo Library</h1>
        <p className="col-md-8 fs-4">
          Welcome to The Bravo Library.<br/>
          Using a series of utilities,to create imaginations.<br/>
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          <NavLink to={'/books'}>My Library</NavLink>
        </button>
      </div>
    </div>
    </div>
  );
}

export default Home;
