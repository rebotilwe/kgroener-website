import React from "react";
import "./Team.css";
import kuvasha from "../../assets/images/kuvasha.jpeg";

const teamMembers = [
  {
    name: "Kuvasha Groener",
    role: "Founder & Senior Attorney",
    image: kuvasha,
    bio: "Kuvasha Groener is the founder and principal attorney of K. Groener Attorneys. With extensive experience in property law, wills and estates, and corporate legal services, she leads the firm with a vision of providing expert legal solutions with integrity and compassion.",
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <div className="container">
        <h2>Meet Our Team</h2>
        <p>Our dedicated legal expert is here to serve you with professionalism and care.</p>

        <div className="team-grid single-member">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div
                className="team-image"
                style={{ backgroundImage: `url(${member.image})` }}
                role="img"
                aria-label={member.name}
              />
              <div className="team-info">
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
