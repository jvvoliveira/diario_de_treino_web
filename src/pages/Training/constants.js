export const exercisesTypes = [
  {
    id: "peito",
    title: "peito"
  },
  {
    id: "costas",
    title: "costas"
  },
  {
    id: "ombro",
    title: "ombro"
  },
  {
    id: "bíceps",
    title: "bíceps"
  },
  {
    id: "panturrilha",
    title: "panturrilha"
  },
  {
    id: "tríceps",
    title: "tríceps"
  },
  {
    id: "glúteos",
    title: "glúteos"
  },
  {
    id: "perna",
    title: "perna"
  },
  {
    id: "abdômen",
    title: "abdômen"
  }
]

export const emptyExercise = () => ({
  id: '',
  type: '',
  series: '',
  repetitions: '',
  rest: '',
  options: null
})

export const emptySheet = () => ({
    name: "",
    exercises: [
      emptyExercise()
    ]
})