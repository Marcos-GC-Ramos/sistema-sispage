import CardPainelSkeleton from "@/components/card/CardPainelSkeleton";
import SeparatorDeshaboards from "@/components/Separator/SeparatorDashboards";

interface CarregandoDashboardsProps {
  carregando?: boolean;
}

export default function CarregandoDashboards({
  carregando = false,
}: CarregandoDashboardsProps) {
  if (!carregando) return null;

  const skeletonsAntes = 5;
  const skeletonsDepois = 5;

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 w-full max-w-[1900px] mx-auto">
      {Array.from({ length: skeletonsAntes }).map((_, index) => (
        <CardPainelSkeleton key={`antes-${index}`} />
      ))}
    </div>

    <SeparatorDeshaboards />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 w-full max-w-[1900px] mx-auto">
      {/* Skeletons depois */}
      {Array.from({ length: skeletonsDepois }).map((_, index) => (
        <CardPainelSkeleton key={`depois-${index}`} />
      ))}
    </div>
    </>
  );
}
