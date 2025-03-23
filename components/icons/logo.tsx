import clsx from 'clsx';

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      viewBox="0 0 24 24"
      {...props}
      className={clsx('h-4 w-4 fill-black dark:fill-white', props.className)}
    >
      <path
        d="M5 4L12 20L19 4"
        stroke="currentColor"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 18L7 18M17 18L21 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
