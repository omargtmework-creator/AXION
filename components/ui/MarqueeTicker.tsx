type Props = {
  items: string[];
  className?: string;
  slow?: boolean;
};

export default function MarqueeTicker({ items, className = "", slow = false }: Props) {
  const content = [...items, ...items].join(" \u00b7 ");
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className={`inline-block min-w-full ${slow ? "ticker-slow" : "ticker"}`}>
        <span className="pr-10">{content}</span>
      </div>
    </div>
  );
}
