export function longestCommonPrefix(samples: string[]): string {
  const sortedSamples = samples.sort();
  const [firstSample] = sortedSamples;
  const lastSample = sortedSamples[sortedSamples.length - 1];

  const commonPrefixChars = [];

  for (let i = 0; i < firstSample?.length; i++) {
    const isCharEquals = firstSample[i] === lastSample[i];

    if (isCharEquals) {
      commonPrefixChars.push(firstSample[i]);
    } else {
      break;
    }
  }

  return commonPrefixChars.join('');
}
