"use client";

import React, { ReactNode } from "react";

interface TdProps { 
  children: ReactNode;
  className?: string;
  colspan?: number;
}

export default function Td({
  className = "",
  children,
  colspan,
}: TdProps) {
    return(
    <td scope="col" colSpan={colspan} className={`px-6 py-2 text-[#4B5563] align-middle text-left ${className}`}>
        {children}
    </td>
    )
}