import getCurrentDate from "./getCurrentDate";
import isSameDate from "./isSameDate";

/**
 * Determines if a date is today.
 * @param date - The date to check.
 * @returns True if the date is today, false otherwise.
 * @example
 * ```typescript
 * console.log(isToday(new Date(2022, 0, 1))); // If today is 2022-01-01, this will output true
 * console.log(isToday(new Date(2022, 0, 2))); // If today is 2022-01-01, this will output false
 * ```
 */
export default function isToday(date: Date): boolean {
  return isSameDate(date, getCurrentDate());
}
