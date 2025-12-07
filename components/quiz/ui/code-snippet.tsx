"use client";

import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { CodeSnippet as CodeSnippetType } from "../types";

interface CodeSnippetProps {
    snippet: CodeSnippetType;
}

export default function CodeSnippet({ snippet }: CodeSnippetProps) {
    const [html, setHtml] = useState<string>("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function highlightCode() {
            try {
                const highlighted = await codeToHtml(snippet.code, {
                    lang: snippet.language,
                    theme: "github-dark",
                });
                setHtml(highlighted);
            } catch (error) {
                console.error("Error highlighting code:", error);
                // Fallback to plain text
                setHtml(`<pre><code>${snippet.code}</code></pre>`);
            } finally {
                setIsLoading(false);
            }
        }

        highlightCode();
    }, [snippet.code, snippet.language]);

    if (isLoading) {
        return (
            <div className="my-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse">
                <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
        );
    }

    return (
        <div className="my-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
            {snippet.title && (
                <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {snippet.title}
                    </span>
                </div>
            )}
            <div 
                className="overflow-x-auto [&_pre]:!my-0 [&_pre]:!rounded-none [&_pre]:!border-0"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    );
}
