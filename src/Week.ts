import getCurrentDate from "./getCurrentDate";

/**
 * Represents the mode of the week.
 * @enum {string}
 * @readonly
 * @example
 * ```typescript
 * console.log(Week.MODE.SUN); // "sun"
 * console.log(Week.MODE.MON); // "mon"
 * ```
 */
export enum WeekMode {
  SUN = "sun",
  MON = "mon",
}

/**
 * Represents a week.
 * @example
 * ```typescript
 * const week = new Week();
 * console.log(week.getWeekOfMonth());
 * console.log(week.getWeekOfYear());
 * ```
 */
export default class Week {

  static MODE = WeekMode;

  constructor(
    private date: Date = getCurrentDate(),
    private _mode: WeekMode = WeekMode.SUN,
  ) {
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date");
    }
  }

  /**
   * Creates a Week object from a date.
   * @param date - The date to create the Week object from.
   * @param month - The month of the date.
   * @param day - The day of the date.
   * @returns A Week object.
   * @example
   * ```typescript
   * const week = Week.from(new Date());
   * console.log(week.getWeekOfMonth());
   * console.log(week.getWeekOfYear());
   * ```
   */
  static from(date: Date | string | number, month?: number, day?: number): Week {
    let d: Date | undefined = undefined;

    if (date instanceof Date) {
      d = date;
    } else if (typeof date === "string") {
      d = new Date(date);
    } else if (typeof date === "number") {
      if (month === undefined && day === undefined) {
        d = new Date(date);
      } else if (month !== undefined && day === undefined) {
        d = new Date(date, month);
      } else if (month !== undefined && day !== undefined) {
        d = new Date(date, month, day);
      } else {
        throw new Error("Invalid arguments");
      }
    }

    if (!d || isNaN(d.getTime())) {
      throw new Error("Invalid date");
    }

    return new Week(d);
  }

  /**
   * Returns the first day of the week.
   * @param mode - The mode of the week.
   * @returns The first day of the week.
   * @example
   * ```typescript
   * console.log(Week.getBegin(Week.MODE.SUN)); // 0
   * console.log(Week.getBegin(Week.MODE.MON)); // 1
   * ```
   */
  static getBegin(mode: WeekMode) {
    return mode === WeekMode.SUN ? 0 : 1;
  }

  /**
   * Returns the last day of the week.
   * @param mode - The mode of the week.
   * @returns The last day of the week.
   * @example
   * ```typescript
   * console.log(Week.getEnd(Week.MODE.SUN)); // 6
   * console.log(Week.getEnd(Week.MODE.MON)); // 0
   * ```
   */
  static getEnd(mode: WeekMode) {
    return mode === WeekMode.SUN ? 6 : 0;
  }

  /**
   * Getter the first day of the week.
   * @returns The first day of the week.
   * @example
   * ```typescript
   * const week = new Week();
   * console.log(week.begin);
   * ```
   */
  get begin() {
    return this._mode === WeekMode.SUN ? 0 : 1;
  }

  /**
   * Getter the last day of the week.
   * @returns The last day of the week.
   * @example
   * ```typescript
   * const week = new Week();
   * console.log(week.end);
   * ```
   */
  get end() {
    return this._mode === WeekMode.SUN ? 6 : 0;
  }

  /**
   * Set the mode of the week.
   * @param mode - The mode of the week.
   * @returns The Week object.
   * @example
   * ```typescript
   * const week = new Week();
   * week.setMode(Week.MODE.MON);
   * ```
   */
  setMode(mode: WeekMode): Week {
    this._mode = mode;
    return this;
  }

  /**
   * Determines if the date is a weekend.
   * @returns True if the date is a weekend, false otherwise.
   * @example
   * ```typescript
   * const week = new Week();
   * console.log(week.isWeekend());
   * ```
   */
  isWeekend(): boolean {
    return this.date.getDay() === this.begin;
  }

  /**
   * Determines if the date is the beginning of the week.
   * @returns True if the date is the beginning of the week, false otherwise.
   * @example
   * ```typescript
   * const week = new Week();
   * console.log(week.isWeekbegin());
   * ```
   */
  isWeekbegin(): boolean {
    return this.date.getDay() === this.end;
  }


  /**
   * Get the Date object of the start of the week.
   * @returns The Date object of the start of the week.
   * @example
   * ```typescript
   * const week = new Week();
   * console.log(week.startWeek());
   * ```
   */
  startWeek(): Date {
    const date = new Date(this.date);
    date.setDate(this.date.getDate() - this.date.getDay() + this.begin);
    return date;
  }

  /**
   * Get the Date object of the end of the week.
   * @returns The Date object of the end of the week.
   * @example
   * ```typescript
   * const week = new Week();
   * console.log(week.endWeek());
   * ```
   */
  endWeek(): Date {
    const date = new Date(this.date);
    date.setDate(this.date.getDate() + (this.end - this.date.getDay()));
    return date;
  }

  /**
   * Get the week of the month.
   * @returns The week of the month.
   * @example
   * ```typescript
   * const week = new Week();
   * console.log(week.getWeekOfMonth());
   * ```
   */
  getWeekOfMonth(): number {
    const startMonthInWeek = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    const dayOfPrevMonthInWeek = startMonthInWeek - this.begin;
    const totalDayToDate = this.date.getDate() + dayOfPrevMonthInWeek;
    return Math.ceil(totalDayToDate / 7);
  }

  /**
   * Get the week of the year.
   * @returns The week of the year.
   * @example
   * ```typescript
   * const week = new Week();
   * console.log(week.getWeekOfYear());
   * ```
   */
  getWeekOfYear(): number {
    const timeOfFirstDay = new Date(this.date.getFullYear(), 0, 1).getTime();
    const timeOfDate = this.date.getTime();
    const totalDays = Math.ceil((timeOfDate - timeOfFirstDay) / 86400000);
    return Math.ceil((totalDays + this.begin) / 7);
  }

  /**
   * Get the day of the week.
   * @returns The day of the week.
   * @example
   * ```typescript
   * const week = new Week();
   * console.log(week.getDayOfWeek());
   * ```
   */
  getDayOfWeek(): number {
    return this.date.getDay();
  }
}
