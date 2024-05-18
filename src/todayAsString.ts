import dateAsString from "./dateAsString";

/**
 * Converts today's date to a string in the format "YYYY-MM-DD".
 * @returns Today's date as a string.
 * @example
 * ```typescript
 * console.log(todayAsString()); // If today is 2022-01-01, this will output "2022-01-01"
 * ```
 */
export default function todayAsString(): string {
  return dateAsString(new Date());
}
