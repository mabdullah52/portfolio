type ClassValue = string | false | null | undefined;

/**
 * Joins class names, filtering out falsy values.
 * No external dependency needed for this simple case.
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
