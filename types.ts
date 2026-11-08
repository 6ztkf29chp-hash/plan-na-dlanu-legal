export type LegalSection = { heading: string; paragraphs: readonly string[] };

export type LegalDoc = {
  title: string;
  /** Label before the date, e.g. "Poslednja izmena". */
  updatedLabel: string;
  operatorLabel: string;
  contactLabel: string;
  notSet: string;
  sections: readonly LegalSection[];
};

/** `deletion` is the public "delete your account" page the Play Console asks for. */
export type LegalTexts = { privacy: LegalDoc; terms: LegalDoc; deletion: LegalDoc };
