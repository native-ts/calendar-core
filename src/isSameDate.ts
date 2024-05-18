import dateAsString from "./dateAsString";

/**
 * Determines if two dates are the same date.
 * @param date1 - The first date.
 * @param date2 - The second date.
 * @returns True if the dates are the same date, false otherwise.
 * @example
 * ```typescript
 * console.log(isSameDate(new Date(2022, 0, 1), new Date(2022, 0, 1))); // This will output true
 * console.log(isSameDate(new Date(2022, 0, 1), new Date(2022, 0, 2))); // This will output false
 * ```
 */
export default function isSameDate(date1: Date, date2: Date): boolean {
  const asString1 = dateAsString(date1);
  const asString2 = dateAsString(date2);
  return asString1 === asString2;
}
