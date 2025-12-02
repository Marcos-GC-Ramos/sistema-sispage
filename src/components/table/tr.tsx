"use client";

import React, { ReactNode } from "react";

interface TrProps {
  children: ReactNode;
}

export default function Tr({
  children,
}: TrProps) {
    return(
        <tr className="odd:bg-white even:bg-[#F5F5F5] hover:bg-[#F5F5F5] border-b border-[#D9D9D9]">{children}</tr>
    )
}