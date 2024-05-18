/**
 * ## getCurrentMonth
 * 
 * This function returns the current month. By default, it returns the month as a zero-based index 
 * (i.e., January is 0, February is 1, etc.). If you want the month number as traditionally used 
 * (i.e., January is 1, February is 2, etc.), pass `false` as the argument.
 * 
 * ### Parameters
 * - `isIndex` (optional): A boolean value that determines whether the returned month number is 
 * zero-based (true) or not (false). Default is `true`.
 * 
 * ### Returns
 * - A number representing the current month. If `isIndex` is `true`, the month number is zero-based. 
 * If `isIndex` is `false`, the month number starts from 1.
 * 
 * ### Example
 * ```typescript
 * console.log(getCurrentMonth()); // If the current month is January, this will output 0
 * console.log(getCurrentMonth(false)); // If the current month is January, this will output 1
 * ```
 */
export default function getCurrentMonth(isIndex = true): number {
  return new Date().getMonth() + (Number(Boolean(!isIndex)));
}
