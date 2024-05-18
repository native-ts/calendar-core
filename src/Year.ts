import getCurrentYear from "./getCurrentYear";

/**
 * ## Year
 * 
 * This class represents a year.
 * 
 * ## Example
 * ```typescript
 * const year = new Year(2022);
 * console.log(year.value); // This will output 2022
 * ```
 */
export default class Year {

  private _year!: number;

  constructor(year?: number) {
    this._year = year ?? new Date().getFullYear();
  }

  /**
   * The year number.
   * @returns The year number.
   * @example
   * ```typescript
   * const year = new Year(2022);
   * console.log(year.value); // This will output 2022
   * ```
   */
  get value(): number {
    return this._year;
  }

  /**
   * The mininum value of year.
   * @returns The year number.
   * @example
   * ```typescript
   * console.log(Year.min()); // This will output 0
   * ```
   */
  static min(): number {
    return 0;
  }

  /**
   * The maximum value of year.
   * @returns The year number.
   * @example
   * ```typescript
   * console.log(Year.max()); // This will output 9999
   * ```
   */
  static max(): number {
    return 9999;
  }

  /**
   * The current year.
   * @returns The current year.
   * @example
   * ```typescript
   * console.log(Year.getCurrent()); // If the current year is 2022, this will output 2022
   * ```
   */
  static getCurrent(): number {
    return getCurrentYear();
  }

  /**
   * Fixes the year.
   * @param year - The year to fix.
   * @returns The fixed year.
   * @example
   * ```typescript
   * console.log(Year.fix(2022)); // This will output 2022
   * console.log(Year.fix()); // If the current year is 2022, this will output 2022
   * ```
   */
  static fix(year?: number): number {
    return year ?? Year.getCurrent();
  }

  /**
   * Gets the year.
   * @param year - The year to get.
   * @returns The year.
   * @example
   * ```typescript
   * console.log(Year.getYear(2022)); // This will output 2022
   * console.log(Year.getYear()); // If the current year is 2022, this will output 2022
   * ```
   */
  static getYear(year?: number): number {
    return Year.fix(year);
  }

  /**
   * Determines if a year is a leap year.
   * @param year - The year to check.
   * @returns True if the year is a leap year, false otherwise.
   * @example
   * ```typescript
   * console.log(Year.isLeap(2024)); // This will output true
   * console.log(Year.isLeap(2022)); // This will output false
   * ```
   */
  static isLeap(year?: number): boolean {
    year = Year.getYear(year);
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  }
}