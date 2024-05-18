/**
 * Returns the swap of the minimum and maximum values.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The swap of the minimum and maximum values.
 * @example
 * ```typescript
 * console.log(swapMinMax(1, 2)); // This will output [1, 2]
 * console.log(swapMinMax(2, 1)); // This will output [1, 2]
 * ```
 */
export function swapMinMax(a: number, b: number): [number, number] {
  return a < b ? [a, b] : [b, a];
}

/**
 * Determines if a value is in a range.
 * @param value - The value to check.
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns True if the value is in the range, false otherwise.
 * @example
 * ```typescript
 * console.log(inRange(1, 0, 2)); // This will output true
 * console.log(inRange(0, 1, 2)); // This will output false
 * ```
 */
export function inRange(value: number, min: number, max: number): boolean {
  [min, max] = swapMinMax(min, max);
  return value > min && value < max;
}

/**
 * Determines if a value is in a range, including the minimum value.
 * @param value - The value to check.
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns True if the value is in the range, false otherwise.
 * @example
 * ```typescript
 * console.log(inRangeLeft(1, 1, 2)); // This will output true
 * console.log(inRangeLeft(0, 1, 2)); // This will output false
 * ```
 */
export function inRangeLeft(value: number, min: number, max: number): boolean {
  [min, max] = swapMinMax(min, max);
  return inRange(value, min, max) || value === min;
}

/**
 * Determines if a value is in a range, including the maximum value.
 * @param value - The value to check.
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns True if the value is in the range, false otherwise.
 * @example
 * ```typescript
 * console.log(inRangeRight(1, 0, 1)); // This will output true
 * console.log(inRangeRight(2, 0, 1)); // This will output false
 * ```
 */
export function inRangeRight(value: number, min: number, max: number): boolean {
  [min, max] = swapMinMax(min, max);
  return inRange(value, min, max) || value === max;
}

/**
 * Determines if a value is in a range, including the minimum and maximum values.
 * @param value - The value to check.
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns True if the value is in the range, false otherwise.
 * @example
 * ```typescript
 * console.log(inRangeInclusive(1, 1, 2)); // This will output true
 * console.log(inRangeInclusive(0, 1, 2)); // This will output false
 * console.log(inRangeInclusive(2, 1, 2)); // This will output true
 * ```
 */
export function inRangeInclusive(value: number, min: number, max: number): boolean {
  [min, max] = swapMinMax(min, max);
  return inRange(value, min, max) || [min, max].includes(value);
}
