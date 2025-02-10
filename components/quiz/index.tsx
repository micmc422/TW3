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
    return <h2 className="tracking-tight text-slate-900 dark:text-slate-100 pb-1 text-2xl mb-4 font-black" style={{ userSelect: "none" }}>{children}</h2>
}

export function QuizParagraph({ children }: { children: ReactNode }) {
    return <p className="mt-6 leading-5 first:mt-0" style={{ userSelect: "none" }}>{children}</p>
}

export function QuizButton({ children, ...attrs }: { children: ReactNode, onClick: () => void }) {
    return <button className="mt-4 flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border bg-white font-semibold text-white dark:bg-white/10 dark:text-white contrast-more:border-white contrast-more:dark:border-white" {...attrs} style={{ userSelect: "none" }}>{children}</button>
}

export function QuizNextBtn({ children }: { children: ReactNode }) {
    const ref = useRef(null)
    const { nextQuestion, userAnswers, currentQuestion } = useContext(QuizzContext)

    return <button ref={ref} style={{ userSelect: "none" }} disabled={userAnswers?.[currentQuestion - 1]?.includes(0)} className="mt-4 flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border bg-black font-semibold text-white dark:bg-white dark:text-black contrast-more:border-white contrast-more:dark:border-white disabled:opacity-25 disabled:grayscale-100" onClick={nextQuestion}>{children}</button>
}
export function QuizResetBtn({ children }: { children: ReactNode }) {
    const { handleAnswser, userAnswers, currentQuestion } = useContext(QuizzContext)
    return <button
        disabled={userAnswers?.[currentQuestion - 1][0] === 0} 
        className="mt-4 flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border disabled:grayscale-100" style={{ backgroundColor: "rgba(127, 29, 29, .5)", userSelect: "none" }} onClick={() => handleAnswser(0)}>{children}</button>
}
export function QuizResetAllBtn({ children }: { children: ReactNode }) {
    return <button
        className="mt-4 flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border" style={{ backgroundColor: "rgba(127, 29, 29, .5)", userSelect: "none" }} onClick={() => window.location.reload()}>{children}</button>
}
