import LogoIcon from "./icons/logo";

const { SITE_NAME } = process.env;

interface LogoTitleProps {
  small?: boolean;
}

const LogoTitle = ({ small }: LogoTitleProps) => {
  return (
    <div className="flex items-center">
      <LogoIcon className={small ? "h-[12px] w-[12px]" : "h-[14px] w-[14px]"} />
      <span 
        style={{ marginLeft: "-2px" }} 
        className={`uppercase ${small ? "text-sm" : ""}`}
      >
        {SITE_NAME?.slice?.(1)}
      </span>
    </div>
  );
};

export default LogoTitle;
