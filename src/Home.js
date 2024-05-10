// Home.js

import { Link } from "react-router-dom";
import "./index.css";
// import image from "./image.png"; // Replace with your actual pet image

function Home() {
  const backgroundImageUrl = `${process.env.PUBLIC_URL}/images/blob.png`;
  const knowImageURL = `${process.env.PUBLIC_URL}/images/blob-know.png`;
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

        <section className="know-title">Get to know us</section>

        {/* First */}
        <section
          className="know"
          style={{
            backgroundImage: `url(${knowImageURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <section className="know-content">
            <section className="know-text">
              <h2>What we do</h2>
              <p>
                Our focus is to help displaced animals in search of homes find
                you, caring folks with big enough hearts to care!
              </p>
            </section>

            <section className="know-image">
              <img
                src={`${process.env.PUBLIC_URL}/images/chiwawa.png`}
                alt="Pet"
                className="img"
              />
            </section>
          </section>
        </section>

        {/* Second */}
        <section
          className="know"
          style={{
            backgroundImage: `url(${knowImageURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <section className="know-content">
            <section className="know-image">
              <img
                src={`${process.env.PUBLIC_URL}/images/checking.png`}
                alt="Pet"
                className="img"
              />
            </section>
            <section className="know-text">
              <h2>Services?</h2>
              <p>
                Yes! We also offer services to current pet owners ranging from
                food, medicine, and grooming!
              </p>
            </section>
          </section>
        </section>

        {/* Third */}
        <section
          className="know"
          style={{
            backgroundImage: `url(${knowImageURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <section className="know-content">
            <section className="know-text">
              <h2>Animal Care</h2>
              <p>
                We take in animals that are either displaced, sick, or have
                owners who reconsider their options...
              </p>
            </section>

            <section className="know-image">
              <img
                src={`${process.env.PUBLIC_URL}/images/close-up.png`}
                alt="Pet"
                className="img"
              />
            </section>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Home;
