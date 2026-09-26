export function Aura({ className = "" }: { className?: string }) {
  return (
    <div className={`aura ${className}`.trim()} aria-hidden="true">
      <span className="aura__wash" />
    </div>
  );
}
