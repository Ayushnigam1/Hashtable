import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import showdown from 'showdown'
import { generateMdx } from './mdx'

const questionDirectory = path.join(process.cwd(), 'questions')

export interface Question {
    id: string,
    [key: string]: any
}
// Returns question with id and frontmatter
export async function getQuestions(): Promise<Question[]> {
    const fileNames = fs.readdirSync(questionDirectory)
    const allQuestions = fileNames.map((fileName) => {
        const id = fileName.replace(/\.mdx$/, '');
        // Read markdown file as string
        const fullPath = path.join(questionDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        return {
            id,
            ...matterResult.data,
        }
    })
    return allQuestions
}

// Returns question with id and content
export async function getQuestionById(question: string) {
    const filePath = path.join(questionDirectory, `${question}.mdx`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const matterResult = matter(fileContents)

    return await generateMdx(matterResult.content)
}
