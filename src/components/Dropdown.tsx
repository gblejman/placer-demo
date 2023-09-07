import { FC } from "react";

export type DropdownProps = {
  options: string[];
};

export const Dropdown: FC<DropdownProps> = ({ options = [], ...rest }) => {
  return (
    <select {...rest}>
      <option value={undefined}>-- Select --</option>
      {options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
