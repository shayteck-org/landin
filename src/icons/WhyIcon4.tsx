import React, { SVGProps } from "react";

function Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="79"
      height="79"
      fill="none"
      viewBox="0 0 79 79"
      {...props}
    >
      <rect width="79" height="79" fill="#68D585" opacity="0.1" rx="15"></rect>
      <path
        fill="#68D585"
        d="M56.164 39c-1.503 6.757-8.766 11.899-17.48 11.899-1.235 0-2.468-.111-3.684-.323 2.988 2.587 7.613 3.892 12.394 3.185l6.398 3.159a.784.784 0 00.751-.034.761.761 0 00.367-.649V50.42c1.995-1.787 3.09-4.042 3.09-6.384 0-1.79-.647-3.52-1.836-5.035z"
        opacity="0.5"
      ></path>
      <path
        fill="#68D585"
        d="M38.5 23C29.401 23 22 28.82 22 35.974c0 2.75 1.085 5.37 3.143 7.6v7.663c0 .265.141.51.372.65a.806.806 0 00.765.033l7.33-3.56c1.6.39 3.242.587 4.89.587 9.099 0 16.5-5.82 16.5-12.973C55 28.82 47.599 23 38.5 23z"
      ></path>
    </svg>
  );
}

export default Icon;
