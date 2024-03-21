import React, { SVGProps } from "react";

function WhyIconOne(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="79"
      height="79"
      fill="none"
      viewBox="0 0 79 79"
      {...props}
    >
      <rect width="79" height="79" fill="#161C2D" opacity="0.1" rx="15"></rect>
      <path
        fill="#161C2D"
        d="M47.641 32.359A10.795 10.795 0 0040 29.2V40l-7.641 7.641a10.793 10.793 0 0015.273 0c4.221-4.221 4.221-11.061.009-15.282z"
      ></path>
      <path
        fill="#161C2D"
        fillRule="evenodd"
        d="M22 40c0-9.945 8.055-18 18-18s18 8.055 18 18c0 9.936-8.055 18-18 18s-18-8.055-18-18zm3.6 0c0 7.956 6.444 14.4 14.4 14.4S54.4 47.956 54.4 40 47.956 25.6 40 25.6 25.6 32.044 25.6 40z"
        clipRule="evenodd"
        opacity="0.5"
      ></path>
    </svg>
  );
}

export default WhyIconOne;
