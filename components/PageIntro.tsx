type PageIntroProps = {
  en: string;
  ja?: string;
  lead?: string;
};

export function PageIntro({ en, ja, lead }: PageIntroProps) {
  return (
    <header className="page-intro">
      <h1>{en}</h1>
      {ja ? <p className="section-head__ja">{ja}</p> : null}
      {lead ? <p className="page-intro__lead">{lead}</p> : null}
    </header>
  );
}
