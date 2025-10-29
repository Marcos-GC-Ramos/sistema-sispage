'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/sidebar/Sidebar';
import Navbar from '@/components/Navbar';

interface LayoutProps { children: React.ReactNode }

export default function Layout({ children }: LayoutProps) {
  const [gridColumns, setGridColumns] = useState<string>('100px 1fr');
  return (
    <main className="estrutura-pagina bg-[#EDEDED] h-auto!"
      style={{
        display: 'grid',
        gridTemplateColumns: gridColumns,
        transition: 'grid-template-columns 0.3s ease-in-out',
      }}
    >
      <div>
        <Sidebar setGridColumns={setGridColumns}  />
      </div>

      <div>
        <Navbar />
        {children}
      </div>
    </main>
  );
}