"use client";

import React, { ReactNode } from "react";

interface ThProps { 
  children: ReactNode;
  className?: string;
}

export default function Th({
  className = "",
  children,
}: ThProps) {
    return(
    <th scope="col" className={`px-6 py-3 align-middle text-left ${className}`}>
        {children}
    </th>
    )
}