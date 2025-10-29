"use client";

import React, { ReactNode } from "react";

interface TableProps {
  id?: string;
  children: ReactNode;
}

export default function Table({
  id="",  
  children,
  ...props
}: TableProps) {
    return(
        <div className="grid grid-cols-1">
            <div className="relative overflow-x-auto">
                <table id={id} className="text-sm text-left text-gray-500 responsive nowrap w-full">
                    {children}
                </table>
            </div>
        </div>
    )
}