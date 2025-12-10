import { ReactNode } from "react";

type HeaderPageProps = {
  children: ReactNode;
  className?: string;
} 

export default function HeaderPage({children, className = ""}: HeaderPageProps) {
  return(
    <header className={`px-0 md:px-[35px] flex items-center flex-col md:flex-row gap-5 flex-wrap md:justify-between my-8 mb-[59px] ${className}`}>
      {children}
    </header>
  )
}