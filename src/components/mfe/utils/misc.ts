export function isValidResponseCode(code: number) {
  return code >= 200 && code < 300;
}