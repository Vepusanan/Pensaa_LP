const appUrl = (import.meta.env.PUBLIC_APP_URL ?? "").replace(/\/+$/, "");

export const appLinks = {
  login: `${appUrl}/login`,
  signup: `${appUrl}/signup`,
} as const;

export const formEndpoint = import.meta.env.PUBLIC_FORM_ENDPOINT ?? "";

/** Trim to a word boundary for meta descriptions. */
export function clampText(text: string, max = 160): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

/** Split `text` around the first occurrence of `fragment` for inline accenting. */
export function splitOn(text: string, fragment: string): [string, string, string] | null {
  const i = text.indexOf(fragment);
  if (i === -1) return null;
  return [text.slice(0, i), fragment, text.slice(i + fragment.length)];
}
