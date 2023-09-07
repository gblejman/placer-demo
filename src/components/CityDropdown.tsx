import { FC } from "react";
import { useCities } from "../api/hooks";
import { Dropdown } from "./Dropdown";

export type CityDropdownProps = {
  state: string;
};

export const CityDropdown: FC<CityDropdownProps> = ({ state, ...rest }) => {
  const cities = useCities(state);

  return <Dropdown options={cities} {...rest} />;
};
