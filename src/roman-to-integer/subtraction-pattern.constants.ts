import { RomanCharacterSpecial } from './types';

const characters = Object.keys(RomanCharacterSpecial);

export const subtractionPattern = new RegExp('(' + characters.join('|') + ')', 'g');
