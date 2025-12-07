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
    /** Messages d'aide personnalisés pour chaque mauvaise réponse (indexés par numéro de réponse - 1) */
    helpMessages?: { [answerIndex: number]: string };
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
