import { Question, getQuestions } from "lib/question"

export async function search(searchString: string ,tags: string[], difficulty: string[]): Promise<{ question: any }> {
    let question: Question[] = await getQuestions();
    question = question.filter(question => (question.tags.some((tag: string) => tags.includes(tag)) && 
                                            searchString.toLowerCase().includes(question.id) &&
                                            difficulty.includes(question.difficulty)))
    return { question }
}

