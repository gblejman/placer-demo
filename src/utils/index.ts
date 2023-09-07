/**
 * Looks ok.
 * See https://www.abstractapi.com/guides/email-validation-regex-javascript
 */
const emailRegex = new RegExp(
  /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
  "gm"
);

export const isEmail = (str: string) => emailRegex.test(str);
