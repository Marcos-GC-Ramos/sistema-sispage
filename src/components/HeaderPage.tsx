import { ReactNode } from "react";

type HeaderPageProps = {
  children: ReactNode;
} 

export default function HeaderPage({children}: HeaderPageProps) {
  return(
    <header className="px-6 flex items-center justify-between mt-10 mb-8">
      {children}
    </header>
  )
}