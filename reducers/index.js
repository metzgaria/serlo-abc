import { START, NEXT, TUTORIAL, MENU } from '../actions'
// Selectors
export const selectView = (state) => state.view

const defaultState = {
  view: {template: "Menu"}
}
// Reducers
export default (state = defaultState, action) => {
  switch (action.type) {
    case TUTORIAL:
      return Object.assign({}, state, {
        view: {template: "TextTutorial", explanation:"blablabla"}
      })
    case START:
    case NEXT:
    case MENU:
      return Object.assign({}, state, {
        view: action.view,
      })
    default:
      return state
  }
}
