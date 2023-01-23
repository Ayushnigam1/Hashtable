import fs from 'fs'
import path from 'path'

const sectionDirectory = path.join(process.cwd(), 'content')

export function getSections() {
    const fileNames = fs.readdirSync(sectionDirectory)
    const allSections = fileNames.map((fileName) => {
        const section = fileName
        return section
    })
    return allSections
}
