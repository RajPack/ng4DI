import { Tutorial } from "../models/tutorial";
import * as TutorialActions from "../actions/turorials.actions";

const initialState: Tutorial = {
  name: "Some Name",
  url: "www.some.com"
};

export function TutorialReducer(
  state: Tutorial[] = [initialState],
  action: TutorialActions.Actions
) {
  console.log("in reducer");
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];

    case TutorialActions.REMOVE_TUTORIAL:
      return [...state].filter(function(item, index) {
        return item.name === action.payload.name &&
          item.url === action.payload.url
          ? false
          : true;
      });
    default:
      return state;
  }
}
