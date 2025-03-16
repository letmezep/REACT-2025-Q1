export const MAX_FILE_SIZE = 2 * 1024 * 1024;
export const ALLOWED_TYPES = ['image/png', 'image/jpeg'];
export const RegExpName = /^[A-Z]/;
export const RegExpMail =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
export const RegExpPassword =
  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*?&#]).+$/;
