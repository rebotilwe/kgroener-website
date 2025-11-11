import React from "react";
import "./Team.css";
import kuvasha from "../../assets/images/kuvasha2.jpeg";

const Team = () => {
  return (
    <section className="team-section">
      <div className="container">
        <h2>Meet the Attorney</h2>
        <p>
          Get to know the director behind <strong>Kuvasha Groener Attorneys</strong> — a firm built on professionalism, integrity, and dedication to client success.
        </p>

        <div className="team-grid single-member">
          <div className="team-card">
            <div
              className="team-image"
              style={{ backgroundImage: `url(${kuvasha})` }}
              role="img"
              aria-label="Kuvasha Groener"
            />
            <div className="team-info">
              <h3>Kuvasha Groener</h3>
              <h4>Director & Founder</h4>
              <p>
                Kuvasha Groener is the founder and principal attorney of{" "}
                <strong>Kuvasha Groener Attorneys</strong>. With over a decade
                of experience in property, corporate, and contractual law, she
                leads her firm with professionalism, compassion, and an
                unwavering commitment to excellence.
              </p>
              <a href="/about-director" className="read-more-btn">
                Read More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
