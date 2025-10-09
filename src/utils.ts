/**
 * Utility functions for string manipulation
 */
export class StringUtils {
  /**
   * Reverses a string
   * @param str The string to reverse
   * @returns The reversed string
   */
  static reverse(str: string): string {
    return str.split('').reverse().join('');
  }

  /**
   * Capitalizes the first letter of a string
   * @param str The string to capitalize
   * @returns The capitalized string
   */
  static capitalize(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /**
   * Checks if a string is a palindrome
   * @param str The string to check
   * @returns True if the string is a palindrome, false otherwise
   */
  static isPalindrome(str: string): boolean {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
  }
}
