"use client";

import React, { ReactNode } from "react";

interface TdProps { 
  children: ReactNode;
  className?: string;
}

export default function Td({
  className = "",
  children,
}: TdProps) {
    return(
    <td scope="col" className={`px-6 py-2 text-gray-600 align-middle text-left ${className}`}>
        {children}
    </td>
    )
}