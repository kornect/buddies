export function isNullOrUndefined(value: string) {
  return value === null || value === undefined;
}

export function isNullOrEmpty(value: string) {
  if (isNullOrUndefined(value)) {
    return true;
  }

  return value === '';
}
