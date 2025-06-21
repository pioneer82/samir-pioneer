import React from "react";
import Typewriter from "typewriter-effect";

const STRINGS = {
  English: [
    "Full Stack Developers",
    "Freelancers",
    "Software Developers",
    "Project Managers",
    "Project Designers"
  ],
};

function Type() {
  const strings = STRINGS.English;

  return (
    <Typewriter
      options={{
        strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;