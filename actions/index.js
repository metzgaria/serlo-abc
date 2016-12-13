import { selectStartSlide, selectNextSlide } from '../courses/CourseAbc'

// Actions
export const NEXT = 'NEXT'
export const TUTORIAL = 'TUTORIAL'
export const BACK = "BACK"
export const START = "START"
export const MENU = "MENU"

// Action creators
export const next = function (id) {
  nextSlide = selectNextSlide(id);
  if(nextSlide != undefined) {
    return {
      type: NEXT,
      view: selectNextSlide(id)
    };
  } else  return menu();
}

export const tutorial = () => ({
  type: TUTORIAL
})

export const back = () => ({
  type: BACK
})

export const menu = function() {
  console.log("menu function")
  return {
    type: MENU,
    view: {template: "Menu"}
  }
}

export const start = (lesson) => ({
  type: START,
  view: selectStartSlide(lesson)
})
