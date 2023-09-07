import { config } from "../config";

type Token = {
  auth_token: string;
};

type States = {
  state_name: string;
}[];

type Cities = {
  city_name: string;
}[];

/**
 * Builds a simple api client
 * @param baseUrl the base url
 * @param authorizeUrl the authorization url
 * @param email the api email
 * @param token the api token
 */
export const buildClient = ({
  baseUrl,
  authorizeUrl,
  email,
  token,
}: {
  baseUrl: string;
  authorizeUrl: string;
  email: string;
  token: string;
}) => {
  // let's just use in-memory store - localStorage/sessionStorage/etc are all subject to XSS
  let accessToken: string | undefined;

  const request = async (url = "", opts = {}) => {
    try {
      // add access token if available
      const accessToken = await getToken();
      if (accessToken) {
        opts = { ...opts, headers: { Authorization: `Bearer ${accessToken}` } };
      }

      const res = await fetch(baseUrl + url, opts);
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      return await res.json();
    } catch (error) {
      console.log("Could not fetch", error);
    }
  };

  const getToken = async () => {
    // early return if already set
    if (accessToken) {
      return accessToken;
    }

    try {
      const res = await fetch(baseUrl + authorizeUrl, {
        headers: {
          "user-email": email,
          "api-token": token,
        },
      });
      const data: Token = await res.json();
      accessToken = data.auth_token;
      return accessToken;
    } catch (error) {
      console.log("Could not authorize", error);
    }
  };

  const getStates = async (country = "United States") => {
    const data: States = await request(`/states/${country}`);
    return data.map((state) => state.state_name);
  };

  const getCities = async (state = "") => {
    const data: Cities = await request(`/cities/${state}`);
    return data.map((city) => city.city_name);
  };

  return {
    request,
    getStates,
    getCities,
  };
};

const client = buildClient(config.api);

export default client;
