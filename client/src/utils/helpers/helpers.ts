export function isValidColor(color: string): boolean {
  const hexRegex = /^#([0-9A-F]{3}|[0-9A-F]{6})$/i;
  const cssVarRegex = /^var\(--[a-zA-Z0-9-]+\)$/;

  return hexRegex.test(color) || cssVarRegex.test(color);
}

export function toTitleCase(str: string): string {
  return str.replace(
    /\w\S*/g,
    (txt: string) =>
      txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
  );
}
