"use client";

import React, { ReactNode } from "react";

interface TrProps {
  children: ReactNode;
}

export default function Tr({
  children,
}: TrProps) {
    return(
        <tr className="odd:bg-white even:bg-[#F9FAFB] hover:bg-[#F3F4F6] border-b border-[#D1D5DB]">{children}</tr>
    )
}