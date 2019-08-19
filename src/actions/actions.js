import { SET_CATEGORIES } from "../constants/constants";
import { PICK_CATEGORY } from "../constants/constants";

export function setCategories(categories) {
  return { type: SET_CATEGORIES, categories };
}

export function pickCategory(category) {
  return { type: PICK_CATEGORY, category };
}
