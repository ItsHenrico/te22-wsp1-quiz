import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
  res.render("quiz.njk", {
    message: "Quiz"
    })
})

const questions = [
  {
    id: "q1",
    text: "Hur många hjul har en bil?",
    answers: [3, 12, 5, 4],
    correctAnswer: 4,
  },
  {
    id: "q2",
    text: "Hur många hjul har en buss?",
    answers: [3, 12, 5, 4],
    correctAnswer: 4,
  },
]

router.get("/questions", (req, res) => {
  res.render("questions.njk", {
    message: "Frågor",
    questions
  })
})

router.post("/end", (req, res) => {
  const answers = req.body
  console.log(answers)  
  questions.forEach(question => {
    const answer = answers[question.id]
    if (answer == question.correctAnswer) {
      console.log("Du har svarat rätt på fråga : ", question.id)
    }
  })
  res.json(answers)
})

export default router