/**
 * Returns a concatenated class name.
 * @param args List of class names to concatenate.
 * @returns The resulting class name string.
 */
export function cx(...args: (string | undefined)[]): string {
  return args.filter(Boolean).join(' ');
}

/**
 * Returns a clamped value.
 * @param min The minimum value.
 * @param max The maximum value.
 * @param value The value to clamp.
 * @returns The clamped value.
 */
export function clamp(min: number, max: number, value: number): number {
  return Math.min(max, Math.max(min, value));
}

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
