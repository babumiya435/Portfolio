import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "UI Team Lead",
          "Senior Software Developer",
          "Angular Developer",
          "ReactJS Developer",
          "NextJS Developer",
          "Javascript Developer",
          "Full Stack Developer",
        ],
        autoStart: true,
        loop: true,
        delay: 0,
        deleteSpeed: 0,
      }}
    />
  );
}

export default Type;
