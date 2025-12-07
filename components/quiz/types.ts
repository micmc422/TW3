import { ReactNode } from "react";

/**
 * Niveau de difficulté d'une question de quiz
 */
export type QuestionDifficulty = "facile" | "intermédiaire" | "expert";

/**
 * Structure d'une question de quiz
 */
export interface QuizQuestion {
    question: string;
    questionType: "text" | "photo";
    answerSelectionType: "single" | "multiple";
    answers: string[];
    correctAnswer: number[];
    messageForCorrectAnswer?: string;
    messageForIncorrectAnswer?: string;
    explanation?: string;
    point: number;
    difficulty: QuestionDifficulty;
}

/**
 * Structure complète des données d'un quiz
 */
export interface QuizData {
    quizTitle: string;
    quizSynopsis: ReactNode;
    questions: QuizQuestion[];
}
