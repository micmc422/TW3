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
    const questions = quizData.questions || []
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
   // const [questions, setQuestions] = useState(quizData.questions || [])
    const [userAnswers, setUserAnswers] = useState<number[][]>(new Array(quizData.questions.length).fill([0]))
    const score = useMemo(() => {
        let calculScore = 0;
        quizData.questions.forEach((question, i) => {
            userAnswers?.[i]?.map(ans => {
                if (ans !== 0) {
                    question.correctAnswer.includes(ans) ? (calculScore += question.point / question.correctAnswer.length) : (calculScore -= question.point)
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
            let currentQ = prev?.[currentQuestion - 1];

            if (num === 0) {
                // Reset : assigne [0]
                currentQ = [0];
            } else {
                // Ajoute ou retire num du tableau
                if (currentQ?.includes(num)) {
                    // Retire num si il est déjà présent
                    currentQ = currentQ.filter(n => n !== num);
                    if (currentQ.length === 0) {
                        currentQ = [0];
                    }
                } else {
                    // Ajoute num si il n'est pas présent
                    // Ajoute num si il n'est pas présent
                    if (currentQ?.[0] === 0) {
                        currentQ = [num];
                    } else {
                        currentQ = [...currentQ, num];
                    }
                }

                // Remplace la valeur précédente par la nouvelle
                return [...prev.slice(0, currentQuestion - 1), currentQ, ...prev.slice(currentQuestion)];
            }
        });
    } return (
        <QuizzContext.Provider value={{ currentQuestion, nextQuestion, handleAnswser, questions, quizTitle, quizSynopsis, userAnswers, score, totalScore }}>{children}</QuizzContext.Provider>
    )
}
