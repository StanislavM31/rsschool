import { describe, expect, it } from 'vitest';
import { buildCsv } from './build-csv.ts';

const items = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    url: 'https://swapi.dev/api/people/1/',
  },
];

describe('buildCsv', () => {
  it('returns a valid CSV with headers and escaped values', () => {
    const result = buildCsv(items);

    expect(result).toContain('name,description,detailsUrl,height,mass,birth_year,gender');
    expect(result).toContain('Luke Skywalker');
    expect(result).toContain('https://swapi.dev/api/people/1/');
    expect(result).toContain('blond, blue, fair');
  });
});
