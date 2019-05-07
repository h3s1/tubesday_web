import { ADD_SEARCHED } from "./types";

export const addSearchedResults = (
  searchedResults: any[]
): { type: string; payload: {} } => {
  return {
    type: ADD_SEARCHED,
    payload: { searchedResults }
  };
};
