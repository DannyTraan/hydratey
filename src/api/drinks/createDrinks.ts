import { BASE_URL, TOKEN } from "../../constants";

export const createDrinks = async (
  drinkerId: string,
  amount: number
): Promise<void> => {
  const url = `${BASE_URL}/drinks`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${TOKEN}`,
    },
    body: JSON.stringify({ drinkerId, amount }),
  };

  await fetch(url, options);
};
