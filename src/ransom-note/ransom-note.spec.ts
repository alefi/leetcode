import { canConstruct } from './can-construct';

describe('383. Ransom Note', () => {
  const samples: ReadonlyArray<[[string, string], boolean]> = [
    [['a', 'b'], false],
    [['aa', 'ab'], false],
    [['aa', 'aab'], true],
    [['aac', 'aab'], false],
    [['aa', 'aa'], true],
    [['aaa', 'aa'], false],
    [['aab', 'ab'], false],
    [['aab', 'a'], false],
    [['bg', 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj'], true],
  ];

  test.each(samples)('#canConstruct(%s)', (sample, expected) => {
    expect(canConstruct(...sample)).toBe(expected);
  });
});
