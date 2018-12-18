import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <section className="hero is-info is-fullheight">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
            Welcome to The Jungle
        </h1>
        <h2 className="subtitle">
            This is it , I'm trying  build Progressive Web App with React
        </h2>
        <h4 className="subtitle">
          Alright        
        </h4>
        <Link to="/home" className="button">Click here to continue</Link>
      </div>
    </div>
  </section>
);
