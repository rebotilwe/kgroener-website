import React from "react";
import "./AboutDirector.css";
import kuvasha from "../../assets/images/kuvasha3.jpeg";

const AboutDirector = () => {
  return (
    <section className="about-director-section">
      <div className="container">
        <h2>About Kuvasha Groener</h2>

        <div className="director-grid">
          <img src={kuvasha} alt="Kuvasha Groener" className="director-image" />

          <div className="director-info">
            <p>
              <strong>Kuvasha Groener</strong> obtained her LLB degree from the
              University of KwaZulu-Natal in 2006 and was admitted as an
              Attorney of the High Court in 2011. She later qualified as a
              Notary Public in 2022.
            </p>

            <p>
              With over a decade of experience in the legal field, Kuvasha’s
              expertise spans across <strong>property law</strong>,{" "}
              <strong>corporate law</strong>, <strong>contractual law</strong>,
              and <strong>notarial services</strong>. Her passion for law is
              rooted in helping individuals and businesses navigate complex
              legal matters with clarity and confidence.
            </p>

            <p>
              As the founder of <strong>Kuvasha Groener Attorneys</strong>, she
              leads a 100% black female-owned firm dedicated to providing
              affordable, client-centered legal solutions. Her approach blends
              strong legal acumen with empathy, ensuring every client receives
              the attention and care they deserve.
            </p>

            <p>
              When not in court or advising clients, Kuvasha is an advocate for
              mentorship and women empowerment in the legal industry — inspiring
              young professionals to pursue excellence in their fields.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDirector;
