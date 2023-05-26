import { BASE_URL, TOKEN } from "../../constants";
import { Drinker } from "../../types";

export const getDrinkers = async (): Promise<Drinker | undefined> => {
  const url = `${BASE_URL}/drinkers`;
  const options = {
    method: "GET",
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  };

  const response = await fetch(url, options);
  if (response.status.toString().startsWith("2")) {
    return response.json();
  }
};
