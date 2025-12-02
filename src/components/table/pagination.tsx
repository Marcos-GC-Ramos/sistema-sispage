"use client";

interface PaginationProps {
  tituloDado: string;
  currentPage: number;
  perPage: number;
  total: number;
  lastPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  tituloDado,
  currentPage,
  perPage,
  total,
  lastPage,
  onPageChange,
}: PaginationProps) {

  const start = (currentPage - 1) * perPage + 1;
  const end = Math.min(currentPage * perPage, total);

  return (
    <div className="flex flex-col items-center text-gray-700 md:flex-row md:justify-between gap-4 pt-[30px] pb-0">

      <span className="text-sm">
        Exibindo{" "}
        <span className="font-semibold">{start}</span>
        {" "}a{" "}
        <span className="font-semibold">{end}</span>
        {" "}de{" "}
        <span className="font-semibold">{total}</span>
        {" "}{tituloDado}
      </span>

      <div className="flex gap-3">

        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Anterior
        </button>

        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          disabled={currentPage === lastPage}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Próxima
        </button>

      </div>
    </div>
  );
}
