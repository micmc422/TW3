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
    }, [userAnswers?.[currentQuestion - 1], currentQuestion])
    // Fonction pour mettre à jour la classe CSS
    function updateSelectedClass() {
        console.log(userAnswers?.[currentQuestion - 1])
        ref?.current?.querySelectorAll('li').forEach((item, index) => {
            if (userAnswers?.[currentQuestion - 1][0] === 0) return
            if (userAnswers?.[currentQuestion - 1].includes(index + 1)) {
                if (questions[currentQuestion - 1]?.correctAnswer.includes(Number(index) + 1)) {
                    item.style.backgroundColor = "rgba(0, 128, 0, .3)"
                    item.style.border = "solid 1px rgba(0, 128, 0, .8)"
                } else {
                    item.style.backgroundColor = "rgba(127, 29, 29, .3)";
                    item.style.border = "solid 1px rgba(127, 29, 29, .8)";
                }
                item.style.color = "white"

            } else {
                item.style.backgroundColor = "unset";
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
                        className={`x:flex x:rounded x:px-2 x:py-1.5 x:text-sm x:transition-colors [word-break:break-word] x:cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] x:contrast-more:border x:text-gray-500 x:hover:bg-gray-100 x:hover:text-gray-900 x:dark:text-neutral-400 x:dark:hover:bg-primary-100/5 x:dark:hover:text-gray-50 x:contrast-more:text-gray-900 x:contrast-more:dark:text-gray-50 x:contrast-more:node-border-transparent x:contrast-more:hover:border-gray-900 x:contrast-more:dark:hover:border-gray-50`}
                        onClick={() => handleAnswser(i + 1)}
                    >
                        {answer}
                    </li>
                ))}
            </ul>
            <div className="x:flex" style={{ gap: "1rem" }}>
                <QuizNextBtn>Continuer</QuizNextBtn>
                <QuizResetBtn><Trash2Icon /></QuizResetBtn>
                <div className="x:flex x:justify-end x:mt-2 x:text-2xl x:font-bold x:tracking-tight x:text-slate-900 x:dark:text-slate-100" style={{ alignSelf: "center" }}>
                    {score} / {totalScore}
                </div>
            </div>
        </>
    )
}