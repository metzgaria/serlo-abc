export const abc = [
  {
    title:"A",
    exercises: [
      {template:"Text", text: "A 1"},
      {template: "Text", text: "A 2"}
    ]
  },
  {
    title: "B",
    exercises: [
      {template: "Text", text: "B 1"},
      {template: "Text", text: "B 2"}
    ]
  }
]

export const selectStartSlide = function(lesson) {
  return abc[lesson].exercises[0];
}
