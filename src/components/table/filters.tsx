"use client";

import Select from "@/components/select/Select";
import Input from "@/components/input/Input";
import { Option } from "@/types/Dashboard";

interface FiltersProps {
  perPage: number;
  setPerPage: (value: number) => void;
  search: string;
  setSearch: (value: string) => void;
  searchPlaceholder?: string;
}

export default function Filters({
  perPage,
  setPerPage,
  search,
  setSearch,
  searchPlaceholder = "Pesquisar...",
}: FiltersProps) {
  const qtdPorPagina: Option[] = [
    { value: "10", label: "10" },
    { value: "50", label: "50" },
    { value: "100", label: "100" },
  ];

  return (
    <div className="w-full flex justify-between gap-4 mb-5 !text-[#111827]">
      <Select
        id="qtdPorPagina"
        options={qtdPorPagina}
        value={String(perPage)}
        onChange={(e) => setPerPage(Number(e.target.value))}
        className="w-[50px]! text-center!"
      />

      <div className="w-[300px]">
        <Input
          type="text"
          placeholder={searchPlaceholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
