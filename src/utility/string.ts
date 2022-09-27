/**
 * isDigit returns whether a single character is a digit
 *
 * If we try to use this function for a string whose length
 * is not 1, then we throw an error
 */
export function isDigit(ch: string): boolean {
  if (ch.length !== 1) {
    throw new Error(`${ch} length should be 1`);
  }

  const charCode = ch.charCodeAt(0);

  return 48 <= charCode && charCode <= 57;
}

/**
 * isUpper returns whether a single character is an upper case alphabet character
 *
 * If we try to use this function for a string whose length
 * is not 1, then we throw an error
 */
export function isUpper(ch: string): boolean {
  if (ch.length !== 1) {
    throw new Error(`${ch} length should be 1`);
  }

  const charCode = ch.charCodeAt(0);

  return 65 <= charCode && charCode <= 90;
}

/**
 * isLower returns whether a single character is a lower case alphabet character
 *
 * If we try to use this function for a string whose length
 * is not 1, then we throw an error
 */
export function isLower(ch: string): boolean {
  if (ch.length !== 1) {
    throw new Error(`${ch} length should be 1`);
  }

  const charCode = ch.charCodeAt(0);

  return 97 <= charCode && charCode <= 122;
}

/**
 * isAlnum returns whether the character is either an alphabetic or numeric character
 */
export function isAlnum(ch: string): boolean {
  return isDigit(ch) || isAlpha(ch);
}

export function isAlpha(ch: string): boolean {
  return isLower(ch) || isUpper(ch);
}
