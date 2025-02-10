import { useContext } from "react"
import { QuizzContext } from "../context"
import { QuizParagraph, QuizTitle, QuizNextBtn, QuizResetBtn, QuizResetAllBtn } from ".."
import { useWindowSize } from "@/lib/hooks/useWindowSize"
import Confetti from 'react-confetti'
import Image from "next/image"
import HANDSHAKE from "@/public/the-office-handshake.jpg"
import PERFECT from "@/public/programmerhumor-io-programming-memes-883bc87c159f58c.webp"
import SUCCESSKID from "@/public/SuccessKid.jpg"
import PACHA from "@/public/Pacha_Infobox.webp"

export default function QuizzIntro() {
    const { quizTitle, quizSynopsis, currentQuestion, userAnswers, score, totalScore } = useContext(QuizzContext);
    const isCompleted = userAnswers?.[userAnswers?.length - 1][0] !== 0;
    // userAnswers.map((answers) => answers(ans => ans !==))
    if (currentQuestion !== 0) return <></>
    if (isCompleted) {
        if (score === totalScore)
            return <>
                <PerfectQuizz />
                <Image src={PERFECT} alt={""} style={{ maxWidth: "480px", objectFit: "cover", height: "auto", margin: "auto", userSelect: "none", borderRadius: "16px", overflow: "clip" }} />
                <QuizzResultScore />
            </>
        if (score > totalScore / 2)
            return <>
                <SuccessQuizz />
                <Image src={PACHA} alt={""} style={{ maxWidth: "480px", objectFit: "cover", height: "auto", margin: "auto", userSelect: "none", borderRadius: "16px", overflow: "clip" }} />
                <QuizzResultScore />
            </>
        if (score <= totalScore / 2)
            return <>
                <FailedQuizz />
                <Image src={score === 0 ? HANDSHAKE : SUCCESSKID} alt={""} style={{ maxWidth: "480px", objectFit: "cover", height: "auto", margin: "auto", userSelect: "none", borderRadius: "16px", overflow: "clip" }} />
                <QuizzResultScore />
            </>
    }
    return (<>
        <QuizTitle>{quizTitle}</QuizTitle>
        <QuizParagraph>{quizSynopsis}</QuizParagraph>
        <QuizNextBtn>Commencer !</QuizNextBtn>
    </>)
}

function PerfectQuizz() {
    const { width, height } = useWindowSize()

    return <>
        <Confetti
            style={{ position: "fixed", inset: 0 }}
            width={width}
            height={height}
            colors={['#DBFF00', '#FFE236', '#FFCA66', '#FFBA91']}
        />
    </>
}

function SuccessQuizz() {
    const { width, height } = useWindowSize()

    return <>
        <Confetti
            style={{ position: "fixed", inset: 0 }}
            width={width}
            height={height}
        /></>
}
function FailedQuizz() {
    const { width, height } = useWindowSize()

    return <>
        <Confetti
            style={{ position: "fixed", inset: 0 }}
            width={width}
            height={height}
            colors={['#EE005F', '#B62A8F', '#6D4B9A', '#325082']}
        />
    </>
}

function QuizzResultScore() {
    const { score, totalScore } = useContext(QuizzContext)

    // Calculer dashOffset en utilisant le ratio
    const percent = (score / totalScore * 100).toFixed(1);

    return (<>
        <div style={{ maxWidth: "480px", margin: "auto", padding: "1rem", userSelect: "none" }}>
            <>
                <div className="flex justify-center mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                    {score} / {totalScore}
                </div>
                <div className="bg-primary-100 font-semibold text-white dark:bg-primary-100/10" style={{ width: "100%", height: "2rem", borderRadius: "4px", overflow: "clip" }}>
                    <div style={{
                        backgroundColor: score === 0 ? "rgb(199, 0, 57)" : score > totalScore / 2 ? "rgba(0, 128, 0, .8)" : "rgb(255, 191, 0)",
                        width: percent + "%",
                        minWidth: "8px",
                        height: "100%",
                        borderRadius: "4px",
                    }} />
                </div>
                <p style={{ padding: "8px 0" }}>
                    {score === totalScore ?
                        `Félicitations ! Vous avez atteint un score parfait de 100% ! Votre maîtrise totale du sujet montre que vous avez une compréhension exceptionnelle des concepts. Continuez ainsi, votre rigueur et vos efforts portent leurs fruits. Bravo !` :
                        score <= 0 ?
                            `Il semble que vous ayez obtenu un score de 0%. Ne vous inquiétez pas, c'est l'occasion parfaite pour identifier les notions à retravailler. N'hésitez pas à reprendre les bases et à demander de l'aide si nécessaire. Avec de la persévérance et du travail, vous verrez rapidement des progrès !` :
                            score > totalScore / 2 ?
                                `Bien joué ! Vous avez obtenu un score de ${Math.abs(score / totalScore * 100)}. Vous avez montré une bonne compréhension globale des sujets abordés, même si quelques points peuvent encore être améliorés. Avec un peu de révision, vous serez en mesure de progresser davantage. Continuez vos efforts !` :
                                `Vous avez obtenu un score de ${Math.abs(score / totalScore * 100)}. Certains concepts semblent poser problème, mais ne vous découragez pas. Il est important de revoir les points où vous avez eu des difficultés et de refaire des exercices pour améliorer votre compréhension. Vous êtes sur la bonne voie !`
                    }
                </p>
                <QuizResetAllBtn>Recommencer</QuizResetAllBtn>
            </>
        </div>
    </>
    )
}