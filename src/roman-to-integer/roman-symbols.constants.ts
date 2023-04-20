import { RomanCharacter, RomanCharacterSpecial } from './types';

export const romanSymbols = {
  [RomanCharacter.I]: 1,
  [RomanCharacter.V]: 5,
  [RomanCharacter.X]: 10,
  [RomanCharacter.L]: 50,
  [RomanCharacter.C]: 100,
  [RomanCharacter.D]: 500,
  [RomanCharacter.M]: 1000,

  [RomanCharacterSpecial.IV]: 4,
  [RomanCharacterSpecial.IX]: 9,
  [RomanCharacterSpecial.XL]: 40,
  [RomanCharacterSpecial.XC]: 90,
  [RomanCharacterSpecial.CD]: 400,
  [RomanCharacterSpecial.CM]: 900,
};
