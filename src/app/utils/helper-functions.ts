export function isNullOrUndefined(value: any) {
  return value === null || value === undefined;
}

export function isNullOrEmpty(value: string | null | undefined) {
  if (isNullOrUndefined(value)) {
    return true;
  }

  return value === '';
}

export function isNullOrEmptyArray(value: any[]) {
  if (isNullOrUndefined(value)) {
    return true;
  }

  return value.length === 0;
}

export function base64ToFile(base64: string, filename: string) {
  const arr = base64?.split(',');
  // @ts-ignore
  const mime = arr[0].match(/:(.*?);/)[1];
  // @ts-ignore
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

export function uniqueID() {
  return Math.floor(Math.random() * Date.now());
}

export function defaultAvatar(url: string | null | undefined): boolean {
  if (isNullOrEmpty(url)) {
    return true;
  }

  // @ts-ignore
  return url.includes('default');
}
