// 'use client';
interface MenuItemProps {
  onClick: () => void;
  label: string;
}

export default function MenuItem({ label, onClick }: MenuItemProps) {
  return (
    <div
      onClick={onClick}
      className='font-semibold px-4 py-3 hover:bg-neutral-100 transition'
    >
      {label}
    </div>
  );
}
