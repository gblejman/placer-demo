import { useEffect, useState } from "react";
import client from "./client";

/**
 * Use states hook
 * @param country the selected country
 * @returns a list of states belonging to the country
 */
export const useStates = (country?: string) => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const init = async () => {
      setData(await client.getStates(country));
    };

    init();
  }, [country]);

  return data;
};

/**
 * Use cities hook
 * @param state the selected state
 * @returns a list of cities belonging to the state
 */
export const useCities = (state: string) => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const init = async () => {
      if (!state) {
        return;
      }

      setData(await client.getCities(state));
    };

    init();
  }, [state]);

  return data;
};
