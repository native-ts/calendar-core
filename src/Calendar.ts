import Month from "./Month";
import Year from "./Year";
import dayOfWeek from "./dayOfWeek";
import checkIsToday from "./isToday";
import Week, { WeekMode } from "./Week";

/**
 * The options for generating a calendar.
 */
export interface CalendarOptions {
  /**
   * A number representing the month. If not provided, the current month will be used.
   * - This is a zero-based index.
   * - For example, January is 0.
   */
  month?: number;

  /**
   * A number representing the year. If not provided, the current year will be used.
   * - This is a four-digit number.
   * - For example, 2022.
   */
  year?: number;

  /**
   * A value that determines the first day of the week. Default is `WeekMode.SUN`.
   * - `WeekMode.SUN`: "sun"
   * - `WeekMode.MON`: "mon"
   */
  mode?: WeekMode;
}

/**
 * CalendarDay is used to represent each day in the calendar.
 */
export interface CalendarDay {
  /**
   * The month index. This is a zero-based index.
   * - January is 0.
   */
  monthIndex: number;

  /**
   * The month number. This is a one-based index.
   * - January is 1.
   */
  month: number;

  /**
   * The year number.
   * - This is a four-digit number.
   * - For example, 2022.
   */
  year: number;

  /**
   * The day number.
   * - This is a one-based index.
   */
  day: number;

  /**
   * A boolean value that determines whether the day is today.
   * - This is useful for highlighting the current day in the calendar.
   */
  isToday: boolean;

  /**
   * A boolean value that determines whether the day is a weekend.
   * - Weekbegin is typically Sunday.
   */
  isWeekbegin: boolean;

  /**
   * A boolean value that determines whether the day is a weekend.
   * - Weekends is typically Saturday.
   */
  isWeekend: boolean;

  /**
   * A boolean value that determines whether the day is in the previous month.
   * - This is useful for displaying the days in the previous month in the current month's calendar.
   * - The days in the previous month are the days that are displayed before the first day of the current month.
   * - The days in the previous month are based on the current month.
   * - For example, if the current month is January, the days in the previous month are December of the previous year.
   * - If the current month is December, the days in the previous month are November.
   * 
   * @example
   * ```typescript
   * const calendar = new Calendar({ month: 0, year: 2022 });
   * const { daysInPrevMonth, daysInMonth, daysInNextMonth } = calendar.initialize();
   * 
   * // The days in the previous month are December 2021
   * console.log(daysInPrevMonth);
   * ```
   */
  isPrevMonth: boolean;

  /**
   * A boolean value that determines whether the day is in the next month.
   * This is useful for displaying the days in the next month in the current month's calendar.
   * 
   * For example, if the current month is January, the days in the next month are February.
   * If the current month is December, the days in the next month are January of the next year.
   * 
   * @example
   * ```typescript
   * const calendar = new Calendar({ month: 11, year: 2022 });
   * const { daysInPrevMonth, daysInMonth, daysInNextMonth } = calendar.initialize();
   * 
   * // The days in the next month are January 2023
   * console.log(daysInNextMonth);
   * ```
   */
  isNextMonth: boolean;

  /**
   * The week of the year.
   * - This is useful for displaying the week number in the calendar.
   * - The week of the year is based on the ISO 8601 standard.
   * - The week of the year is a number between 1 and 53.
   * - The week of the year is based on the year and the day.
   * @see Week.getWeekOfYear
   */
  weekOfYears: number;

  /**
   * The week of the month.
   * - This is useful for displaying the week number in the calendar.
   * - The week of the month is a number between 1 and 6.
   * - The week of the month is based on the month and the day.
   * @see Week.getWeekOfMonth
   */
  weekOfMonths: number;

  /**
   * The day of the week.
   * - This is a number between 0 and 6.
   * - Sunday is 0.
   * - Monday is 1.
   * - Tuesday is 2.
   * - Wednesday is 3.
   * - Thursday is 4.
   * - Friday is 5.
   * - Saturday is 6.
   */
  dayOfWeek: number;
}

/**
 * CalendarObject is used to represent the calendar object.
 * This object contains the days in the previous month, the days in the current month, and the days in the next month.
 * This object also contains the start week and the end week of the month.
 * This object also contains the total number of days in the month.
 * 
 * @example
 * ```typescript
 * const calendar = new Calendar({ month: 0, year: 2022 });
 * const { daysInPrevMonth, daysInMonth, daysInNextMonth, startAtWeek, endAtWeek, daysOfMonth } = calendar.initialize();
 * 
 * console.log(daysInPrevMonth);
 * console.log(daysInMonth);
 * console.log(daysInNextMonth);
 * console.log(startAtWeek);
 * console.log(endAtWeek);
 * console.log(daysOfMonth);
 * ```
 */
export interface CalendarObject {
  /**
   * The days in the previous month.
   * - This is an array of `CalendarDay` objects.
   * - The days in the previous month are the days that are displayed before the first day of the current month.
   * - The days in the previous month are based on the current month.
   * - For example, if the current month is January, the days in the previous month are December of the previous year.
   * - If the current month is December, the days in the previous month are November.
   * 
   * @example
   * ```typescript
   * const calendar = new Calendar({ month: 0, year: 2022 });
   * const { daysInPrevMonth, daysInMonth, daysInNextMonth } = calendar.initialize();
   * 
   * // The days in the previous month are December 2021
   * console.log(daysInPrevMonth);
   * ```
   */
  daysInPrevMonth: CalendarDay[];

  /**
   * The days in the current month.
   * - This is an array of `CalendarDay` objects.
   * - The days in the current month are the days that are displayed in the current month.
   * - The days in the current month are based on the current month.
   * 
   * @example
   * ```typescript
   * const calendar = new Calendar({ month: 0, year: 2022 });
   * const { daysInPrevMonth, daysInMonth, daysInNextMonth } = calendar.initialize();
   * 
   * // The days in the current month are January 2022
   * console.log(daysInMonth);
   * ```
   */
  daysInMonth: CalendarDay[];

  /**
   * The days in the next month.
   * - This is an array of `CalendarDay` objects.
   * - The days in the next month are the days that are displayed after the last day of the current month.
   * - The days in the next month are based on the current month.
   * - For example, if the current month is January, the days in the next month are February.
   * - If the current month is December, the days in the next month are January of the next year.
   * 
   * @example
   * ```typescript
   * const calendar = new Calendar({ month: 11, year: 2022 });
   * const { daysInPrevMonth, daysInMonth, daysInNextMonth } = calendar.initialize();
   * 
   * // The days in the next month are January 2023
   * console.log(daysInNextMonth);
   * ```
   */
  daysInNextMonth: CalendarDay[];

  /**
   * The start week of the month.
   * - This is a number between 0 and 6.
   * - Sunday is 0.
   * - Monday is 1.
   * - Tuesday is 2.
   * - Wednesday is 3.
   * - Thursday is 4.
   * - Friday is 5.
   * - Saturday is 6.
   */
  startAtWeek: number;

  /**
   * The end week of the month.
   * - This is a number between 0 and 6.
   * - Sunday is 0.
   * - Monday is 1.
   * - Tuesday is 2.
   * - Wednesday is 3.
   * - Thursday is 4.
   * - Friday is 5.
   * - Saturday is 6.
   */
  endAtWeek: number;

  /**
   * The total number of days in the month.
   * - This is a number between 28 and 31.
   * - The number of days in the month is based on the month and the year.
   */
  daysOfMonth: number;
}

/**
 * ## Calendar
 * 
 * The `Calendar` class is used to generate a calendar.
 * 
 * ### Example
 * ```typescript
 * const calendar = new Calendar({ month: 0, year: 2022 });
 * const { daysInPrevMonth, daysInMonth, daysInNextMonth, startAtWeek, endAtWeek, daysOfMonth } = calendar.initialize();
 * 
 * console.log(daysInPrevMonth);
 * console.log(daysInMonth);
 * console.log(daysInNextMonth);
 * console.log(startAtWeek);
 * console.log(endAtWeek);
 * console.log(daysOfMonth);
 * ```
 */
export default class Calendar {

  /**
   * The `Month` class.
   * @see Month
   */
  static Month = Month;

  /**
   * The `Year` class.
   * @see Year
   */
  static Year = Year;

  /**
   * The `Week` class.
   * @see Week
   */
  static Week = Week;

  private _month!: Month;
  private _year!: Year;
  private _mode: WeekMode = WeekMode.SUN;
  
  constructor(private readonly options: CalendarOptions = {}) {
    this._month = new Month(this.options.month, this.options.year);
    this._year = new Year(this.options.year);
    this._mode = this.options.mode ?? WeekMode.SUN;
  }

  /**
   * The start week of the week.
   * - This is a number between 0 and 6.
   */
  get startAt(): number {
    return dayOfWeek(1, this._month.value, this._year.value);
  }

  /**
   * The end week of the week.
   * - This is a number between 0 and 6.
   */
  get endAt(): number {
    return (this.startAt + this.getDaysOfMonth()) % 7;
  }

  /**
   * Generate a `CalendarDay` object.
   * @param year The year number.
   * @param month The month number.
   * @param index The day index.
   * @returns A `CalendarDay` object.
   * @see CalendarDay
   * @see Week
   * @see checkIsToday
   * @see dayOfWeek
   */
  private _generateCalendarDay(year: number, month: number, index: number): CalendarDay {
    const day = index + 1;
    const week = Week.from(year, month, day).setMode(this._mode);
    const isToday = checkIsToday(new Date(year, month, day));
    const isWeekend = week.isWeekend();
    const isWeekbegin = week.isWeekbegin();
    const weekOfYears = week.getWeekOfYear();
    const weekOfMonths = week.getWeekOfMonth();
    const dayOfWeek = week.getDayOfWeek();

    return {
      monthIndex: month,
      month: month + 1,
      year,
      day,
      isToday,
      isWeekbegin,
      isWeekend,
      isPrevMonth: false,
      isNextMonth: false,
      weekOfYears,
      weekOfMonths,
      dayOfWeek,
    }
  }

  /**
   * Get the total number of days in the month.
   * @returns A number representing the total number of days in the month.
   * @see Month
   * 
   * @example
   * ```typescript
   * const calendar = new Calendar({ month: 0, year: 2022 });
   * console.log(calendar.getDaysOfMonth()); // If the current month is January, this will output 31
   * ```
   */
  getDaysOfMonth(): number {
    return this._month.numberOfDays();
  }

  /**
   * Initialize the calendar.
   * - This function generates the days in the previous month, the days in the current month, and the days in the next month.
   * - This function also calculate the start week and the end week of the month.
   * - This function also calculate the total number of days in the month.
   * 
   * @returns A `CalendarObject` object.
   * @see CalendarObject
   * 
   * @example
   * ```typescript
   * const calendar = new Calendar({ month: 0, year: 2022 });
   * const { daysInPrevMonth, daysInMonth, daysInNextMonth, startAtWeek, endAtWeek, daysOfMonth } = calendar.initialize();
   * 
   * console.log(daysInPrevMonth);
   * console.log(daysInMonth);
   * console.log(daysInNextMonth);
   * console.log(startAtWeek);
   * console.log(endAtWeek);
   * console.log(daysOfMonth);
   * ```
   */
  initialize(): CalendarObject {
    const month = this._month.value;
    const year = this._year.value;
    const startAtWeek = this.startAt;
    const endAtWeek = this.endAt;
    const daysOfMonth = this.getDaysOfMonth();

    const daysInMonth = new Array(daysOfMonth)
      .fill(null)
      .map((_, index) => this._generateCalendarDay(year, month, index));

    const numDaysOfPrevMonth = startAtWeek - Week.getBegin(this._mode);
    const daysInPrevMonth = numDaysOfPrevMonth <= 0 ? [] : new Array(numDaysOfPrevMonth)
      .fill(null)
      .map((_, index) => this._generateCalendarDay(year, month, index));

    const numDaysOfNextMonth = 7 - endAtWeek - Math.abs(Week.getBegin(this._mode) - 1);
    const daysInNextMonth = numDaysOfNextMonth <= 0 ? [] : new Array(numDaysOfNextMonth)
      .fill(null)
      .map((_, index) => this._generateCalendarDay(year, month, index));
    
    return {
      daysInPrevMonth,
      daysInMonth,
      daysInNextMonth,
      startAtWeek,
      endAtWeek,
      daysOfMonth,
    }
  }
}
