/**
 * Returns a concatenated class name.
 * @param args List of class names to concatenate.
 * @returns The resulting class name string.
 */
export function cx(...args: (string | undefined)[]): string {
  return args.filter(Boolean).join(' ');
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
