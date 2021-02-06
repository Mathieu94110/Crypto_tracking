import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const TextScroller = () => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(5%,0)" },
    to: { transform: "translate(95%,0)" },
    config: { duration: 20000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });
  const text = "hrlooooo";
  return (
    <div key={key}>
      <animated.div style={scrolling}>{text}</animated.div>);
    </div>
  );
};

export default TextScroller;
