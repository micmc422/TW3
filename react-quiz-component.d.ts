declare module 'react-quiz-component' {
    import { ReactElement } from 'react';

    type QuestionType = "text" | "photo"

    type AnswerSelectionType = "single" | "multiple"

    export type Question = {
        question: ReactNode
        questionType: QuestionType
        answers: number[][]
        correctAnswer: number[]
        answerSelectionType: AnswerSelectionType
        messageForCorrectAnswer?: ReactNode
        messageForIncorrectAnswer?: ReactNode
        explanation?: ReactNode
        point?: string
        segment?: string
    }

    export type QuizStructure = {
        quizTitle: ReactNode
        questions: question[]
        quizSynopsis: ReactNode
    }

    type QuizProps = {
        quiz: QuizStructure;
        disableSynopsis?: boolean;
        shuffleAnswer?: boolean;
        shuffle?: boolean;
        showDefaultResult?: boolean;
        showInstantFeedback?: boolean;
        continueTillCorrect?: boolean;
        timer?: number;
        allowPauseTimer?: boolean
    }

    const Quiz: (props: QuizProps) => ReactElement;

    export default Quiz;
}