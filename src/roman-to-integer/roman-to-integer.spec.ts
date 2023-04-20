import { romanToInt } from './roman-to-int';

describe('13. Roman to Integer', () => {
  const samples: ReadonlyArray<[string, number]> = [
    ['III', 3],
    ['LVIII', 58],
    ['MCMXCIV', 1994],
  ];

  test.each(samples)('#romanToInt(%s)', (sample, expected) => {
    expect(romanToInt(sample)).toBe(expected);
  });
});
