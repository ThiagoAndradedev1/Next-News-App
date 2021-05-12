import React from "react";

const ButtonGlitch = ({ title = "Cyberpunk 2077" }) => {
  return (
    <div>
      <button className="cybr-btn">
        {title}
        <span aria-hidden>_</span>
        <span aria-hidden className="cybr-btn__glitch">
          {title}_
        </span>
        <span aria-hidden className="cybr-btn__tag">
          R25
        </span>
      </button>
    </div>
  );
};

export default ButtonGlitch;
