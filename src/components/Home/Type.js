import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Software Developer",
          "Angular Deveoper",
          "ReactJS Deveoper",
          "NextJS Deveoper",
          "Javascript Deveoper",
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
