import { useContext, useEffect, useMemo, useRef, useState } from "react"
import { QuizzContext } from "../context"
import { QuizNextBtn, QuizResetBtn, QuizTitle } from ".."
import { Trash2Icon } from "lucide-react"
import { cn } from "@/lib/utils"
import { animate, AnimatePresence, motion } from "motion/react"
import DifficultyIndicator from "./difficulty-indicator"
import HelpMessage from "./help-message"
import CodeSnippet from "./code-snippet"



const itemVariant = {
    initial: {
        opacity: 0,
        x: 100
    },
    animate: {
        opacity: 1,
        x: 0
    },
    exit: {
        opacity: 0,
        x: -100
    }
}

export default function Questions() {
    const ref = useRef(null)
    const { currentQuestion, questions, handleAnswser, userAnswers, score, totalScore } = useContext(QuizzContext);
    const currentQuestionData = questions[currentQuestion - 1]
    const { question = "", answers = [], difficulty = "facile", correctAnswer = [], helpMessages, messageForCorrectAnswer, messageForIncorrectAnswer, codeSnippet } = currentQuestionData || {}
    
    // Déterminer quels messages afficher en fonction des réponses de l'utilisateur
    const displayMessages = useMemo(() => {
        const userAnswer = userAnswers?.[currentQuestion - 1]
        if (!userAnswer || userAnswer[0] === 0 || !currentQuestionData) return []

        // Vérifier s'il y a des réponses correctes
        const hasCorrectAnswer = userAnswer.some(ans => correctAnswer.includes(ans))
        // Vérifier s'il y a des réponses incorrectes
        const incorrectAnswers = userAnswer.filter(ans => !correctAnswer.includes(ans))

        // Si toutes les réponses sont correctes
        if (incorrectAnswers.length === 0 && hasCorrectAnswer) {
            if (messageForCorrectAnswer) {
                return [{ message: messageForCorrectAnswer, type: "correct" as const, answerIndex: undefined }]
            }
            return []
        }

        // Si il y a au moins une réponse incorrecte
        if (incorrectAnswers.length > 0) {
            const messages: Array<{ message: string; type: "incorrect"; answerIndex?: number }> = []
            
            // Récupérer tous les messages d'aide personnalisés pour chaque mauvaise réponse
            incorrectAnswers.forEach(incorrectAnswer => {
                if (helpMessages && helpMessages[incorrectAnswer - 1]) {
                    messages.push({ 
                        message: helpMessages[incorrectAnswer - 1], 
                        type: "incorrect" as const,
                        answerIndex: incorrectAnswer
                    })
                }
            })
            
            // Si aucun message d'aide personnalisé n'a été trouvé, utiliser le message générique
            if (messages.length === 0 && messageForIncorrectAnswer) {
                messages.push({ 
                    message: messageForIncorrectAnswer, 
                    type: "incorrect" as const 
                })
            }
            
            return messages
        }

        return []
    }, [userAnswers, currentQuestion, correctAnswer, helpMessages, messageForCorrectAnswer, messageForIncorrectAnswer, currentQuestionData])

    useEffect(() => {
        updateSelectedClass()
    }, [userAnswers?.[currentQuestion - 1], currentQuestion])
    // Fonction pour mettre à jour la classe CSS
    function updateSelectedClass() {
        //    console.log(userAnswers?.[currentQuestion - 1])
        ref?.current?.querySelectorAll('li').forEach((item, index) => {
            //  if (userAnswers?.[currentQuestion - 1][0] === 0) return
            if (userAnswers?.[currentQuestion - 1].includes(index + 1)) {
                if (questions[currentQuestion - 1]?.correctAnswer.includes(Number(index) + 1)) {
                    item.style.backgroundColor = "rgba(0, 128, 0, .3)"
                    item.style.outlineColor = "rgba(0, 128, 0, 1)";
                } else {
                    item.style.backgroundColor = "rgba(127, 29, 29, .3)";
                    item.style.outlineColor = "rgba(127, 29, 29, 1)";
                }
                item.style.color = "white"
                item.style["outline-width"] = "2px";
                item.style.outlineStyle = "solid";

            } else {
                item.style.backgroundColor = "unset";
                item.style.color = ""
                item.style["outline-width"] = "0";
                item.style.outlineStyle = "none";
            }
        })
    }

    if (currentQuestion === 0) return <></>
    return (
        <>
            <DifficultyIndicator difficulty={difficulty} />
            <QuizTitle>{currentQuestion}/{questions.length} - {question}</QuizTitle>
            {codeSnippet && <CodeSnippet snippet={codeSnippet} />}
            <motion.ul
                initial={"initial"}
                animate="animate"
                exit={"exit"}
                transition={{
                    staggerChildren: 0.1,
                    delay: 0.6
                }}
                ref={ref}
                key={currentQuestion}
                className="grid gap-2">
                <AnimatePresence mode="popLayout">
                    {answers.map((answer, i) => (
                        <motion.li
                            variants={itemVariant}
                            key={i + currentQuestion}
                            className={`flex rounded px-2 py-0.5 text-sm transition-colors [word-break:break-word] cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:border text-gray-500 hover:bg-gray-100/10 hover:text-black dark:text-neutral-400 dark:hover:bg-white/5 dark:hover:text-gray-500 contrast-more:text-gray-900 contrast-more:dark:text-gray-50 contrast-more:node-border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50`}
                            onClick={() => handleAnswser(i + 1)}
                        >
                            {answer}
                        </motion.li>
                    ))}
                </AnimatePresence>
            </motion.ul>
            <AnimatePresence>
                {displayMessages.map((displayMessage, index) => (
                    <HelpMessage 
                        key={`help-${currentQuestion}-${displayMessage.answerIndex ?? `generic-${index}`}`}
                        message={displayMessage.message} 
                        type={displayMessage.type} 
                    />
                ))}
            </AnimatePresence>
            <ProgressBar />
            <div className="flex" style={{ gap: "1rem" }}>
                <QuizNextBtn>Continuer</QuizNextBtn>
                <QuizResetBtn><Trash2Icon /></QuizResetBtn>
                <div className="flex justify-end ml-auto mt-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-white" style={{ alignSelf: "center" }}>
                    {score} / {totalScore}
                </div>
            </div>
        </>
    )
}

function ProgressBar() {
    const { currentQuestion, questions, userAnswers } = useContext(QuizzContext);
    const progressItems = useMemo(() => {
        let array = new Array(questions.length).fill("untouch")
        array = array.map((item, i) => {
            const correct = (questions[i].correctAnswer)
            const answer = (userAnswers[i])

            if (correct.sort().join("") == answer.sort().join("")) {
                return "correct";
            }
            let aUneCorrespondance = correct.some(element => answer.includes(element));

            if (aUneCorrespondance) return "partial";
            if (answer[0] != 0) return "error";
            return item;
        })
        //   console.log(array)

        return array
    }, [userAnswers])

    //  console.log(progressItems)
    return <div className="w-full flex gap-1 mt-8 items-center">
        {progressItems.map((el, i) => <div key={i} className={cn("h-2 grow rounded bg-gray-500 transition-colors duration-700", el === "correct" && "bg-green-500", el === "partial" && "bg-orange-500", el === "error" && "bg-red-500", i === currentQuestion - 1 && "bg-white outline-2")}></div>)}
    </div>
}