"use client";

type TProfileMenuItem = {
  onClick: () => void;
  label: string;
};

export default function ProfileMenuItem({ onClick, label }: TProfileMenuItem) {
  return (
    <div className="p-3 hover:bg-gray-100 transition" onClick={onClick}>
      {label}
    </div>
  );
}
