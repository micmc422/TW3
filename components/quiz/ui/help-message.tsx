import { AnimatePresence, motion } from "motion/react"
import { AlertCircle, CheckCircle2, Info } from "lucide-react"

type HelpMessageProps = {
    message: string;
    type: "correct" | "incorrect" | "info";
}

const messageVariant = {
    initial: {
        opacity: 0,
        y: -10,
        height: 0
    },
    animate: {
        opacity: 1,
        y: 0,
        height: "auto"
    },
    exit: {
        opacity: 0,
        y: -10,
        height: 0
    }
}

export default function HelpMessage({ message, type }: HelpMessageProps) {
    const colors = {
        correct: {
            bg: "rgba(0, 128, 0, 0.1)",
            border: "rgba(0, 128, 0, 0.5)",
            text: "text-green-700 dark:text-green-400",
            icon: <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
        },
        incorrect: {
            bg: "rgba(127, 29, 29, 0.1)",
            border: "rgba(127, 29, 29, 0.5)",
            text: "text-red-700 dark:text-red-400",
            icon: <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
        },
        info: {
            bg: "rgba(59, 130, 246, 0.1)",
            border: "rgba(59, 130, 246, 0.5)",
            text: "text-blue-700 dark:text-blue-400",
            icon: <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        }
    }

    const style = colors[type]

    return (
        <motion.div
            variants={messageVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`mt-4 p-3 rounded-lg flex items-start gap-2 ${style.text}`}
            style={{
                backgroundColor: style.bg,
                border: `1px solid ${style.border}`
            }}
        >
            <div className="flex-shrink-0 mt-0.5">
                {style.icon}
            </div>
            <p className="text-sm leading-relaxed" style={{ margin: 0 }}>
                {message}
            </p>
        </motion.div>
    )
}
