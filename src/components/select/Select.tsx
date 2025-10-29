import React from "react";
import { Option } from "@/types/Dashboard";

type SelectProps = {
  id: string;
  optionDefault?: string;
  options: Option[];
  required?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  label?: string;
  loading?: boolean;
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function Select({
  id,
  options,
  label = "",
  size = "md",
  optionDefault = "",
  className = "",
  loading = false,
  required = false,
  disabled = false,
  value,
  onChange,
}: SelectProps) {
  const sizeStyles =
    size === "sm"
      ? "p-2 text-xs"
      : size === "lg"
      ? "p-4 text-base"
      : "p-2.5 text-sm";

  return (
    <div>
      {label && (
        <label className="block mb-2 text-[16px] font-medium text-[#111827]">
          {label}{" "}
          {!required && (
            <span className="text-gray-500 text-xs">(opcional)</span>
          )}
        </label>
      )}

      <select
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`
          block w-full border rounded-[6px] text-gray-700 focus:outline-none appearance-none ${sizeStyles} ${className}
          ${
            loading
              ? "bg-gray-400! border-gray-400! cursor-not-allowed"
              : "border-[#D1D5DB] bg-[#F9FAFB]"
          }
        `}
      >
        {optionDefault ? <option value="">{optionDefault}</option> : ""}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
