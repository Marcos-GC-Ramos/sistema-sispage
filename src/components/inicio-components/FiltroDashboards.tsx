"use client";

import React from "react";
import Input from "../input/Input";
import Select from "../select/Select";

type Option = {
  value: string;
  label: string;
};

type FiltrosDashboardsProps = {
  categorias?: Option[];
  search: string;
  setSearch: (value: string) => void;
  categoriaSelecionada: string;
  setCategoriaSelecionada: (value: string) => void;
  selectId?: string;
};

export default function FiltroDashboards({
  categorias = [],
  search,
  setSearch,
  categoriaSelecionada,
  setCategoriaSelecionada,
  selectId = "default",
}: FiltrosDashboardsProps) {
  return (
      <div className="flex justify-end items-center">
        <Select
          id={selectId}
          optionDefault="Categorias"
          options={categorias}
          value={categoriaSelecionada}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setCategoriaSelecionada(e.target.value)
          }
          className="rounded-[6px_0px_0px_6px]! min-w-[150px]! text-center"
        />

        <Input
          value={search}
          className="rounded-[0px_6px_6px_0px]! border-l-0! min-w-[365px]!"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar por titulo..."
        />
      </div>
  );
}
