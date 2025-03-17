"use client"

import { createContext, ReactNode, useMemo, useState } from "react";
import { Question, QuizStructure } from "react-quiz-component";

type QuizzContextProps = {
    currentQuestion: number;
    score: number;
    totalScore: number;
    userAnswers?: number[][];
    quizTitle?: ReactNode;
    quizSynopsis?: ReactNode;
    questions?: Question[];
    nextQuestion?: () => void;
    handleAnswser?: (number) => void;
}
export const QuizzContext = createContext<QuizzContextProps>({ currentQuestion: 0, score: 0, totalScore: 0 })

export default function QuizzRoot({ children, quizData }: { children: ReactNode, quizData: QuizStructure }) {
    // currentQuestion est 0 pour permettre de savoir quand le quizz est commencé (0 == false)
    const questions = quizData.questions || [[]]
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    // const [questions, setQuestions] = useState(quizData.questions || [])
    const [userAnswers, setUserAnswers] = useState<number[][]>(new Array(questions?.length || 0).fill([0]))
    const score = useMemo(() => {
        let calculScore = 0;
        quizData.questions.forEach((question, i) => {

            userAnswers?.[i]?.map(ans => {
                const point = Number(question.point || 10)
               if (ans !== 0) {
                   question.correctAnswer.includes(ans) ? (calculScore += point / question.correctAnswer.length) : (calculScore -= point)
                }
            });
        })
        return +calculScore.toFixed(0)
    }, [userAnswers])
    const totalScore = useMemo(() => {
        let calculTotal = 0;
        quizData.questions.forEach((question, i) => {
            calculTotal += Number(question.point)
        })
        return calculTotal
    }, [userAnswers])
    const { quizTitle, quizSynopsis } = quizData
    function nextQuestion() {
        setCurrentQuestion(prev => ++prev % (quizData.questions.length + 1))
    }

    async function handleAnswser(num: number) {
        setUserAnswers((prev: number[][]) => {
            let answsers = [...prev];
            let currentQ = answsers?.[currentQuestion - 1] || [0];

            if (num === 0) {
                // Reset : assigne [0]
                currentQ = [...[0]];
            } else {
                // Ajoute ou retire num du tableau
                if (currentQ?.includes(num)) {
                    // Retire num si il est déjà présent
                    currentQ = currentQ.filter(n => n !== num);
                    if (currentQ.length === 0) {
                        currentQ = [0];
                    }
                    answsers[currentQuestion - 1] = currentQ
                } else {
                    // Ajoute num si il n'est pas présent
                    if (currentQ?.[0] === 0) {
                        currentQ = [num];
                    } else {
                        currentQ = [...currentQ, num];
                    }
                    answsers[currentQuestion - 1] = currentQ
                }
            }
            // Remplace la valeur précédente par la nouvelle
            return [...answsers?.slice(0, currentQuestion - 1), currentQ, ...answsers?.slice(currentQuestion)];
        });
    }

    return (
        <QuizzContext.Provider value={{ currentQuestion, nextQuestion, handleAnswser, questions, quizTitle, quizSynopsis, userAnswers, score, totalScore }}>
            <div className="outline-2 rounded-xl p-4 mt-8 w-fit max-w-lg mx-auto bg-slate-500/10 shadow-lg">
                {children}
            </div>
        </QuizzContext.Provider>
    )
}
