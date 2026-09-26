export function Aura({ className = "" }: { className?: string }) {
  return (
    <div className={`aura ${className}`.trim()} aria-hidden="true">
      <span className="aura__orb a" />
      <span className="aura__orb b" />
      <span className="aura__orb c" />
    </div>
  );
}
