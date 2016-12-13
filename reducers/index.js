import { START, NEXT, TUTORIAL } from '../actions'
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
      return Object.assign({}, state, {
        view: action.view,
      })
    default:
      return state
  }
}
