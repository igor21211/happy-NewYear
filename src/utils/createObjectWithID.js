import { v4 as uuidv4 } from "uuid";

const createWishWithID = (wish) => {
  return {
    ...wish,
    id: uuidv4(),
  };
};

export default createWishWithID;
