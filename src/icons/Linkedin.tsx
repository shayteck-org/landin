import { SVGProps } from "react";

function LikedinLogo(props: SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        d="M.75 0h16.5c.413 0 .75.338.75.75v16.5c0 .413-.337.75-.75.75H.75a.752.752 0 01-.75-.75V.75C0 .338.338 0 .75 0zm1.913 15.338h2.662V6.75H2.662v8.588zm1.35-9.75A1.52 1.52 0 012.474 4.05a1.52 1.52 0 011.538-1.537A1.52 1.52 0 015.55 4.05c0 .825-.675 1.538-1.537 1.538zm8.662 9.75H15.3v-4.725c0-2.325-.488-4.088-3.188-4.088-1.274 0-2.175.712-2.512 1.387h-.037V6.75h-2.55v8.588h2.662V11.1c0-1.125.225-2.213 1.612-2.213 1.388 0 1.388 1.275 1.388 2.288v4.162z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default LikedinLogo;
