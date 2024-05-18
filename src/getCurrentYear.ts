/**
 * ## getCurrentYear
 * 
 * This function returns the current year as a four-digit number.
 * 
 * ## Parameters
 * This function does not take any parameters.
 * 
 * ## Returns
 * - A number representing the current year.
 * 
 * ## Example
 * ```typescript
 * console.log(getCurrentYear()); // If the current year is 2022, this will output 2022
 * ```
 */
export default function getCurrentYear(): number {
  return new Date().getFullYear();
}
