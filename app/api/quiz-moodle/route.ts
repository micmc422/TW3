import { NextResponse } from 'next/server';
import { QuizData, QuizQuestion } from '@/components/quiz/types';
import { isValidElement, ReactNode } from 'react';

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
 * Convertit un ReactNode en string pour le XML
 * Remplace les éléments HTML par leur équivalent texte
 */
function reactNodeToString(node: ReactNode | ReactNode[]): string {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return node.toString();
  // Les booléens ne génèrent pas de contenu visible dans React
  if (typeof node === 'boolean') return '';
  
  // Pour les tableaux
  if (Array.isArray(node)) {
    return node.map(reactNodeToString).join('');
  }
  
  // Pour les ReactElements validés
  if (isValidElement(node)) {
    // Pour les éléments self-closing comme <br />, remplacer par un espace ou newline
    if (node.type === 'br') {
      return '\n';
    }
    // Si l'élément a des enfants, les traiter récursivement
    const { children } = node.props as { children?: ReactNode };
    if (children) {
      return reactNodeToString(children);
    }
    // Élément sans enfants
    return '';
  }
  
  return '';
}

/**
 * Échappe les caractères spéciaux pour le XML
 */
function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Échappe le texte pour CDATA (remplace ]]> par ]]]]><![CDATA[>)
 */
function escapeCDATA(text: string): string {
  return text.replace(/]]>/g, ']]]]><![CDATA[>');
}

/**
 * Génère un identifiant unique pour chaque question
 * Utilise un hash simple du module + index de la question
 * Note: Pour une production critique, considérer crypto.createHash pour éviter les collisions
 */
function generateQuestionId(moduleId: string, questionIndex: number): number {
  // Utilise un hash simple basé sur le nom du module et l'index
  // Chaque caractère contribue à un hash unique
  const hash = moduleId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  // Multiplie par 1000 pour éviter les collisions avec l'index
  return hash * 1000 + questionIndex;
}

/**
 * Convertit une question en format Moodle XML
 */
function questionToMoodleXML(
  question: QuizQuestion,
  questionId: number,
  categoryName: string
): string {
  const isSingle = question.answerSelectionType === 'single';
  const questionText = escapeXml(question.question);
  
  // Construire le texte général de feedback
  let generalFeedback = '';
  if (question.explanation) {
    generalFeedback = escapeXml(question.explanation);
  }
  
  // Créer les réponses avec leur pourcentage
  const answersXML = question.answers.map((answer, index) => {
    // Note: correctAnswer utilise une indexation base-1 (1, 2, 3...)
    // alors que les tableaux JS utilisent base-0 (0, 1, 2...)
    // donc on compare avec index + 1
    const isCorrect = question.correctAnswer.includes(index + 1);
    
    // Pour les questions à choix unique: 100% si correct, 0% sinon
    // Pour les questions à choix multiple: distribuer le score entre les bonnes réponses
    let fraction: number;
    if (isSingle) {
      fraction = isCorrect ? 100 : 0;
    } else {
      const correctCount = question.correctAnswer.length;
      fraction = isCorrect ? (100 / correctCount) : 0;
    }
    
    // Feedback spécifique pour cette réponse
    let feedback = '';
    if (!isCorrect && question.helpMessages && question.helpMessages[index]) {
      feedback = escapeXml(question.helpMessages[index]);
    } else if (isCorrect && question.messageForCorrectAnswer) {
      feedback = escapeXml(question.messageForCorrectAnswer);
    } else if (!isCorrect && question.messageForIncorrectAnswer) {
      feedback = escapeXml(question.messageForIncorrectAnswer);
    }
    
    return `      <answer fraction="${fraction}" format="html">
        <text><![CDATA[${escapeCDATA(escapeXml(answer))}]]></text>
        ${feedback ? `<feedback format="html">
          <text><![CDATA[${escapeCDATA(feedback)}]]></text>
        </feedback>` : ''}
      </answer>`;
  }).join('\n');
  
  // Inclure le code snippet dans le texte de la question si présent
  let fullQuestionText = questionText;
  if (question.codeSnippet) {
    const codeTitle = question.codeSnippet.title ? `<p><strong>${escapeXml(question.codeSnippet.title)}</strong></p>` : '';
    const codeBlock = `<pre><code class="language-${escapeXml(question.codeSnippet.language)}">${escapeXml(question.codeSnippet.code)}</code></pre>`;
    fullQuestionText = `${questionText}${codeTitle}${codeBlock}`;
  }
  
  return `  <question type="multichoice">
    <name>
      <text>${categoryName} - Question ${questionId}</text>
    </name>
    <questiontext format="html">
      <text><![CDATA[<p>${escapeCDATA(fullQuestionText)}</p>]]></text>
    </questiontext>
    <generalfeedback format="html">
      <text><![CDATA[${escapeCDATA(generalFeedback)}]]></text>
    </generalfeedback>
    <defaultgrade>${question.point || 1}</defaultgrade>
    <penalty>0.3333333</penalty>
    <hidden>0</hidden>
    <idnumber></idnumber>
    <single>${isSingle ? 'true' : 'false'}</single>
    <shuffleanswers>true</shuffleanswers>
    <answernumbering>abc</answernumbering>
    <showstandardinstruction>1</showstandardinstruction>
${answersXML}
  </question>`;
}

/**
 * Crée une catégorie Moodle pour un module
 */
function createCategory(categoryPath: string): string {
  return `  <question type="category">
    <category>
      <text>$course$/top/${escapeXml(categoryPath)}</text>
    </category>
    <info format="html">
      <text></text>
    </info>
  </question>`;
}

/**
 * Génère le XML Moodle complet pour tous les quiz
 */
function generateMoodleXML(): string {
  const modules = [
    { id: 'docker', quiz: dockerQuiz, name: 'Docker' },
    { id: 'react', quiz: reactQuiz, name: 'React' },
    { id: 'authentification', quiz: authQuiz, name: 'Authentification' },
    { id: 'next-js', quiz: nextjsQuiz, name: 'Next.js' },
    { id: 'npm', quiz: npmQuiz, name: 'NPM' },
    { id: 'tooling', quiz: toolingQuiz, name: 'Tooling' },
    { id: 'mongodb', quiz: mongoQuiz, name: 'MongoDB' },
    { id: 'git', quiz: gitQuiz, name: 'Git' },
    { id: 'node.js', quiz: nodeQuiz, name: 'Node.js' }
  ];
  
  let questionsXML = '';
  
  modules.forEach(module => {
    // Créer une catégorie pour ce module
    const categoryName = `TW3/${module.name}`;
    questionsXML += createCategory(categoryName) + '\n\n';
    
    // Ajouter toutes les questions du module
    module.quiz.questions.forEach((question, index) => {
      const questionId = generateQuestionId(module.id, index);
      questionsXML += questionToMoodleXML(question, questionId, categoryName) + '\n\n';
    });
  });
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<quiz>
${questionsXML.trim()}
</quiz>`;
}

/**
 * Route API pour exporter les quiz au format Moodle XML
 */
export async function GET() {
  try {
    const moodleXML = generateMoodleXML();
    
    return new NextResponse(moodleXML, {
      headers: {
        'Content-Type': 'application/xml',
        'Content-Disposition': 'attachment; filename="tw3-quiz-moodle.xml"',
      },
    });
  } catch (error) {
    console.error('Error generating Moodle XML:', error);
    return NextResponse.json(
      { error: 'Failed to generate Moodle XML' },
      { status: 500 }
    );
  }
}
