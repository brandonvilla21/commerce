import clsx from "clsx";

interface LogoIconProps extends React.ComponentProps<"svg"> {
  size?: number;
}

export default function LogoIcon({
  size = 24,
  className,
  ...props
}: LogoIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
      className={clsx("fill-black dark:fill-white", className)}
    >
      <path
        d="M17 5L9 5C7 5 5 7 7 9L17 15C19 17 17 19 15 19H7"
        stroke="currentColor"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
