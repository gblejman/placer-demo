import { FC } from "react";
import { FormErrors } from "./useForm";

export type FieldErrorProps = {
  id: string;
  errors: FormErrors;
};

export const FieldError: FC<FieldErrorProps> = ({ id, errors = {} }) => {
  const message = errors[id];

  if (!message) {
    return null;
  }

  return <span style={styles.label}>{message}</span>;
};

const styles = {
  label: { fontSize: 13, fontStyle: "italic", color: "red" },
};
