import { useContext, useEffect, useRef, useState } from "react"
import { QuizzContext } from "../context"
import { QuizNextBtn, QuizResetBtn, QuizTitle } from ".."
import { Trash2Icon } from "lucide-react"

export default function Questions() {
    const ref = useRef(null)
    const { currentQuestion, questions, handleAnswser, userAnswers, score, totalScore } = useContext(QuizzContext);
    const { question, answers } = questions[currentQuestion - 1] || {}
    useEffect(() => {
        updateSelectedClass()
    }, [userAnswers[currentQuestion - 1], currentQuestion])
    // Fonction pour mettre à jour la classe CSS
    function updateSelectedClass() {
        ref?.current?.querySelectorAll('li').forEach((item, index) => {
            // if (userAnswers[currentQuestion - 1] === 0) return
            if (userAnswers[currentQuestion - 1].includes(index + 1)) {
                if (questions[currentQuestion - 1]?.correctAnswer.includes(index + 1)) {
                    item.style.backgroundColor = "rgba(0, 128, 0, .3)"
                    item.style.border = "solid 1px rgba(0, 128, 0, .8)"
                } else {
                    item.style.backgroundColor = "rgba(127, 29, 29, .3)";
                    item.style.border = "solid 1px rgba(127, 29, 29, .8)";
                }
                item.style.color = "white"
            } else {
                item.style.backgroundColor = ""
                item.style.color = ""
                item.style.border = ""
            }
        })
    }

    if (currentQuestion === 0) return <></>
    return (
        <>
            <QuizTitle>{currentQuestion}/{questions.length} - {question}</QuizTitle>
            <ul ref={ref} key={currentQuestion}>
                {answers.map((answer, i) => (
                    <li
                        key={i}
                        className={`_flex _rounded _px-2 _py-1.5 _text-sm _transition-colors [word-break:break-word] _cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:_border _text-gray-500 hover:_bg-gray-100 hover:_text-gray-900 dark:_text-neutral-400 dark:hover:_bg-primary-100/5 dark:hover:_text-gray-50 contrast-more:_text-gray-900 contrast-more:dark:_text-gray-50 contrast-more:node-border-transparent contrast-more:hover:_border-gray-900 contrast-more:dark:hover:_border-gray-50`}
                        onClick={() => handleAnswser(i + 1)}
                    >
                        {answer}
                    </li>
                ))}
            </ul>
            <div className="_flex" style={{ gap: "1rem" }}>
                <QuizNextBtn>Continuer</QuizNextBtn>
                <QuizResetBtn><Trash2Icon /></QuizResetBtn>
                <div className="_flex _justify-end _mt-2 _text-2xl _font-bold _tracking-tight _text-slate-900 dark:_text-slate-100" style={{ alignSelf: "center" }}>
                    {score} / {totalScore}
                </div>
            </div>
        </>
    )
}