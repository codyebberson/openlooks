import { JSX } from 'solid-js';

/**
 * Returns a concatenated class name.
 * @param args List of class names to concatenate.
 * @returns The resulting class name string.
 */
export const cx = (...args: (string | undefined)[]): string => args.filter(Boolean).join(' ');

/**
 * Returns a CSS module class.
 * Helps managed possible undefined class names.
 * @param styles Collection of CSS module classes.
 * @param className The class name to get.
 * @returns The CSS module class.
 */
export const getClass = (styles: CSSModuleClasses, className: string | undefined): string | undefined =>
  styles[className as string];

/**
 * Merges two style objects.
 * @param s1 Possible collection of styles.
 * @param s2 Possible collection of styles.
 * @returns Possible collection of styles.
 */
export const mergeStyles = (
  s1: JSX.CSSProperties | undefined,
  s2: JSX.CSSProperties | undefined
): JSX.CSSProperties | undefined => (s1 && s2 ? { ...s1, ...s2 } : s1 || s2);

/**
 * Returns a clamped value.
 * @param min The minimum value.
 * @param max The maximum value.
 * @param value The value to clamp.
 * @returns The clamped value.
 */
export const clamp = (min: number, max: number, value: number): number => Math.min(max, Math.max(min, value));

/**
 * Kills a browser event.
 * Prevents default behavior.
 * Stops event propagation.
 * @param e The event.
 */
export function killEvent(e: Event): void {
  e.preventDefault();
  e.stopPropagation();
}
