import getCurrentMonth from "./getCurrentMonth";
import getCurrentYear from "./getCurrentYear";
import { inRangeInclusive } from "./numeric";

/**
 * ## Month
 * 
 * This class represents a month in a year.
 * 
 * ## Example
 * ```typescript
 * const month = new Month(1, 2022);
 * console.log(month.year); // This will output 2022
 * console.log(month.value); // This will output 1
 * console.log(month.numberOfDays()); // This will output 31
 * ```
 */
export default class Month {

  private _year: number = getCurrentYear();

  private _month!: number;

  constructor(month?: number, year?: number) {
    if (year !== undefined) {
      this._year = year;
    }

    this._month = Month.getMonth(month);
  }

  /**
   * The year of the month.
   * @returns The year of the month.
   * @example
   * ```typescript
   * const month = new Month(1, 2022);
   * console.log(month.year); // This will output 2022
   * ```
   */
  get year(): number {
    return this._year;
  }

  /**
   * The month number.
   * @returns The month number.
   * @example
   * ```typescript
   * const month = new Month(1, 2022);
   * console.log(month.value); // This will output 1
   * ```
   */
  get value(): number {
    return this._month;
  }

  /**
   * The mininum value of month based on the zero-based index or based on the one-based index.
   * @param isIndex - If true, the month number is zero-based. If false, the month number is one-based.
   * @returns The month number.
   * @example
   * ```typescript
   * const month = new Month(1, 2022);
   * console.log(month.min()); // This will output 0
   * console.log(month.min(false)); // This will output 1
   * ```
   */
  static min(isIndex = true): number {
    return isIndex ? 0 : 1;
  }

  /**
   * The maximum value of month based on the zero-based index or based on the one-based index.
   * @param isIndex - If true, the month number is zero-based. If false, the month number is one-based.
   * @returns The month number.
   * @example
   * ```typescript
   * console.log(Month.max()); // This will output 11
   * console.log(Month.max(false)); // This will output 12
   * ```
   */
  static max(isIndex = true): number {
    return isIndex ? 11 : 12;
  }

  /**
   * The current month number.
   * @param isIndex - If true, the month number is zero-based. If false, the month number is one-based.
   * @returns The month number.
   * @example
   * ```typescript
   * console.log(Month.getCurrent()); // If the current month is January, this will output 0
   * console.log(Month.getCurrent(false)); // If the current month is January, this will output 1
   * ```
   */
  static getCurrent(isIndex = true): number {
    return getCurrentMonth(isIndex);
  }

  /**
   * Returns the month number based on the given month number.
   * @param month - The month number.
   * @param isIndex - If true, the month number is zero-based. If false, the month number is one-based.
   * @returns The month number.
   * @example
   * ```typescript
   * console.log(Month.fix(1)); // This will output 1
   * console.log(Month.fix(13)); // This will output current month number
   * ```
   */
  static fix(month?: number, isIndex = true): number {
    month = month ?? Month.getCurrent(isIndex);
    return inRangeInclusive(month, Month.min(isIndex), Month.max(isIndex))
      ? month
      : Month.getCurrent(isIndex); 
  }

  /**
   * Returns the month number based on the given month number.
   * @param month - The month number.
   * @param isIndex - If true, the month number is zero-based. If false, the month number is one-based.
   * @returns The month number.
   * @example
   * ```typescript
   * console.log(Month.getMonth(1)); // This will output 1
   * console.log(Month.getMonth(13)); // This will output current month number
   * ```
   */
  static getMonth(month?: number, isIndex = true): number {
    return Month.fix(month, isIndex);
  } 

  /**
   * Returns the number of days in a month.
   * @param month - The month number.
   * @param year - The year.
   * @returns The number of days in the month.
   * @example
   * ```typescript
   * console.log(Month.numberOfDays(1, 2022)); // This will output 31
   * ```
   */
  static numberOfDays(month?: number, year?: number): number {
    if (year === undefined) {
      year = getCurrentYear();
    }

    month = Month.getMonth(month);
    return new Date(year, month, 0).getDate();
  }

  /**
   * Returns the number of days in the month.
   * @returns The number of days in the month.
   * @example
   * ```typescript
   * const month = new Month(1, 2022);
   * console.log(month.numberOfDays()); // This will output 31
   * ```
   */
  numberOfDays(): number {
    return new Date(this._year, this._month, 0).getDate();
  }

}