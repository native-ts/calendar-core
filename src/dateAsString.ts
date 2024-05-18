/**
 * Converts a date to a string in the format "YYYY-MM-DD".
 * @param date - The date to convert.
 * @returns The date as a string.
 * @example
 * ```typescript
 * console.log(dateAsString(new Date())); // If today is 2022-01-01, this will output "2022-01-01"
 * ```
 */
export default function dateAsString(date: Date): string {
  return isNaN(date.getTime()) ? "" : date.toISOString().split("T")[0];
}
