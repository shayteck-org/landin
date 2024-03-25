import { SVGProps } from "react";

function FaceBookLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
      {...props}
    >
      <path
        fill={props.fill || "#7D818D"}
        d="M17.25 0H.75A.75.75 0 000 .75v16.5c0 .414.336.75.75.75h8.864v-6.97H7.27V8.313h2.345V6.31c0-2.325 1.42-3.591 3.494-3.591.994 0 1.848.074 2.096.107v2.43h-1.438c-1.128 0-1.346.536-1.346 1.322v1.735h2.69l-.35 2.716h-2.34V18h4.83a.75.75 0 00.75-.75V.75a.75.75 0 00-.75-.75z"
      ></path>
    </svg>
  );
}

export default FaceBookLogo;
