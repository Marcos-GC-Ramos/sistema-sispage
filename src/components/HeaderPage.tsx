import { ReactNode } from "react";

type HeaderPageProps = {
  children: ReactNode;
} 

export default function HeaderPage({
  children,
  ...props
}: HeaderPageProps) {
    return(
        <header className="pl-6 flex items-center justify-between my-10">
            {children}
        </header>
    )
}