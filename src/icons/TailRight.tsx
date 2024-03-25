import { SVGProps } from "react";

function TailRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="14"
      fill="none"
      viewBox="0 0 13 14"
      {...props}
    >
      <path
        stroke={props.stroke || "#fff"}
        strokeLinecap="square"
        strokeLinejoin="bevel"
        strokeWidth="2"
        d="M7.4 2L13 7.2l-5.6 5.2M1 6.986h11.2"
      ></path>
    </svg>
  );
}

export default TailRight;
