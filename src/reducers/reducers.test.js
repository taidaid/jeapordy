import rootReducer from "./reducers";
import * as constants from "../constants/constants";
import { categories, category } from "../data/fixtures";

describe("root reducer", () => {
  it("returns the inital state", () => {
    expect(rootReducer({}, {})).toEqual({ categories: [], category: {} });
  });

  it("sets categories", () => {
    expect(
      rootReducer({}, { type: constants.SET_CATEGORIES, categories })
    ).toEqual({ categories, category: {} });
  });

  it("picks a category", () => {
    expect(
      rootReducer({}, { type: constants.PICK_CATEGORY, category })
    ).toEqual({ categories: [], category });
  });
});
