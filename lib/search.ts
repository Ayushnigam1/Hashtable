import { Question } from "lib/question"

export function search(searchString: string, tags: string[], difficulty: string | null, topic: string | null, questions: Question[]): Question[] {
    const question = questions.filter(question => (
            (question.tags.some((tag: string) => tags.includes(tag)) || tags.length == 0) &&
            (!difficulty || question.difficulty == difficulty) &&
            (!topic || question.topic.includes(topic)) &&
            question.id.toLowerCase().includes(searchString.toLowerCase())
        )
    )
    return question
}

