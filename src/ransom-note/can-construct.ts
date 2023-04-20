export function canConstruct(ransomNote: string, magazine: string): boolean {
  for (const char of ransomNote) {
    if (magazine.indexOf(char) === -1) {
      return false;
    }

    magazine = magazine.replace(char, '');
  }

  return true;
}
