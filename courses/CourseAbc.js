export const abc = [
  {
    title:"A",
    exercises: [
      {template:"Text", id:"A1", text: "Exercise A 1"},
      {template: "Text", id:"A2", text: "Exercise A 2"}
    ]
  },
  {
    title: "B",
    exercises: [
      {template: "Text", id: "B1", text: "Exercise B 1"},
      {template: "Text", id: "B2", text: "Excercise B 2"}
    ]
  },
  {
    title: "C",
    exercises: [
      {template: "Text", id: "C1", text: "Exercise C 1"},
      {template: "Text", id: "C2", text: "Excercise C 2"}
    ]
  }
]

const idToEx = new Map();
abc.forEach( function (lesson) {
  last_id = undefined;
  lesson.exercises.forEach( function (exercise) {
    if(last_id != undefined) {
      idToEx.set(last_id, exercise);
    }
    last_id = exercise.id;
  });
});

export const selectStartSlide = function(lesson) {
  return abc[lesson].exercises[0];
}

export const selectNextSlide = function(id) {
  return idToEx.get(id);
}
