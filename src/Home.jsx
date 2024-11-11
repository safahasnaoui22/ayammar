import "./App.css";
import React from "react";

const Home = () => {
    return (
        <div>
            {/* Sandbox just for fun */}
      <div className="big-circles">
        <div className="big-circle"></div>
        <div className="big-circle"></div>
        <div className="big-circle"></div>
      </div>
      <section id="home">
        <div className="slide-wrapper">
          <div className="smallcircles">
            <div className="small-circle"></div>
            <div className="small-circle"></div>
            <div className="small-circle"></div>
            <div className="small-circle"></div>
            <div className="small-circle"></div>
            <div className="small-circle"></div>
          </div>
          <div
            className="cover-wrapper__container"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              textAlign: 'center'
            }}
          >
            <h1 style={{ fontSize: '4em', margin: 0 }}>Aya Ammar</h1>
            <h2 className="animated-heading">Agent de Réservation</h2>
            <p>
              <a
                href="CV AYA.pdf"
                download="CV AYA.pdf"
                className="btn btn-cta btn-cta__green text-uppercase trigger"
              >
                Download my resume
              </a>
            </p>
          </div>
        </div>
      </section>  
        </div>
    )
}

export default Home
