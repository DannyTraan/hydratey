import { BASE_URL, TOKEN } from "../../constants";
import { Drink } from "../../types";

export const getDrinks = async (): Promise<Drink[] | undefined> => {
  const url = `${BASE_URL}/drinks`;
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
