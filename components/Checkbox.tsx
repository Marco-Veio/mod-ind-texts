"use client";

interface Props {
  checked: boolean;
  onChange: () => void;
}

export default function Checkbox({ checked, onChange }: Props) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="checkbox"
        className="w-5 h-5 border-2 border-gray-300 rounded-md 
                   checked:bg-blue-600 checked:border-blue-600 
                   transition-colors duration-200"
        checked={checked}
        onChange={onChange}
      />
      <span className="text-gray-700 leading-relaxed">
        Declaro que li e compreendi o conteúdo do texto até aqui
      </span>
    </label>
  );
}
