import Image from "next/image";

type Props = {
  acao: string;
  id: string;
  onClick?: () => void;
};

export default function ButtonActions({ acao, id, onClick }: Props) {
  
  const classe = () => {
    switch (acao) {
      case "Editar": return "btn-editar";
      case "Excluir": return "btn-excluir";
      case "Visualizar": return "btn-visualizar";
      default: return "btn-padrao";
    }
  };

  const icone = () => {
    switch (acao) {
      case "Editar": return "/img/buttons/icone-editar.svg";
      case "Excluir": return "/img/buttons/icone-excluir.svg";
      case "Visualizar": return "/img/buttons/icone-visualizar.svg";
      default: return "/img/buttons/icone-padrao.svg";
    }
  };

  return (
    <div className="tooltip">
      <button
        type="button"
        className={`btn-actions cursor-pointer ${classe()}`}
        id={id}
        onClick={onClick}
      >
        <Image
          src={icone()}
          width={20}
          height={20}
          alt={acao}
        />
      </button>

      <span className="tooltiptext">{acao}</span>
    </div>
  );
}
