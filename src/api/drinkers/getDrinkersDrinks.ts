import { BASE_URL, TOKEN } from "../../constants";
import { Drink } from "../../types";

export const getDrinkersDrinks = async (
  drinkerId: string
): Promise<Drink[] | undefined> => {
  const url = `${BASE_URL}/drinkers/${drinkerId}/drinks`;
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
