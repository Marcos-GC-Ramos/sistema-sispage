'use client';
import React, { ReactNode } from 'react';

interface CardTableProps {
  titulo: string;
  children?: ReactNode;
}

export default function CardTable({ titulo, children }: CardTableProps) {
  return (
    <div data-title={titulo}
        className="relative w-full min-h-[100px] bg-white rounded-[12px] mb-[20px] drop-shadow mt-20
            before:content-[attr(data-title)] before:absolute before:left-[30px] before:-top-[35px] gradiente-card-table before:w-[calc(100%-60px)] before:text-white before:text-[18px] before:p-[1.1rem] before:rounded-[12px] before:z-50"
    >
        <div className="relative items-center block w-full">
            <div className="p-[30px] pt-[60px]">{children}</div>
        </div>
    </div>
  );
}