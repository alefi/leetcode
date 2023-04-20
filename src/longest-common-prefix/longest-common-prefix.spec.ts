import { longestCommonPrefix } from './longest-common-prefix';

describe('14. Longest Common Prefix', () => {
  const samples: ReadonlyArray<[string[], string]> = [
    [['flower', 'flow', 'flight'], 'fl'],
    [['dog', 'racecar', 'car'], ''],
    [['computer', 'commercial', 'commitment'], 'com'],
    [[], ''],
    [['single'], 'single'],
  ];

  test.each(samples)('#longestCommonPrefix(%s)', (sample, expected) => {
    expect(longestCommonPrefix(sample)).toBe(expected);
  });
});
