import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Software Developer",
          "Angular Developer",
          "ReactJS Developer",
          "NextJS Developer",
          "Javascript Developer",
          // "Full Stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 0,
      }}
    />
  );
}

export default Type;
