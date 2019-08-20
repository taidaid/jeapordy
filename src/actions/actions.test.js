import * as actions from "./actions";
import * as constants from "../constants/constants";
import { categories } from "../data/fixtures";

describe("actions", () => {
  it("creates an action to set categories", () => {
    const expectedAction = {
      type: constants.SET_CATEGORIES,
      categories,
    };
    expect(actions.setCategories(categories)).toEqual(expectedAction);
  });

  it("creates an action to pick a category", () => {
    const category = categories[0];
    const expectedAction = {
      type: constants.PICK_CATEGORY,
      category,
    };
    expect(actions.pickCategory(category)).toEqual(expectedAction);
  });
});
