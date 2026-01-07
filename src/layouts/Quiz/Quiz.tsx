// import Button from "../Button/Button"
import { userData } from "../../data/userdata.tsx"
import { questions } from "../../data/questions.tsx"
import { Link } from "react-router-dom"
import { useState } from "react"
import "./Quiz.css"

function Quiz() {
  const [currentQustion, setCurrentQuestion] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(-1)
  const [clearClasses, setClearClasses] = useState(false)
  const [userAnswers, setUserAnswers] = useState<number[]>([])

  function checkAnswer(answerNumber: number) {
    setSelectedAnswer(answerNumber)
    setUserAnswers((prev) => [...prev, answerNumber])
    setClearClasses(false)
    if (
      answerNumber === questions[currentQustion].rightAnswer &&
      currentScore < currentQustion + 1
    ) {
      setCurrentScore((prev) => prev + 1)
    }
  }

  return (
    <div className="quiz tablet:pt-35 pt-30">
      <div className="quiz__container container">
        <div className="quiz__content">
          <div className="quiz__progrees-block flex flex-wrap justify-between gap-y-2">
            <p className="quiz__question-number font-semibold tablet:text-[16px] text-[14px]">
              {`Вопрос ${currentQustion + 1} из ${questions.length}`}
            </p>
            <p className="quiz__score font-semibold tablet:text-[16px] text-[14px]">
              Счёт: {currentScore}
            </p>
            <div className="quiz__progress-bar w-full tablet:h-3 h-2 rounded">
              <div
                className="quiz__progress-bar-fill h-full rounded"
                style={{
                  width: `${((currentQustion + 1) / questions.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="quiz__question-block tablet:mt-15 mt-7 py-7.5 tablet:px-10 px-5 rounded-[15px] duration-300">
            <h1 className="quiz__question tablet:text-[30px] mobile-lg:text-[24px] text-[20px] tablet:text-left text-center font-semibold mb-7">
              {`${questions[currentQustion].question}`}
            </h1>
            <ul className="quiz__answers flex flex-col gap-y-5">
              {questions[currentQustion].answers.map((_, index) => {
                let isRightAnswer = ""
                if (selectedAnswer === questions[currentQustion].rightAnswer)
                  isRightAnswer = "right"
                else isRightAnswer = "wrong"
                return (
                  <li
                    key={index}
                    className={`quiz__answer border-2 rounded-[10px] tablet:px-3.5 px-6 py-4 font-semibold hover:cursor-pointer duration-300 ${
                      index === selectedAnswer - 1 && !clearClasses
                        ? isRightAnswer
                        : "disable"
                    }`}
                    onClick={() => {
                      const isAnswered =
                        userAnswers[currentQustion] !== undefined

                      if (!isAnswered) {
                        checkAnswer(index + 1)
                      }
                    }}
                  >
                    <p className="text-center tablet:text-left mobile-lg:text-[16px] text-[12px]">
                      {`${questions[currentQustion].answers[index]}`}
                    </p>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="quiz__buttons-block flex mobile-lg:flex-row flex-col-reverse gap-y-5 items-center justify-between mt-15">
            <button
              className="quiz__next-question-btn border-2 rounded-[10px] hover:cursor-pointer duration-300 flex items-center gap-x-2.5  tablet:py-3 px-4 h-10 tablet:h-auto"
              // style={{opacity: "0.5"}}
              style={currentQustion === 0 ? { opacity: "0.5" } : undefined}
              type="button"
              onClick={() => {
                if (currentQustion > 0) {
                  const prevQuestion = currentQustion - 1
                  setCurrentQuestion(prevQuestion)
                  setSelectedAnswer(userAnswers[prevQuestion] || -1)
                }

                setClearClasses(false)
              }}
            >
              <i className="fas fa-arrow-left tablet:text-[16px] text-[14px]"></i>
              <p className="tablet:text-[16px] text-[14px]">Назад</p>
            </button>
            {currentQustion + 1 === questions.length ? (
              <Link
                to="/results"
                className="quiz__previous-question-btn tablet:px-5 px-4 rounded-[15px] duration-300 hover:cursor-pointer font-semibold tablet:h-[45px] h-10 flex items-center"
                onClick={() => {
                  userData.score = currentScore
                  console.log(userData.score)
                }}
              >
                <p className="tablet:text-[16px] text-[14px]">
                  Следующий вопрос
                </p>
              </Link>
            ) : (
              <button
                className="quiz__previous-question-btn tablet:px-5 px-4 rounded-[15px] duration-300 hover:cursor-pointer font-semibold tablet:h-[45px] h-10"
                type="button"
                onClick={() => {
                  if (!userAnswers[currentQustion]) return
                  const next = currentQustion + 1
                  setCurrentQuestion(next)
                  setSelectedAnswer(userAnswers[next] || -1)
                }}
              >
                <p className="tablet:text-[16px] text-[14px]">
                  Следующий вопрос
                </p>
              </button>
            )}
          </div>
        </div>
      </div>
      <hr className="quiz__devider tablet:mt-25 mt-20" />
    </div>
  )
}

export default Quiz
