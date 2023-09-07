import { FC } from "react";
import { useStates } from "../api/hooks";
import { Dropdown } from "./Dropdown";

export type StateDropdownProps = {
  country?: string;
};

export const StateDropdown: FC<StateDropdownProps> = ({ country, ...rest }) => {
  const states = useStates(country);

  return <Dropdown options={states} {...rest} />;
};
