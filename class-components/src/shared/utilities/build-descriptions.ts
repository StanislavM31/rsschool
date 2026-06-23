import type { Person } from '@entities/person/model/types/person.type.ts';

export function buildDescription(
  person: Person,
  t: (key: string) => string
): string {
  return `${t('height')} ${person.height} cm · ${t('mass')} ${person.mass} kg · ${t('born')} ${person.birth_year} · ${person.gender}`;
}
