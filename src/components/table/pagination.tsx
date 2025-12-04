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

  const generatePages = () => {
    const pages: (number | string)[] = [];
    const window = 2; // páginas ao redor da atual

    // Sempre mostrar página 1
    pages.push(1);

    // Adicionar "..." após 1 quando necessário
    if (currentPage > 3) {
      pages.push("...");
    }

    // Janela de páginas ao redor da atual
    for (let i = currentPage - window; i <= currentPage + window; i++) {
      if (i > 1 && i < lastPage) {
        pages.push(i);
      }
    }

    // Adicionar "..." antes da última página quando necessário
    if (currentPage < lastPage - 2) {
      pages.push("...");
    }

    // Sempre mostrar última página (se for maior que 1)
    if (lastPage > 1) {
      pages.push(lastPage);
    }
    
    return pages;
  };


  const pages = generatePages();
  const start = (currentPage - 1) * perPage + 1;
  const end = Math.min(currentPage * perPage, total);

  return (
    <div className="flex flex-col items-center text-[#111827] md:flex-row md:justify-between gap-4 pt-[15px] pb-0">

      <span className="text-[13px] text-[#4B5563]">
        Exibindo{" "}
        <span className="font-semibold !text-[#111827]">{start}</span>
        {" "}a{" "}
        <span className="font-semibold !text-[#111827]">{end}</span>
        {" "}de{" "}
        <span className="font-semibold !text-[#111827]">{total}</span>
        {" "}{tituloDado}
      </span>

      <nav aria-label="Page navigation">
        <ul className="flex -space-x-px text-sm">

          {/* ANTERIOR */}
          <li>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="
                flex items-center justify-center px-3 h-8 ms-0 leading-tight
                text-[#111827] bg-[#F9FAFB] border border-[#D1D5DB] rounded-s-lg
                hover:bg-[#F3F4F6] hover:text-[#111827]
                disabled:opacity-50 disabled:cursor-not-allowed
                "
            >
              Anterior
            </button>
          </li>

          {/* NÚMEROS */}
          {pages.map((page, index) => (
            <li key={index}>
              <button
                disabled={page === "..."}
                onClick={() => typeof page === 'number' && onPageChange(page)}
                className={`
                  flex items-center justify-center px-3 h-8 
                  border border-[#D1D5DB]
                  ${page === currentPage
                    ? "bg-[#E5E7EB] text-[#111827]"
                    : "bg-[#F9FAFB] text-[#111827] hover:bg-[#F3F4F6] hover:text-[#111827]"
                  }
                  ${page === "..." ? "cursor-default opacity-60" : ""}
                `}
              >
                {page}
              </button>
            </li>
          ))}

          {/* PRÓXIMA */}
          <li>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === lastPage}
              className="
                flex items-center justify-center px-3 h-8 leading-tight
                text-[#111827] bg-[#F9FAFB] border border-[#D1D5DB] rounded-e-lg
                hover:bg-[#F3F4F6] hover:text-[#111827]
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              Próxima
            </button>
          </li>

        </ul>
      </nav>
    </div>
  );
}
