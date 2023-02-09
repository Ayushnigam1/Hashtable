import { Question } from "lib/question"

export function search(searchString: string, tags: string[], difficulty: string[], questions: Question[]): Question[] {
    const question = questions.filter(question => (
            (question.tags.some((tag: string) => tags.includes(tag)) || tags.length == 0) &&
            (difficulty.includes(question.difficulty) || difficulty.length == 0) &&
            question.id.toLowerCase().includes(searchString.toLowerCase())
        )
    )
    return question
}

