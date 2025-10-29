type SeparatorProps = {
  text?: string;
};

export default function Separator({ text = "OU" }: SeparatorProps) {
  return (
    <div className="flex items-center w-full my-5">
      <div className="flex-grow border-t border-gray-500"></div>
      <span className="mx-4 text-[12px] text-gray-500">{text}</span>
      <div className="flex-grow border-t border-gray-500"></div>
    </div>
  );
}
