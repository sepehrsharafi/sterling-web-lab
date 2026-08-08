import type { ReactNode } from "react";

export const formInputClass =
  "w-full rounded-xl border border-[#d8dddc] bg-white px-4 py-3.5 text-sm text-[#293234] outline-none transition-all duration-300 placeholder:text-[#9aa2a3] hover:border-[#b7c0bf] focus:border-[#667676] focus:ring-4 focus:ring-[#9ed7ff]/20";

export function FormField({
  label,
  error,
  wide,
  children,
}: {
  label: string;
  error?: string;
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <label className={`block text-[.72rem] font-semibold text-[#4e595b] ${wide ? "sm:col-span-2" : ""}`}>
      <span className="mb-2 block">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-[.68rem] font-medium text-[#a34e49]">{error}</span>}
    </label>
  );
}
