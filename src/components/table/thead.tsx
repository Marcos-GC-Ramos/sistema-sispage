"use client";

import React, { ReactNode } from "react";

interface TheadProps {
  children: ReactNode;
}

export default function Thead({
  children,
}: TheadProps) {
    return(
        <thead className="text-xs text-gray-700 uppercase bg-[#F0F1F4]">
            <tr className="border-b border-[#D9D9D9]">
                {children }
            </tr>
        </thead>
    )
}