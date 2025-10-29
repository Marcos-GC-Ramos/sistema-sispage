interface BiIframeProps {
  url: string;
  titulo: string;
}

export default function BiIframe({
  url,
  titulo,
}: BiIframeProps) {
    return(
    <div className="relative w-full h-full">
      <iframe
        src={url}
        title={titulo}
        style={{ width: "100%", height: "100%" }}
        loading="lazy"
        allow="fullscreen"
      />
    </div>
    );
}