"use client"
import { ReactNode, useContext, useEffect, useRef } from "react";
import QuizzRoot, { QuizzContext } from "./context";
import QuizzIntro from "./ui/intro";
import Questions from "./ui/questions";

export default function Quizz({ quizData }) {
    return <QuizzRoot quizData={quizData} >
        <QuizzIntro />
        <Questions />
    </QuizzRoot>
}

export function QuizTitle({ children }: { children: ReactNode }) {
    return <h2 className="x:font-semibold x:tracking-tight x:text-slate-900 x:dark:text-slate-100 x:mt-10 x:pb-1 x:text-3xl" style={{ userSelect: "none" }}>{children}</h2>
}

export function QuizParagraph({ children }: { children: ReactNode }) {
    return <p className="x:mt-6 x:leading-7 x:first:mt-0" style={{ userSelect: "none" }}>{children}</p>
}

export function QuizButton({ children, ...attrs }: { children: ReactNode, onClick: () => void }) {
    return <button className="x:mt-4 x:flex x:rounded x:px-2 x:py-1.5 x:text-sm x:transition-colors [word-break:break-word] x:cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] x:contrast-more:border x:bg-white x:font-semibold x:text-white x:dark:bg-white/10 x:dark:text-white x:contrast-more:border-white x:contrast-more:dark:border-white" {...attrs} style={{ userSelect: "none" }}>{children}</button>
}

export function QuizNextBtn({ children }: { children: ReactNode }) {
    const ref = useRef(null)
    const { nextQuestion, userAnswers, currentQuestion } = useContext(QuizzContext)
    function disabledBtnClass() {
        if (userAnswers?.[currentQuestion - 1]?.includes(0)) {
            ref.current.style.backgroundColor = "rgba(127, 29, 29, .3)";
            ref.current.style.border = "solid 1px rgba(127, 29, 29, .8)";
            ref.current.style.color = "white"
            ref.current.style.cursor = "not-allowed"
        } else {
            ref.current.style.backgroundColor = ""
            ref.current.style.color = ""
            ref.current.style.border = ""
            ref.current.style.cursor = ""
        }
    }
    useEffect(() => {
        disabledBtnClass()
    }, [userAnswers, currentQuestion])
    return <button ref={ref} style={{ userSelect: "none" }} disabled={userAnswers?.[currentQuestion - 1]?.includes(0)} className="x:mt-4 x:flex x:rounded x:px-2 x:py-1.5 x:text-sm x:transition-colors [word-break:break-word] x:cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] x:contrast-more:border x:bg-primary-100 x:font-semibold x:text-white x:dark:bg-primary-100/10 dark:x:text-black x:contrast-more:border-white x:contrast-more:dark:border-white" onClick={nextQuestion}>{children}</button>
}
export function QuizResetBtn({ children }: { children: ReactNode }) {
    const { handleAnswser, userAnswers, currentQuestion } = useContext(QuizzContext)
    return <button
        // disabled={userAnswers[currentQuestion - 1] === 0} 
        className="x:mt-4 x:flex x:rounded x:px-2 x:py-1.5 x:text-sm x:transition-colors [word-break:break-word] x:cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] x:contrast-more:border" style={{ backgroundColor: "rgba(127, 29, 29, .5)", userSelect: "none" }} onClick={() => handleAnswser(0)}>{children}</button>
}
export function QuizResetAllBtn({ children }: { children: ReactNode }) {
    return <button
        className="x:mt-4 x:flex x:rounded x:px-2 x:py-1.5 x:text-sm x:transition-colors [word-break:break-word] x:cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] x:contrast-more:border" style={{ backgroundColor: "rgba(127, 29, 29, .5)", userSelect: "none" }} onClick={() => window.location.reload()}>{children}</button>
}
