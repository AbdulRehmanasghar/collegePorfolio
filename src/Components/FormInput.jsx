import { useId } from "react";

export default function FormInput({
  type = "text",
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  isSearch = false,
  className = "",
}) {
  const id = useId();

  const baseStyles = `
    w-full px-4 py-3 bg-transparent text-soft-white
    border border-border-blue rounded-md outline-none
    placeholder-border-blue transition-all duration-300
    focus:border-transparent focus:ring-2 focus:ring-accent
    ${error ? "!border-red-500 !focus:ring-red-500" : ""}
    ${className}
  `;

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-soft-white"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {isSearch ? (
        <div className="relative">
          <input
            type="search"
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${baseStyles} pl-10`}
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-border-blue"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={baseStyles}
        />
      )}

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
