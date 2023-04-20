import { romanSymbols } from '../roman-symbols.constants';
import { RomanCharacter, RomanCharacterSpecial } from '../types';

const romanSymbolKeys = Object.keys(romanSymbols);

export const isRomanCharacters = (chars: string): chars is RomanCharacter | RomanCharacterSpecial =>
  romanSymbolKeys.includes(chars);
