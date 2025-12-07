import { ReactNode } from "react";

/**
 * Niveau de difficulté d'une question de quiz
 */
export type QuestionDifficulty = "facile" | "intermédiaire" | "expert";

/**
 * Structure d'un extrait de code dans une question
 */
export interface CodeSnippet {
    code: string;
    language: string;
    title?: string;
}

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
    /** Extrait de code optionnel à afficher dans la question */
    codeSnippet?: CodeSnippet;
}

/**
 * Structure complète des données d'un quiz
 */
export interface QuizData {
    quizTitle: string;
    quizSynopsis: ReactNode;
    questions: QuizQuestion[];
}
