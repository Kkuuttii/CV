interface CollapseProps {
  children: JSX.Element[];
  isOpen: boolean;
  id: string;
  onToggle: (id: string) => void;
  title: string;
}

export function Collapse({ children, isOpen, onToggle, id, title }: CollapseProps) {
  return (
    <div>
      <div className="min-w-full h-11 bg-slate-300" onClick={() => onToggle(id)}>
        <span className={`inline-block transition-transform duration-300 ${isOpen && 'rotate-180'}`}>{'▲'}</span>
        <span className={` w-3/4 `}>{title}</span>
      </div>
      {isOpen && children}
    </div>
  );
}
