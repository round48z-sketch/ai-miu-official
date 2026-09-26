export function Aura({ className = "" }: { className?: string }) {
  return (
    <div className={`aura ${className}`.trim()} aria-hidden="true">
      <span className="aura__mote m1" />
      <span className="aura__mote m2" />
      <span className="aura__mote m3" />
      <span className="aura__mote m4" />
      <span className="aura__mote m5" />
      <span className="aura__star s1" />
      <span className="aura__star s2" />
      <span className="aura__star s3" />
    </div>
  );
}
