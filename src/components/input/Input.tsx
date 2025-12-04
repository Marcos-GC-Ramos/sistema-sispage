import { InputHTMLAttributes } from "react";

type InputProps = {
  label?: string;
  uiSize?: "sm" | "md" | "lg";
  loading?: boolean;
  placeholder?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  label = "",
  type = "text",
  uiSize = "md",
  placeholder = "",
  loading = false,
  required = true,
  className = "",
  ...props
}: InputProps) {
  
  const sizeStyles =
    uiSize === "sm"
      ? "p-2 text-xs"
      : uiSize === "lg"
      ? "p-4 text-base"
      : "p-2.5 text-sm";

  return (
    <div>
        {label && (
            <label className="block mb-2 text-[16px] font-medium text-[#111827]">
                {label}{" "}
                {!required && <span className="text-gray-500 text-xs">(opcional)</span>}
            </label>
        )}

        <input
            type={type}
            required={required}
            readOnly={loading}
            placeholder={placeholder}
            className={`
            block w-full border rounded-[6px] text-gray-700 focus:outline-none
            ${sizeStyles}  ${className}
            ${loading ? "bg-gray-400! border-gray-400! cursor-not-allowed" : "border-[#D1D5DB] bg-[#F9FAFB]"}
            `}
            {...props}
        />
    </div>
  );
}
