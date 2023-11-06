import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <div className="Type">
      <Typewriter
        options={{
          strings: ['MERN Developer', 'Software Developer'],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

export default Type;
