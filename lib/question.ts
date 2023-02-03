import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import showdown from 'showdown'

const questionDirectory = path.join(process.cwd(), 'questions')

export interface Question {
    id: string,
    [key: string]: any
}
// Returns question with id and frontmatter
export async function getQuestions(): Promise<Question[]> {
    const fileNames = fs.readdirSync(questionDirectory)
    const allQuestions = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
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
    const filePath = path.join(questionDirectory, `${question}.md`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const matterResult = matter(fileContents)

    var mdconverter = new showdown.Converter()

    const processedContent = mdconverter.makeHtml(matterResult.content)

    const content = processedContent.toString()

    return {
        ...matterResult.data,
        content
    }
}
