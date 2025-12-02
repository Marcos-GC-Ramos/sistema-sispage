"use client";

import React, { ReactNode } from "react";

interface TableProps {
  id?: string;
  children: ReactNode;
}

export default function Table({
  id="",  
  children,
}: TableProps) {
    return(
        <div className="grid grid-cols-1 w-full">
            <div className="relative overflow-x-auto w-full">
                <table id={id} className="text-sm text-left text-gray-500 responsive nowrap w-full">
                    {children}
                </table>
            </div>
        </div>
    )
}