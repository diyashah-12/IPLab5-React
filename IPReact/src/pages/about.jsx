import React from "react";
import IntroBar from "../components/IntroBar";
import CollegePhoto from "../images/schoolimg1.jpg"

const About = () => {
  return (
    <div>
      <IntroBar pageName="About" />
      <div
        style={{
          maxWidth: "1000px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <img
          src={CollegePhoto}
          width="500"
          height="500"
          alt="..."
          style={{ marginLeft: "250px", display: "flex", justifyContent: "center" }}
        />

        <div>
          <div>
            <p>
              ALPHABET is a college in Andheri, Mumbai, India. It is one of
              top college in CAndheri. It has alumni across industries including
              the Bollywood film industry, cricket, television, music and
              authors. ALPHABET was established in 1954 by the Redemptorists.
              The college campus hosts contemporary facilities to support the
              academic and extracurricular pursuits of the students. These
              include spacious classrooms with audio visual aid,
              state-of-the-art science and computer laboratories, well stocked
              library featuring a huge collection of books on various subjects
              and a canteen for students within the college campus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;