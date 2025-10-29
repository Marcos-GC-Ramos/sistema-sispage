"use client";

import React, { ReactNode } from "react";

interface TbodyProps {
  children: ReactNode;
}

export default function Tbody({
  children,
  ...props
}: TbodyProps) {
    return(
        <tbody className="bg-white align-middle">{children}</tbody>
    )
}