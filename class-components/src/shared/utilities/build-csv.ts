import type { Person } from '@/entities/person/model/interfaces/person.interface.ts';

const headers = ['name', 'description', 'detailsUrl', 'height', 'mass', 'birth_year', 'gender'];

const escapeCell = (value: string): string =>
  `"${value.replace(/"/g, '""')}"`;

export function buildCsv(items: Person[]): string {
  const rows = items.map((item) => {
    const description = `${item.hair_color}, ${item.eye_color}, ${item.skin_color}`;
    return [
      escapeCell(item.name),
      escapeCell(description),
      escapeCell(item.url),
      escapeCell(item.height),
      escapeCell(item.mass),
      escapeCell(item.birth_year),
      escapeCell(item.gender),
    ].join(',');
  });

  return [headers.join(','), ...rows].join('\r\n');
}
