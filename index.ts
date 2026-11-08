import type { Lang } from '../i18n';
import { legalEn } from './en';
import { legalRu } from './ru';
import { legalSr } from './sr';
import type { LegalTexts } from './types';

export type { LegalDoc, LegalSection, LegalTexts } from './types';

export const LEGAL: Record<Lang, LegalTexts> = { sr: legalSr, en: legalEn, ru: legalRu };
