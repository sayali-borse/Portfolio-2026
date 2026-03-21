import { Download } from "lucide-react";
import React from "react";

const AnimatedBorderButton = () => {
  return (
    <div>
      <button>
        <svg
          className="absolute left-0 top-0 w-full h-full pointer-events-none download-cv-border"
          viewBox="0 0 200 60"
          preserveAspectRatio="none"
          style={{ overflow: "visible" }}
        >
          <path
            d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="2"
            strokeDasharray="400 550"
            strokeDashoffset="400"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animated-border-path"
          />
        </svg>
        <span>
          {" "}
          <Download />
          Download CV
        </span>
      </button>
    </div>
  );
};

export default AnimatedBorderButton;
