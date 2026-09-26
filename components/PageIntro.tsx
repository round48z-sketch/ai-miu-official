type PageIntroProps = {
  en: string;
  ja?: string;
  lead?: string;
  note?: string;
};

export function PageIntro({ en, ja, lead, note }: PageIntroProps) {
  return (
    <header className="page-intro">
      <h1>{en}</h1>
      {ja ? <p className="section-head__ja">{ja}</p> : null}
      {lead ? <p className="page-intro__lead">{lead}</p> : null}
      {note ? <p className="page-intro__note">{note}</p> : null}
    </header>
  );
}
