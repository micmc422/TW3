import { QuestionDifficulty } from "../types";
import { cn } from "@/lib/utils";

interface DifficultyIndicatorProps {
    difficulty: QuestionDifficulty;
}

/**
 * Composant affichant un indicateur visuel et textuel de difficulté d'une question
 * 🟢 Facile | 🟡 Intermédiaire | 🔴 Expert
 */
export default function DifficultyIndicator({ difficulty }: DifficultyIndicatorProps) {
    const config = {
        facile: {
            emoji: "🟢",
            label: "Facile",
            color: "text-green-600 dark:text-green-400",
            bgColor: "bg-green-500/10",
            dots: 1
        },
        intermédiaire: {
            emoji: "🟡",
            label: "Intermédiaire",
            color: "text-yellow-600 dark:text-yellow-400",
            bgColor: "bg-yellow-500/10",
            dots: 2
        },
        expert: {
            emoji: "🔴",
            label: "Expert",
            color: "text-red-600 dark:text-red-400",
            bgColor: "bg-red-500/10",
            dots: 3
        }
    };

    const { emoji, label, color, bgColor, dots } = config[difficulty];

    return (
        <div className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-2",
            bgColor
        )}>
            <span className="text-sm" aria-hidden="true">{emoji}</span>
            <span className={cn("font-semibold", color)}>{label}</span>
            <div className="flex gap-1 ml-1" aria-label={`Niveau ${dots} sur 3`}>
                {[1, 2, 3].map((level) => (
                    <div
                        key={level}
                        className={cn(
                            "w-1.5 h-1.5 rounded-full transition-colors",
                            level <= dots ? color.replace("text-", "bg-") : "bg-gray-300 dark:bg-gray-600"
                        )}
                    />
                ))}
            </div>
        </div>
    );
}
