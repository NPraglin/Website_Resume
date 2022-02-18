import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "JavaScript Developer",
          "Technologist",
          "React.js, Node.js, Express.js",
          "Blockchain Enthusiast",
          "Django Framework"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
