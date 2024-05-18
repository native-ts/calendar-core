/**
 * Returns the day of the week for a given date.
 * 
 * ## Parameters
 * - `day` (number): The day of the month.
 * - `month` (number): The month of the year.
 * - `year` (number): The year.
 * 
 * ## Returns
 * - A number representing the day of the week. The value is between 0 and 6, where 0 is Sunday, 1 is Monday, and so on.
 * 
 * ## Example
 * ```typescript
 * console.log(dayOfWeek(1, 0, 2022)); // This will output 5
 * ```
 */
export default function dayOfWeek(day: number, month: number, year: number): number {
  return new Date(year, month, day).getDay();
}
