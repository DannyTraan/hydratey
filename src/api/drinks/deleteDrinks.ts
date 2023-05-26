import { BASE_URL, TOKEN } from "../../constants";

export const deleteDrink = async (drinkId: string): Promise<void> => {
  const url = `${BASE_URL}/drinks/${drinkId}`;
  const options = {
    method: "DELETE",
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  };

  await fetch(url, options);
};
