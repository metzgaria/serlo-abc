import { selectStartSlide } from '../courses/CourseAbc'

// Actions
export const NEXT = 'NEXT'
export const TUTORIAL = 'TUTORIAL'
export const BACK = "BACK"
export const START = "START"

// Action creators
export const next = (current) => ({
  type: NEXT,
  view: current.next
})

export const tutorial = () => ({
  type: TUTORIAL
})

export const back = () => ({
  type: BACK
})

export const menu = () => ({
  type: MENU,
})

export const start = (lesson) => ({
  type: START,
  view: selectStartSlide(lesson)
})
