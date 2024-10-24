import { LiHTMLAttributes, ReactNode, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import QuizzRoot, { QuizzContext } from "./context";
import QuizzIntro from "./ui/intro";
import Questions from "./ui/questions";

export default function Quizz({ quizData }) {
    const { currentQuestion } = useContext(QuizzContext)
    return <QuizzRoot quizData={quizData} >
        <QuizzIntro />
        <Questions />
    </QuizzRoot>
}

export function QuizTitle({ children }: { children: ReactNode }) {
    return <h2 className="_font-semibold _tracking-tight _text-slate-900 dark:_text-slate-100 _mt-10 _pb-1 _text-3xl" style={{ userSelect: "none" }}>{children}</h2>
}

export function QuizParagraph({ children }: { children: ReactNode }) {
    return <p className="_mt-6 _leading-7 first:_mt-0" style={{ userSelect: "none" }}>{children}</p>
}

export function QuizButton({ children, ...attrs }: { children: ReactNode, onClick: () => void }) {
    return <button className="_mt-4 _flex _rounded _px-2 _py-1.5 _text-sm _transition-colors [word-break:break-word] _cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:_border _bg-white _font-semibold _text-white dark:_bg-white/10 dark:_text-white contrast-more:_border-white contrast-more:dark:_border-white" {...attrs} style={{ userSelect: "none" }}>{children}</button>
}

export function QuizNextBtn({ children }: { children: ReactNode }) {
    const ref = useRef(null)
    const { nextQuestion, userAnswers, currentQuestion } = useContext(QuizzContext)
    function disabledBtnClass() {
        if (userAnswers[currentQuestion - 1] === 0) {
            console.log("disabledBtnClass()")
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
    return <button ref={ref} style={{ userSelect: "none"}} disabled={userAnswers[currentQuestion - 1] === 0} className="_mt-4 _flex _rounded _px-2 _py-1.5 _text-sm _transition-colors [word-break:break-word] _cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:_border _bg-primary-100 _font-semibold _text-white dark:_bg-primary-100/10 dark:_text-black contrast-more:_border-white contrast-more:dark:_border-white" onClick={nextQuestion}>{children}</button>
}
export function QuizResetBtn({ children }: { children: ReactNode }) {
    const { handleAnswser, userAnswers, currentQuestion } = useContext(QuizzContext)
    return <button
        // disabled={userAnswers[currentQuestion - 1] === 0} 
        className="_mt-4 _flex _rounded _px-2 _py-1.5 _text-sm _transition-colors [word-break:break-word] _cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:_border" style={{ backgroundColor: "rgba(127, 29, 29, .5)", userSelect: "none" }} onClick={() => handleAnswser(0)}>{children}</button>
}
export function QuizResetAllBtn({ children }: { children: ReactNode }) {
    return <button
        className="_mt-4 _flex _rounded _px-2 _py-1.5 _text-sm _transition-colors [word-break:break-word] _cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:_border" style={{ backgroundColor: "rgba(127, 29, 29, .5)", userSelect: "none" }} onClick={() => window.location.reload()}>{children}</button>
}
