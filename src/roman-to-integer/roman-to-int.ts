import { subtractionPattern } from './subtraction-pattern.constants';
import { isRomanCharacters } from './helpers';
import { romanSymbols } from './roman-symbols.constants';

const romanCharToValue = (char: string): number => {
  if (isRomanCharacters(char)) {
    return romanSymbols[char];
  }

  return 0;
};

const splitByPattern = (sample: string): string[] => {
  const subtractions: string[] = sample.match(subtractionPattern) ?? [];
  const remaining = sample.replace(subtractionPattern, '').split('');

  return subtractions.concat(remaining);
};

export function romanToInt(sample: string): number {
  const chars = splitByPattern(sample);
  const values = chars.map(romanCharToValue);

  return values.reduce((total, current) => (total += current), 0);
}
