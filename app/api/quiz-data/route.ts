import { NextResponse } from 'next/server';
import { QuizData } from '@/components/quiz/types';

// Import all quiz data files (excluding UX-UI)
import { quiz as dockerQuiz } from '@/app/docker/quizz/quizzData';
import { quiz as reactQuiz } from '@/app/react/quizz/quizzData';
import { quiz as authQuiz } from '@/app/authentification/quizz/quizzData';
import { quiz as nextjsQuiz } from '@/app/next-js/quizz/quizzData';
import { quiz as npmQuiz } from '@/app/NPM/quizz/quizzData';
import { quiz as toolingQuiz } from '@/app/tooling/quizz/quizzData';
import { quiz as mongoQuiz } from '@/app/mongoDB/quizz/quizzData';
import { quiz as gitQuiz } from '@/app/git/quizz/quizzData';
import { quiz as nodeQuiz } from '@/app/node.js/quizz/quizzData';

/**
 * Convertit un ReactNode en string pour la sérialisation JSON
 * Pour les ReactElements, retourne une représentation textuelle simplifiée
 */
function reactNodeToString(node: any): string {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return node.toString();
  if (typeof node === 'boolean') return node.toString();
  
  // Pour les objets React (éléments JSX)
  if (typeof node === 'object') {
    if (Array.isArray(node)) {
      return node.map(reactNodeToString).join('');
    }
    // Si c'est un ReactElement
    if (node.props !== undefined) {
      // Pour les éléments self-closing comme <br />, remplacer par un espace ou newline
      if (node.type === 'br') {
        return '\n';
      }
      // Si l'élément a des enfants, les traiter récursivement
      if (node.props.children !== undefined) {
        return reactNodeToString(node.props.children);
      }
      // Élément sans enfants
      return '';
    }
  }
  
  return '';
}

/**
 * Transforme les données du quiz pour la sérialisation JSON
 */
function serializeQuizData(quiz: QuizData) {
  return {
    quizTitle: quiz.quizTitle,
    quizSynopsis: reactNodeToString(quiz.quizSynopsis),
    questions: quiz.questions.map(q => ({
      question: q.question,
      questionType: q.questionType,
      answerSelectionType: q.answerSelectionType,
      answers: q.answers,
      correctAnswer: q.correctAnswer,
      messageForCorrectAnswer: q.messageForCorrectAnswer,
      messageForIncorrectAnswer: q.messageForIncorrectAnswer,
      helpMessages: q.helpMessages,
      explanation: q.explanation,
      point: q.point,
      difficulty: q.difficulty,
      codeSnippet: q.codeSnippet
    }))
  };
}

export async function GET() {
  try {
    // Collection de tous les quiz avec leur module associé (excluding UX-UI)
    const allQuizData = {
      docker: serializeQuizData(dockerQuiz),
      react: serializeQuizData(reactQuiz),
      authentification: serializeQuizData(authQuiz),
      'next-js': serializeQuizData(nextjsQuiz),
      npm: serializeQuizData(npmQuiz),
      tooling: serializeQuizData(toolingQuiz),
      mongodb: serializeQuizData(mongoQuiz),
      git: serializeQuizData(gitQuiz),
      'node.js': serializeQuizData(nodeQuiz)
    };

    return NextResponse.json(allQuizData, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error generating quiz data:', error);
    return NextResponse.json(
      { error: 'Failed to generate quiz data' },
      { status: 500 }
    );
  }
}
