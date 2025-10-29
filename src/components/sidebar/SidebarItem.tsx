import React from "react";
import Link from "next/link";

interface SidebarItemProps {
  href?: string | URL;
  icon: React.ReactNode;
  label: string;
  sidebarWidth: string;
  onClick?: () => void;
}

export default function SidebarItem({
  href ="",
  icon,
  label,
  onClick,
}: SidebarItemProps) {
  const classes = `flex items-center gap-[10px] text-[14px] cursor-pointer p-[5px_5px_5px_28px] justify-start w-full`;

  if (onClick) {
    return (
      <li>
        <a onClick={onClick} className={classes}>
          {icon}
          <span className="text-opcao hidden">{label}</span>
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link href={href} className={classes}>
        {icon}
        <span className="text-opcao hidden">{label}</span>
      </Link>
    </li>
  );
}
