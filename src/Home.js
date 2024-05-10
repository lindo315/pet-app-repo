// Home.js

import { Link } from "react-router-dom";
import "./index.css";
// import image from "./image.png"; // Replace with your actual pet image

function Home() {
  const backgroundImageUrl = `${process.env.PUBLIC_URL}/images/blob.png`;
  return (
    <div className="home">
      <main>
        <section
          className="hero"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <section className="hero-content">
            <section className="hero-image">
              <img
                src={`${process.env.PUBLIC_URL}/images/dogo.png`}
                alt="Pet"
              />
            </section>
            <section className="hero-text">
              <div className="hero-text-row">
                <p className="welcome">Welcome!</p>
                <h1>Find Your Forever Friend!</h1>
                <h2>Adopt Love, Save Lives!</h2>
                <p>
                  We're a small company in search of heroes to adopt and save
                  lives.
                </p>
              </div>
              <div className="hero-text-row">
                <Link to="/adopt" className="start-button">
                  Start Here
                </Link>
              </div>
            </section>
          </section>
        </section>

        <section className="know">
          <div className="know-title">
            <h1>Get to know us</h1>
          </div>
          <div
            className="blob1"
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="blob-content">
              <div className="blob-text">
                <h2>Hi</h2>
              </div>
              <div className="blob-text">
                <p>We are awesome</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
